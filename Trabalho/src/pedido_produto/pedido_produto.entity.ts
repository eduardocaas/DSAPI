import { Pedido } from "src/pedido/pedido.entity";
import { Produto } from "src/produto/produto.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({ name: 'pedidos_produtos' })
export class PedidoProduto {

  @ManyToOne(() => Pedido)
  @PrimaryColumn({ name: 'pedido_id' })
  pedido_id: number;
  
  @ManyToOne(() => Produto)
  @PrimaryColumn({ name: 'produto_id' })
  produto_id: number;

  @Column()
  preco: number;

  @Column()
  quantidade: number;

}