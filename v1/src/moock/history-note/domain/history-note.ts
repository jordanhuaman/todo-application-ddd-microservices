import { UUID } from "../../shared/domain/UUID";

export class HistoryNote {
  private readonly id: number;
  private readonly todoId: UUID;
  private initialSate: string;
  private finalSate: string;
  private updateAt: string | undefined;
  private readonly createAt: string;

  constructor(id: number, todoId: UUID, initialSate: string, finalSate: string, createAt: string, updateAt?: string) {
    this.id = id;
    this.todoId = todoId;
    this.initialSate = initialSate;
    this.finalSate = finalSate;
    this.createAt = createAt;
    this.updateAt = updateAt; // Default to createAt if updateAt is not provided
  }

  getId(): number {
    return this.id;
  }

  getTodoId(): UUID {
    return this.todoId;
  }

  getInitialSate(): string {
    return this.initialSate;
  }

  getFinalSate(): string {
    return this.finalSate;
  }

  getCreateAt(): string {
    return this.createAt;
  }

  getUpdateAt(): string | undefined {
    return this.updateAt;
  }
}