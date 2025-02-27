import { Request, Response } from 'express';
import { prisma } from '../config'; // Importe o Prisma Client
import { successResponse, errorResponse } from '../utils/response'; // Importe os utilitários de resposta

// Criar um novo log de auditoria
export const createAuditLog = async (req: Request, res: Response) => {
  const auditLogData = req.body;
  try {
    const auditLog = await prisma.auditLog.create({
      data: auditLogData,
    });
    successResponse(res, auditLog, 201); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Audit log creation failed', 400); // Resposta de erro
  }
};

// Listar todos os logs de auditoria
export const getAuditLogs = async (req: Request, res: Response) => {
  try {
    const auditLogs = await prisma.auditLog.findMany();
    successResponse(res, auditLogs); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Failed to fetch audit logs', 500); // Resposta de erro
  }
};

// Obter um log de auditoria por ID
export const getAuditLogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const auditLog = await prisma.auditLog.findUnique({
      where: { id: parseInt(id) },
    });
    if (auditLog) {
      successResponse(res, auditLog); // Resposta de sucesso
    } else {
      errorResponse(res, 'Audit log not found', 404); // Resposta de erro
    }
  } catch (error) {
    errorResponse(res, 'Failed to fetch audit log', 500); // Resposta de erro
  }
};

// Atualizar um log de auditoria
export const updateAuditLog = async (req: Request, res: Response) => {
  const { id } = req.params;
  const auditLogData = req.body;
  try {
    const auditLog = await prisma.auditLog.update({
      where: { id: parseInt(id) },
      data: auditLogData,
    });
    successResponse(res, auditLog); // Resposta de sucesso
  } catch (error) {
    errorResponse(res, 'Audit log update failed', 400); // Resposta de erro
  }
};

// Excluir um log de auditoria
export const deleteAuditLog = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.auditLog.delete({
      where: { id: parseInt(id) },
    });
    successResponse(res, null, 204); // Resposta de sucesso (sem conteúdo)
  } catch (error) {
    errorResponse(res, 'Audit log deletion failed', 400); // Resposta de erro
  }
};