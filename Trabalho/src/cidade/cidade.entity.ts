import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cidades' })
export class Cidade {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ nullable: false, length: 50 })
  nome: string;
}