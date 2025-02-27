export interface Service {
    id: number;
    name: string;
    description: string;
    basePrice: number;
    duration: number; // Duração em minutos
    createdAt: Date;
    updatedAt: Date;
  }