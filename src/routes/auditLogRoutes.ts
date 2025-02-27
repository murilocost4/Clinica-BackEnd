import express from 'express';
import {
  createAuditLog,
  getAuditLogs,
  getAuditLogById,
  updateAuditLog,
  deleteAuditLog,
} from '../controllers/auditLogController';

const router = express.Router();

// Rota para criar um novo log de auditoria
router.post('/', createAuditLog);

// Rota para listar todos os logs de auditoria
router.get('/', getAuditLogs);

// Rota para obter um log de auditoria por ID
router.get('/:id', getAuditLogById);

// Rota para atualizar um log de auditoria
router.put('/:id', updateAuditLog);

// Rota para excluir um log de auditoria
router.delete('/:id', deleteAuditLog);

export default router;