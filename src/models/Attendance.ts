export interface Attendance {
    id: number;
    appointmentId: number;
    anamnesis: {
      symptoms: string;
      medicalHistory: string;
      allergies: string;
      attachments: string[]; // URLs ou paths dos anexos
    };
    medicalRecord: {
      diagnosis: string;
      prescription: {
        medication: string;
        dosage: string;
      }[];
      notes: string;
    };
    status: string; // Em espera, Em atendimento, Finalizado
    createdAt: Date;
    updatedAt: Date;
  }