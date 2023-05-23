import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { PedidoRepository } from './pedido.repository';
import { PedidoProdutoService } from 'src/pedido_produto/pedido_produto.service';
import { ProdutoService } from 'src/produto/produto.service';
import { PedidoProdutoRepository } from 'src/pedido_produto/pedido_produto.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, PedidoRepository])],
  providers: [PedidoService, PedidoRepository],
  controllers: [PedidoController]
})
export class PedidoModule {}
