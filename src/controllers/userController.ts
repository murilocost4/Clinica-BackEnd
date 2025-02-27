import { Request, Response } from 'express';
import { prisma } from '../config'; // Importe o Prisma Client
import { successResponse, errorResponse } from '../utils/response'; // Importe os utilitários de resposta
import { validateUserData } from '../utils/validation'; // Importe a validação de dados

// Criar um novo usuário
export const createUser = async (req: Request, res: Response) => {
  try {
    // Valida os dados do usuário antes de criar
    validateUserData(req, res, async () => {
      const userData = req.body;
      const user = await prisma.user.create({
        data: userData,
      });
      successResponse(res, user, 201); // Resposta de sucesso
    });
  } catch (error) {
    errorResponse(res, 'User creation failed', 400); // Resposta de erro
  }
};

// Listar todos os usuários
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    successResponse(res, users); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Failed to fetch users', 500); // Resposta de erro
  }
};

// Obter um usuário por ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (user) {
      successResponse(res, user); // Resposta de sucesso
    } else {
      errorResponse(res, 'User not found', 404); // Resposta de erro
    }
  } catch (error) {
    errorResponse(res, 'Failed to fetch user', 500); // Resposta de erro
  }
};

// Atualizar um usuário
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userData = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: userData,
    });
    successResponse(res, user); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'User update failed', 400); // Resposta de erro
  }
};

// Excluir um usuário
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    successResponse(res, null, 204); // Resposta de sucesso (sem conteúdo)
  } catch (error) {
    errorResponse(res, 'User deletion failed', 400); // Resposta de erro
  }
};