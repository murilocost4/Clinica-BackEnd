import { Request, Response } from 'express';
import { prisma } from '../config'; // Importe o Prisma Client
import { successResponse, errorResponse } from '../utils/response'; // Importe os utilitários de resposta

// Criar uma nova configuração
export const createConfiguration = async (req: Request, res: Response) => {
  const configurationData = req.body;
  try {
    const configuration = await prisma.configuration.create({
      data: configurationData,
    });
    successResponse(res, configuration, 201); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Configuration creation failed', 400); // Resposta de erro
  }
};

// Listar todas as configurações
export const getConfigurations = async (req: Request, res: Response) => {
  try {
    const configurations = await prisma.configuration.findMany();
    successResponse(res, configurations); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Failed to fetch configurations', 500); // Resposta de erro
  }
};

// Obter uma configuração por ID
export const getConfigurationById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const configuration = await prisma.configuration.findUnique({
      where: { id: parseInt(id) },
    });
    if (configuration) {
      successResponse(res, configuration); // Resposta de sucesso
    } else {
      errorResponse(res, 'Configuration not found', 404); // Resposta de erro
    }
  } catch (error) {
    errorResponse(res, 'Failed to fetch configuration', 500); // Resposta de erro
  }
};

// Atualizar uma configuração
export const updateConfiguration = async (req: Request, res: Response) => {
  const { id } = req.params;
  const configurationData = req.body;
  try {
    const configuration = await prisma.configuration.update({
      where: { id: parseInt(id) },
      data: configurationData,
    });
    successResponse(res, configuration); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Configuration update failed', 400); // Resposta de erro
  }
};

// Excluir uma configuração
export const deleteConfiguration = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.configuration.delete({
      where: { id: parseInt(id) },
    });
    successResponse(res, null, 204); // Resposta de sucesso (sem conteúdo)
  } catch (error) {
    errorResponse(res, 'Configuration deletion failed', 400); // Resposta de erro
  }
};