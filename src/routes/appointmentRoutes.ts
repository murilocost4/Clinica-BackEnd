import express from 'express';
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from '../controllers/appointmentController';

const router = express.Router();

// Rota para criar um novo agendamento
router.post('/', createAppointment);

// Rota para listar todos os agendamentos
router.get('/', getAppointments);

// Rota para obter um agendamento por ID
router.get('/:id', getAppointmentById);

// Rota para atualizar um agendamento
router.put('/:id', updateAppointment);

// Rota para excluir um agendamento
router.delete('/:id', deleteAppointment);

export default router;