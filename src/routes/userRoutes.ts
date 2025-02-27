import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController';

const router = express.Router();

// Rota para criar um novo usuário
router.post('/', createUser);

// Rota para listar todos os usuários
router.get('/', getUsers);

// Rota para obter um usuário por ID
router.get('/:id', getUserById);

// Rota para atualizar um usuário
router.put('/:id', updateUser);

// Rota para excluir um usuário
router.delete('/:id', deleteUser);

export default router;