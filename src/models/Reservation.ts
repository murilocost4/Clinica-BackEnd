export interface Reservation {
    id: number;
    roomId: number;
    professionalId: number;
    startDateTime: Date;
    endDateTime: Date;
    status: string; // Confirmada, Cancelada, Pendente
    createdAt: Date;
    updatedAt: Date;
  }