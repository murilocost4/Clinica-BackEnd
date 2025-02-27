export interface Room {
    id: number;
    name: string;
    capacity: number;
    equipment: string[]; // Lista de equipamentos
    createdAt: Date;
    updatedAt: Date;
  }