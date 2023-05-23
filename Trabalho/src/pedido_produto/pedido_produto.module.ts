import { Module } from '@nestjs/common';
import { PedidoProdutoService } from './pedido_produto.service';
import { PedidoProdutoController } from './pedido_produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoProduto } from './pedido_produto.entity';
import { PedidoProdutoRepository } from './pedido_produto.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoProduto, PedidoProdutoRepository])],
  providers: [PedidoProdutoService, PedidoProdutoRepository],
  controllers: [PedidoProdutoController]
})
export class PedidoProdutoModule {}
