import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment") // PK
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true }) //null이 들어갈수 있는 타입이냐
  deleteAt?: Date;
}
