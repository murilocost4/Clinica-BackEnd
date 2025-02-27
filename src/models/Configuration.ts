export interface Configuration {
    id: number;
    clinicName: string;
    clinicAddress: {
      street: string;
      number: string;
      complement?: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
    };
    clinicPhone: string;
    clinicEmail: string;
    taxRate: number; // Taxa de repasse para a clínica
    createdAt: Date;
    updatedAt: Date;
  }