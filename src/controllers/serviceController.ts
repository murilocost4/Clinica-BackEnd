import { Request, Response } from 'express';
import { prisma } from '../config'; // Importe o Prisma Client
import { successResponse, errorResponse } from '../utils/response'; // Importe os utilitários de resposta

// Criar um novo serviço
export const createService = async (req: Request, res: Response) => {
  const serviceData = req.body;
  try {
    const service = await prisma.service.create({
      data: serviceData,
    });
    successResponse(res, service, 201); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Service creation failed', 400); // Resposta de erro
  }
};

// Listar todos os serviços
export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await prisma.service.findMany();
    successResponse(res, services); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Failed to fetch services', 500); // Resposta de erro
  }
};

// Obter um serviço por ID
export const getServiceById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const service = await prisma.service.findUnique({
      where: { id: parseInt(id) },
    });
    if (service) {
      successResponse(res, service); // Resposta de sucesso
    } else {
      errorResponse(res, 'Service not found', 404); // Resposta de erro
    }
  } catch (error) {
    errorResponse(res, 'Failed to fetch service', 500); // Resposta de erro
  }
};

// Atualizar um serviço
export const updateService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const serviceData = req.body;
  try {
    const service = await prisma.service.update({
      where: { id: parseInt(id) },
      data: serviceData,
    });
    successResponse(res, service); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Service update failed', 400); // Resposta de erro
  }
};

// Excluir um serviço
export const deleteService = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.service.delete({
      where: { id: parseInt(id) },
    });
    successResponse(res, null, 204); // Resposta de sucesso (sem conteúdo)
  } catch (error) {
    errorResponse(res, 'Service deletion failed', 400); // Resposta de erro
  }
};