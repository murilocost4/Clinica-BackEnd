export interface Appointment {
    id: number;
    patientId: number;
    serviceId: number;
    professionalId: number;
    roomId: number;
    insuranceId?: number; // Opcional
    dateTime: Date;
    status: string; // Solicitado, Confirmado, Realizado, Cancelado
    notes?: string; // Opcional
    createdAt: Date;
    updatedAt: Date;
  }