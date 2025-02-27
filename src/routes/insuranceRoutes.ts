import express from 'express';
import {
  createInsurance,
  getInsurances,
  getInsuranceById,
  updateInsurance,
  deleteInsurance,
} from '../controllers/insuranceController';

const router = express.Router();

// Rota para criar um novo convênio
router.post('/', createInsurance);

// Rota para listar todos os convênios
router.get('/', getInsurances);

// Rota para obter um convênio por ID
router.get('/:id', getInsuranceById);

// Rota para atualizar um convênio
router.put('/:id', updateInsurance);

// Rota para excluir um convênio
router.delete('/:id', deleteInsurance);

export default router;