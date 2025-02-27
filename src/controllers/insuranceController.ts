import { Request, Response } from 'express';
import { prisma } from '../config'; // Importe o Prisma Client
import { successResponse, errorResponse } from '../utils/response'; // Importe os utilitários de resposta

// Criar um novo convênio
export const createInsurance = async (req: Request, res: Response) => {
  const insuranceData = req.body;
  try {
    const insurance = await prisma.insurance.create({
      data: insuranceData,
    });
    successResponse(res, insurance, 201); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Insurance creation failed', 400); // Resposta de erro
  }
};

// Listar todos os convênios
export const getInsurances = async (req: Request, res: Response) => {
  try {
    const insurances = await prisma.insurance.findMany();
    successResponse(res, insurances); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Failed to fetch insurances', 500); // Resposta de erro
  }
};

// Obter um convênio por ID
export const getInsuranceById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const insurance = await prisma.insurance.findUnique({
      where: { id: parseInt(id) },
    });
    if (insurance) {
      successResponse(res, insurance); // Resposta de sucesso
    } else {
      errorResponse(res, 'Insurance not found', 404); // Resposta de erro
    }
  } catch (error) {
    errorResponse(res, 'Failed to fetch insurance', 500); // Resposta de erro
  }
};

// Atualizar um convênio
export const updateInsurance = async (req: Request, res: Response) => {
  const { id } = req.params;
  const insuranceData = req.body;
  try {
    const insurance = await prisma.insurance.update({
      where: { id: parseInt(id) },
      data: insuranceData,
    });
    successResponse(res, insurance); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Insurance update failed', 400); // Resposta de erro
  }
};

// Excluir um convênio
export const deleteInsurance = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.insurance.delete({
      where: { id: parseInt(id) },
    });
    successResponse(res, null, 204); // Resposta de sucesso (sem conteúdo)
  } catch (error) {
    errorResponse(res, 'Insurance deletion failed', 400); // Resposta de erro
  }
};