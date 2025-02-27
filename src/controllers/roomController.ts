import { Request, Response } from 'express';
import { prisma } from '../config'; // Importe o Prisma Client
import { successResponse, errorResponse } from '../utils/response'; // Importe os utilitários de resposta

// Criar uma nova sala
export const createRoom = async (req: Request, res: Response) => {
  const roomData = req.body;
  try {
    const room = await prisma.room.create({
      data: roomData,
    });
    successResponse(res, room, 201); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Room creation failed', 400); // Resposta de erro
  }
};

// Listar todas as salas
export const getRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await prisma.room.findMany();
    successResponse(res, rooms); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Failed to fetch rooms', 500); // Resposta de erro
  }
};

// Obter uma sala por ID
export const getRoomById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const room = await prisma.room.findUnique({
      where: { id: parseInt(id) },
    });
    if (room) {
      successResponse(res, room); // Resposta de sucesso
    } else {
      errorResponse(res, 'Room not found', 404); // Resposta de erro
    }
  } catch (error) {
    errorResponse(res, 'Failed to fetch room', 500); // Resposta de erro
  }
};

// Atualizar uma sala
export const updateRoom = async (req: Request, res: Response) => {
  const { id } = req.params;
  const roomData = req.body;
  try {
    const room = await prisma.room.update({
      where: { id: parseInt(id) },
      data: roomData,
    });
    successResponse(res, room); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Room update failed', 400); // Resposta de erro
  }
};

// Excluir uma sala
export const deleteRoom = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.room.delete({
      where: { id: parseInt(id) },
    });
    successResponse(res, null, 204); // Resposta de sucesso (sem conteúdo)
  } catch (error) {
    errorResponse(res, 'Room deletion failed', 400); // Resposta de erro
  }
};