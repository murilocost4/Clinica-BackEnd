export interface AuditLog {
    id: number;
    userId: number;
    action: string; // Ação realizada (ex: Criar usuário)
    entity: string; // Entidade afetada (ex: User)
    entityId: number; // ID da entidade afetada
    timestamp: Date;
    details: Record<string, any>; // Detalhes da ação (objeto JSON)
  }