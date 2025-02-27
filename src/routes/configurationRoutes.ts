import express from 'express';
import {
  createConfiguration,
  getConfigurations,
  getConfigurationById,
  updateConfiguration,
  deleteConfiguration,
} from '../controllers/configurationController';

const router = express.Router();

// Rota para criar uma nova configuração
router.post('/', createConfiguration);

// Rota para listar todas as configurações
router.get('/', getConfigurations);

// Rota para obter uma configuração por ID
router.get('/:id', getConfigurationById);

// Rota para atualizar uma configuração
router.put('/:id', updateConfiguration);

// Rota para excluir uma configuração
router.delete('/:id', deleteConfiguration);

export default router;