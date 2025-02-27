import express from 'express';
import {
  createAttendance,
  getAttendances,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
} from '../controllers/attendanceController';

const router = express.Router();

// Rota para criar um novo atendimento
router.post('/', createAttendance);

// Rota para listar todos os atendimentos
router.get('/', getAttendances);

// Rota para obter um atendimento por ID
router.get('/:id', getAttendanceById);

// Rota para atualizar um atendimento
router.put('/:id', updateAttendance);

// Rota para excluir um atendimento
router.delete('/:id', deleteAttendance);

export default router;