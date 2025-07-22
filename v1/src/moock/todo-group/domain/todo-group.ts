import { UUID } from "../../shared/domain/UUID";

export class TodoGroup {
  private readonly id: UUID;
  private title: string;
  private description: string;
  private userId: string;

  constructor(params: {
    id: UUID
    title: string,
    description: string,
    userId: string
  }) {
    this.id = params.id;
    this.title = params.title;
    this.description = params.description;
    this.userId = params.userId;

  }
}