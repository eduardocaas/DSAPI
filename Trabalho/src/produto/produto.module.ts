import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { ProdutoRepository } from './produto.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, ProdutoRepository])],
  controllers: [ProdutoController],
  providers: [ProdutoService, ProdutoRepository]
})
export class ProdutoModule {}
