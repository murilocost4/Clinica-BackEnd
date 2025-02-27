import { PrismaClient } from '@prisma/client';

// Cria uma instância do Prisma Client
const prisma = new PrismaClient();

// Função para conectar ao banco de dados
export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

// Função para desconectar do banco de dados
export const disconnectDB = async () => {
  await prisma.$disconnect();
  console.log('Database disconnected');
};

export default prisma;