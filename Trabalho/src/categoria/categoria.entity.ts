import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categorias' })
export class Categoria {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 100 })
  nome: string;
}