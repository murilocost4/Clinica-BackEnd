export interface Financial {
    id: number;
    attendanceId: number;
    totalAmount: number;
    insuranceDiscount: number;
    professionalAmount: number;
    clinicAmount: number;
    paymentStatus: string; // Pendente, Pago, Cancelado
    paymentMethod: string; // Dinheiro, Cartão, Pix
    createdAt: Date;
    updatedAt: Date;
  }