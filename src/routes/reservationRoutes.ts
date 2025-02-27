import express from 'express';
import {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
} from '../controllers/reservationController';

const router = express.Router();

// Rota para criar uma nova reserva
router.post('/', createReservation);

// Rota para listar todas as reservas
router.get('/', getReservations);

// Rota para obter uma reserva por ID
router.get('/:id', getReservationById);

// Rota para atualizar uma reserva
router.put('/:id', updateReservation);

// Rota para excluir uma reserva
router.delete('/:id', deleteReservation);

export default router;