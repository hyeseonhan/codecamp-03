import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @PrimaryGeneratedColumn("uuid")
  _id!: String;

  @Column({ type: "text" })
  seller!: String;

  @Column({ type: "text" })
  name!: String;

  @Column({ type: "text" })
  detail!: String;

  @Column({ type: "integer" })
  price!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date;
}
