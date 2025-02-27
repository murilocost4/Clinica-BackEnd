import express from 'express';
import {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
} from '../controllers/serviceController';

const router = express.Router();

// Rota para criar um novo serviço
router.post('/', createService);

// Rota para listar todos os serviços
router.get('/', getServices);

// Rota para obter um serviço por ID
router.get('/:id', getServiceById);

// Rota para atualizar um serviço
router.put('/:id', updateService);

// Rota para excluir um serviço
router.delete('/:id', deleteService);

export default router;