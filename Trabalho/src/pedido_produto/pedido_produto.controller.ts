import { Controller, Get, Param, InternalServerErrorException, Post, Put, Res } from '@nestjs/common';
import { PedidoProdutoService } from './pedido_produto.service';
import { Response } from 'express';
import { PedidoProduto } from './pedido_produto.entity';

var knex = require("knex")({
  client : 'mysql',
  connection : {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'loja_dsapi'
  }
});


@Controller('/pedidos_produtos')
export class PedidoProdutoController {

  constructor(private readonly pedidoProdutoService: PedidoProdutoService) {}

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    knex('pedidos_produtos').then((data) => {
      res.send(data);
    });
  }

  @Get("/:pedido_id/:produto_id")
  async getById(@Param("pedido_id") pedido_id: number, @Param("produto_id") produto_id: number, @Res() res: Response): Promise<void> {
    knex('pedidos_produtos')
    .where({'pedido_id': pedido_id, 'produto_id' : produto_id})
    .first()
    .then((data) => {
        if(!data){
          res.status(400).send();
        }
        res.send(data);
    });
  }

  @Post()
  async save(pedidoProduto: PedidoProduto, @Res() res: Response): Promise<void> {
    knex('pedidos_produtos')
    .insert(pedidoProduto)
    .then(() => {
        return res.status(200).send("Pedido produto adicionado");
    });
    res.status(500).send();
  }

  @Put()
  async update(pedidoProduto: PedidoProduto, @Res() res: Response): Promise<void> {
    knex('pedidos_produtos')
    .update(pedidoProduto)
    .then((data) => {
        if(!data){
            return res.status(500).send();
        }
        res.send("Pedido produto atualizado");
    },);
  }

}
