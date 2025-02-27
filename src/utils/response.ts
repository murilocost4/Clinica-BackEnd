import { Response } from 'express';

// Formatação de resposta de sucesso
export const successResponse = (res: Response, data: any, statusCode: number = 200) => {
  res.status(statusCode).json({
    success: true,
    data,
  });
};

// Formatação de resposta de erro
export const errorResponse = (res: Response, message: string, statusCode: number = 400) => {
  res.status(statusCode).json({
    success: false,
    error: message,
  });
};