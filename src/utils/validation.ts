import { Request, Response, NextFunction } from 'express';

// Validação de CPF
export const validateCPF = (cpf: string): boolean => {
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
};

// Validação de e-mail
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Middleware para validação de dados
export const validateUserData = (req: Request, res: Response, next: NextFunction) => {
  const { cpf, email } = req.body;

  if (!validateCPF(cpf)) {
    return res.status(400).json({ error: 'Invalid CPF format' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  next();
};