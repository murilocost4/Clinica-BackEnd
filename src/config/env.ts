import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Exporta as variáveis de ambiente
export const env = {
  PORT: process.env.PORT || 3001,
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres:mumel0615@localhost:5432/clinica-medica',
  JWT_SECRET: process.env.JWT_SECRET || 'secret-key',
  NODE_ENV: process.env.NODE_ENV || 'development',
};