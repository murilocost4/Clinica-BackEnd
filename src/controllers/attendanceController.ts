import { Request, Response } from 'express';
import { prisma } from '../config'; // Importe o Prisma Client
import { successResponse, errorResponse } from '../utils/response'; // Importe os utilitários de resposta

// Criar um novo atendimento
export const createAttendance = async (req: Request, res: Response) => {
  const attendanceData = req.body;
  try {
    const attendance = await prisma.attendance.create({
      data: attendanceData,
    });
    successResponse(res, attendance, 201); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Attendance creation failed', 400); // Resposta de erro
  }
};

// Listar todos os atendimentos
export const getAttendances = async (req: Request, res: Response) => {
  try {
    const attendances = await prisma.attendance.findMany();
    successResponse(res, attendances); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Failed to fetch attendances', 500);
  }
};

// Obter um atendimento por ID
export const getAttendanceById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const attendance = await prisma.attendance.findUnique({
      where: { id: parseInt(id) },
    });
    if (attendance) {
      successResponse(res, attendance); // Resposta de sucesso
    } else {
      errorResponse(res, 'Attendance not found', 404); // Resposta de erro
    }
  } catch (error) {
    errorResponse(res, 'Failed to fetch attendance', 500); // Resposta de erro
  }
};

// Atualizar um atendimento
export const updateAttendance = async (req: Request, res: Response) => {
  const { id } = req.params;
  const attendanceData = req.body;
  try {
    const attendance = await prisma.attendance.update({
      where: { id: parseInt(id) },
      data: attendanceData,
    });
    successResponse(res, attendance); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Attendance update failed', 400); // Resposta de erro
  }
};

// Excluir um atendimento
export const deleteAttendance = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.attendance.delete({
      where: { id: parseInt(id) },
    });
    successResponse(res, null, 204); // Resposta de sucesso (sem conteúdo)
  } catch (error) {
    errorResponse(res, 'Attendance deletion failed', 400); // Resposta de erro
  }
};