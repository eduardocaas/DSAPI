import { Body, Controller, Delete, Get ,InternalServerErrorException, Param, Post, Put, Res } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';
import { Request, Response } from 'express';
import { PedidoProdutoController } from 'src/pedido_produto/pedido_produto.controller';
import { PedidoProduto } from 'src/pedido_produto/pedido_produto.entity';
import { ProdutoService } from 'src/produto/produto.service';
import { Produto } from 'src/produto/produto.entity';
import { PedidoProdutoService } from 'src/pedido_produto/pedido_produto.service';

@Controller('/pedidos')
export class PedidoController {

  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    const pedidos: Pedido[] = await this.pedidoService.getAll();	
    res.status(200).send(pedidos);
  }

  @Get("/:id")
  async getById(@Param("id") id: number, @Res() res: Response): Promise<void> {
    const pedido = await this.pedidoService.getById(id);
    if(!pedido) {
      res.status(404).send({mensagem: "Pedido não encontrado"});
    }
    res.status(200).send(pedido);
  }

  /*@Post("/pedir") 
  async pedir(req: Request, @Res() res: Response): Promise<void> {
    const cliente_id: number = parseInt(req.params.cliente_id, 10);
    const endereco = req.params.endereco;
    const produto: number = parseInt(req.params.produto_id, 10);
    const quantidade: number = parseFloat(req.params.quantidade);

    const pedido: Pedido = new Pedido();
    pedido.cliente_id = cliente_id;
    pedido.endereco = endereco;
    const pedidoObj = this.pedidoService.save(pedido);

    const pedidoProduto: PedidoProduto = new PedidoProduto();
    const produtoObj: Produto = await this.produtoService.getById(produto)
    pedidoProduto.pedido_id = (await pedidoObj).id;
    pedidoProduto.preco = produtoObj.preco;
    pedidoProduto.produto_id = produtoObj.id;
    pedidoProduto.quantidade = quantidade;
    this.pedidoProdutoService.save(pedidoProduto);
  }*/

  @Post()
  async save(pedido: Pedido, @Res() res: Response): Promise<void> {
    const obj = await this.pedidoService.save(pedido);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao salvar o pedido');
    }
    const uri = `http://localhost:3000/pedidos/${obj.id}`;
    res.location(uri);
    res.status(201).send(obj);
  }

  @Put()
  async update(@Body() pedido: Pedido, @Res() res: Response): Promise<void> {
    const obj = await this.pedidoService.update(pedido);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao atualizar o pedido');
    }
    res.status(200).send();
  }

  @Delete("/:id")
  async delete(@Param('id') id: number, @Res() res: Response): Promise<void> {
    const obj = await this.pedidoService.delete(id);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao deletar o pedido');
    }
    res.status(204).send();
  }
}
