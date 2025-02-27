import express from 'express';
import userRoutes from './userRoutes';
import serviceRoutes from './serviceRoutes';
import insuranceRoutes from './insuranceRoutes';
import roomRoutes from './roomRoutes';
import reservationRoutes from './reservationRoutes';
import appointmentRoutes from './appointmentRoutes';
import attendanceRoutes from './attendanceRoutes';
import financialRoutes from './financialRoutes';
import configurationRoutes from './configurationRoutes';
import auditLogRoutes from './auditLogRoutes';

const router = express.Router();

// Configuração das rotas
router.use('/users', userRoutes);
router.use('/services', serviceRoutes);
router.use('/insurances', insuranceRoutes);
router.use('/rooms', roomRoutes);
router.use('/reservations', reservationRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/attendances', attendanceRoutes);
router.use('/financials', financialRoutes);
router.use('/configurations', configurationRoutes);
router.use('/audit-logs', auditLogRoutes);

export default router;