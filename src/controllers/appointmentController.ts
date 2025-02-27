import { Request, Response } from 'express';
import { prisma } from '../config'; // Importe o Prisma Client
import { successResponse, errorResponse } from '../utils/response'; // Importe os utilitários de resposta

// Criar um novo agendamento
export const createAppointment = async (req: Request, res: Response) => {
  const appointmentData = req.body;
  try {
    const appointment = await prisma.appointment.create({
      data: appointmentData,
    });
    successResponse(res, appointment, 201); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Appointment creation failed', 400); // Resposta de erro
  }
};

// Listar todos os agendamentos
export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await prisma.appointment.findMany();
    successResponse(res, appointments); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Failed to fetch appointments', 500); // Resposta de erro
  }
};

// Obter um agendamento por ID
export const getAppointmentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const appointment = await prisma.appointment.findUnique({
      where: { id: parseInt(id) },
    });
    if (appointment) {
      successResponse(res, appointment); // Resposta de sucesso
    } else {
      errorResponse(res, 'Appointment not found', 404); // Resposta de erro
    }
  } catch (error) {
    errorResponse(res, 'Failed to fetch appointment', 500); // Resposta de erro
  }
};

// Atualizar um agendamento
export const updateAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const appointmentData = req.body;
  try {
    const appointment = await prisma.appointment.update({
      where: { id: parseInt(id) },
      data: appointmentData,
    });
    successResponse(res, appointment); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Appointment update failed', 400); // Resposta de erro
  }
};

// Excluir um agendamento
export const deleteAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.appointment.delete({
      where: { id: parseInt(id) },
    });
    successResponse(res, null, 204); // Resposta de sucesso (sem conteúdo)
  } catch (error) {
    errorResponse(res, 'Appointment deletion failed', 400); // Resposta de erro
  }
};