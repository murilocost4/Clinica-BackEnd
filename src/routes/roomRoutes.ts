import express from 'express';
import {
  createRoom,
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} from '../controllers/roomController';

const router = express.Router();

// Rota para criar uma nova sala
router.post('/', createRoom);

// Rota para listar todas as salas
router.get('/', getRooms);

// Rota para obter uma sala por ID
router.get('/:id', getRoomById);

// Rota para atualizar uma sala
router.put('/:id', updateRoom);

// Rota para excluir uma sala
router.delete('/:id', deleteRoom);

export default router;