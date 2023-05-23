import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoProduto } from './pedido_produto.entity';
import { PedidoProdutoRepository } from './pedido_produto.repository';
import { FindManyOptions, FindOneOptions } from 'typeorm';

var knex = require("knex")({
  client : 'mysql',
  connection : {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'loja_dsapi'
  }
});

@Injectable()
export class PedidoProdutoService {

  constructor(@InjectRepository(PedidoProduto) private readonly pedidoProdutoRepository: PedidoProdutoRepository) {}
  
  async getAll(): Promise<PedidoProduto[]> {
    return this.pedidoProdutoRepository.find();
  }

  async getById(id: number): Promise<PedidoProduto> {
    const options: FindOneOptions = {
      where: {id: id},
    };
    return this.pedidoProdutoRepository.findOne(options);
  }

  async save(pedidoProduto: PedidoProduto): Promise<void> {
    knex('pedidos_produtos')
    .insert(pedidoProduto)
  }

  async update(pedidoProduto: PedidoProduto): Promise<PedidoProduto> {
    if(pedidoProduto.pedido_id != null, pedidoProduto.produto_id != null) {
      return this.pedidoProdutoRepository.save(pedidoProduto);
    }
    return null;
  }

 
}
