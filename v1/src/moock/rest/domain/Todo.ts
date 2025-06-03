export class Todo {
  private id!: string;
  private createAt: string;
  private updateAt: string;
  private title: string;
  private description: string;

  constructor(createAt: string, updateAt: string, title: string, description: string) {
    this.createAt = createAt;
    this.updateAt = updateAt;
    this.title = title;
    this.description = description;
  }
}