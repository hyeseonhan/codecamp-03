import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// 테이블 -> DB
@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment") //PK
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deleteAt?: Date;
}
