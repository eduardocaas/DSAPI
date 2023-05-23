import { Categoria } from "src/categoria/categoria.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'produtos' })
export class Produto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 100 })
  nome: string;

  @Column()
  preco: number;

  @Column()
  quantidade: number;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'categoria_id'})
  categoria_id: number;

}