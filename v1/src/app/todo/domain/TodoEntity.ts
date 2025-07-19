import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("todo")
export class TodoEntity {

  @PrimaryGeneratedColumn("uuid")
  private id!: string;
  
  @Column()
  private createAt: string;

  @Column()
  private updateAt: string;

  @Column()
  private title: string;

  @Column({
    length: 500,
  })
  private description: string;

  constructor(createAt: string, updateAt: string, title: string, description: string) {
    this.createAt = createAt;
    this.updateAt = updateAt;
    this.title = title;
    this.description = description;
  }
}