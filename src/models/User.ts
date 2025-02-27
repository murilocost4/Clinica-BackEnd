export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string; // Adm, Recepção, Profissional, Paciente
    cpf: string;
    birthDate: Date;
    gender: string;
    maritalStatus: string;
    fatherName: string;
    motherName: string;
    phone: string;
    address: {
      street: string;
      number: string;
      complement?: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
    };
    createdAt: Date;
    updatedAt: Date;
  }