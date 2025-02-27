import express from 'express';
import {
  createFinancial,
  getFinancials,
  getFinancialById,
  updateFinancial,
  deleteFinancial,
} from '../controllers/financialController';

const router = express.Router();

// Rota para criar um novo registro financeiro
router.post('/', createFinancial);

// Rota para listar todos os registros financeiros
router.get('/', getFinancials);

// Rota para obter um registro financeiro por ID
router.get('/:id', getFinancialById);

// Rota para atualizar um registro financeiro
router.put('/:id', updateFinancial);

// Rota para excluir um registro financeiro
router.delete('/:id', deleteFinancial);

export default router;