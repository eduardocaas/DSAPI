import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cidade } from './cidade/cidade.entity';
import { Categoria } from './categoria/categoria.entity';
import { Produto } from './produto/produto.entity';
import { Cliente } from './cliente/cliente.entity';
import { Pedido } from './pedido/pedido.entity';
import { PedidoProduto } from './pedido_produto/pedido_produto.entity';
import { CidadeModule } from './cidade/cidade.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoProdutoModule } from './pedido_produto/pedido_produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'loja_dsapi',
      entities: [Cidade, Categoria, Produto, Cliente, Pedido, PedidoProduto],
      synchronize: false,
    }),
    CidadeModule,
    CategoriaModule,
    ClienteModule,
    PedidoModule,
    ProdutoModule,
    PedidoProdutoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
