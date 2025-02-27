import { Request, Response } from 'express';
import { prisma } from '../config'; // Importe o Prisma Client
import { successResponse, errorResponse } from '../utils/response'; // Importe os utilitários de resposta

// Criar um novo registro financeiro
export const createFinancial = async (req: Request, res: Response) => {
  const financialData = req.body;
  try {
    const financial = await prisma.financial.create({
      data: financialData,
    });
    successResponse(res, financial, 201); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Financial record creation failed', 400); // Resposta de erro
  }
};

// Listar todos os registros financeiros
export const getFinancials = async (req: Request, res: Response) => {
  try {
    const financials = await prisma.financial.findMany();
    successResponse(res, financials); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Failed to fetch financial records', 500); // Resposta de erro
  }
};

// Obter um registro financeiro por ID
export const getFinancialById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const financial = await prisma.financial.findUnique({
      where: { id: parseInt(id) },
    });
    if (financial) {
      successResponse(res, financial); // Resposta de sucesso
    } else {
      errorResponse(res, 'Financial record not found', 404); // Resposta de erro
    }
  } catch (error) {
    errorResponse(res, 'Failed to fetch financial record', 500); // Resposta de erro
  }
};

// Atualizar um registro financeiro
export const updateFinancial = async (req: Request, res: Response) => {
  const { id } = req.params;
  const financialData = req.body;
  try {
    const financial = await prisma.financial.update({
      where: { id: parseInt(id) },
      data: financialData,
    });
    successResponse(res, financial); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Financial record update failed', 400); // Resposta de erro
  }
};

// Excluir um registro financeiro
export const deleteFinancial = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.financial.delete({
      where: { id: parseInt(id) },
    });
    successResponse(res, null, 204); // Resposta de sucesso (sem conteúdo)
  } catch (error) {
    errorResponse(res, 'Financial record deletion failed', 400); // Resposta de erro
  }
};