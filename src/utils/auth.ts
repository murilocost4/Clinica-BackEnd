import jwt from 'jsonwebtoken';
import { env } from '../config'; // Importe as variáveis de ambiente

// Geração de token JWT
export const generateToken = (userId: number, role: string): string => {
  return jwt.sign({ userId, role }, env.JWT_SECRET, {
    expiresIn: '1h', // Token expira em 1 hora
  });
};

// Verificação de token JWT
export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

// Middleware de autenticação
export const authenticate = (req: any, res: any, next: any) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: 'Invalid token.' });
  }

  req.user = decoded;
  next();
};