import { Request, Response } from 'express';
import { prisma } from '../config'; // Importe o Prisma Client
import { successResponse, errorResponse } from '../utils/response'; // Importe os utilitários de resposta

// Criar uma nova reserva
export const createReservation = async (req: Request, res: Response) => {
  const reservationData = req.body;
  try {
    const reservation = await prisma.reservation.create({
      data: reservationData,
    });
    successResponse(res, reservation, 201); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Reservation creation failed', 400); // Resposta de erro
  }
};

// Listar todas as reservas
export const getReservations = async (req: Request, res: Response) => {
  try {
    const reservations = await prisma.reservation.findMany();
    successResponse(res, reservations); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Failed to fetch reservations', 500); // Resposta de erro
  }
};

// Obter uma reserva por ID
export const getReservationById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const reservation = await prisma.reservation.findUnique({
      where: { id: parseInt(id) },
    });
    if (reservation) {
      successResponse(res, reservation); // Resposta de sucesso
    } else {
      errorResponse(res, 'Reservation not found', 404); // Resposta de erro
    }
  } catch (error) {
    errorResponse(res, 'Failed to fetch reservation', 500); // Resposta de erro
  }
};

// Atualizar uma reserva
export const updateReservation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const reservationData = req.body;
  try {
    const reservation = await prisma.reservation.update({
      where: { id: parseInt(id) },
      data: reservationData,
    });
    successResponse(res, reservation); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Reservation update failed', 400); // Resposta de erro
  }
};

// Excluir uma reserva
export const deleteReservation = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.reservation.delete({
      where: { id: parseInt(id) },
    });
    successResponse(res, null, 204); // Resposta de sucesso (sem conteúdo)
  } catch (error) {
    errorResponse(res, 'Reservation deletion failed', 400); // Resposta de erro
  }
};