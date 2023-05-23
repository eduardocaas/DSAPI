import { Cidade } from "src/cidade/cidade.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'clientes' })
export class Cliente {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 100})
  nome: string;

  @Column()
  altura: number;

  @Column({ type: 'date'})
  nascimento: Date;

  @ManyToOne(() => Cidade)
  @JoinColumn({ name: 'cidade_id'})
  cidade_id: number;

  

}
