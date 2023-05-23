import { Controller, Get, InternalServerErrorException, Post, Put, Res } from '@nestjs/common';
import { PedidoProdutoService } from './pedido_produto.service';
import { Response } from 'express';
import { PedidoProduto } from './pedido_produto.entity';

@Controller('/pedidos_produtos')
export class PedidoProdutoController {

  constructor(private readonly pedidoProdutoService: PedidoProdutoService) {}

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    const pedidosProdutos: PedidoProduto[] = await this.pedidoProdutoService.getAll();	
    res.status(200).send(pedidosProdutos);
  }

  @Post()
  async save(pedidoProduto: PedidoProduto, @Res() res: Response): Promise<void> {
    const obj = await this.pedidoProdutoService.save(pedidoProduto);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao salvar o pedido_produto');
    }
    //const uri = `http://localhost:3000/pedidos_produtos/${obj.id}`;
    //res.location(uri);
    res.status(201).send();
  }

  @Put()
  async update(pedidoProduto: PedidoProduto, @Res() res: Response): Promise<void> {
    const obj = await this.pedidoProdutoService.update(pedidoProduto);
    if(!obj) {
      throw new InternalServerErrorException("Erro ao atualizar pedido produto");
    }
    res.status(200).send();
  }

}
