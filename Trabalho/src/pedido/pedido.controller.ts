import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put, Res } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';
import { Response } from 'express';

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

  @Post()
  async save(pedido: Pedido, @Res() res: Response): Promise<void> {
    const obj = await this.pedidoService.save(pedido);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao salvar o pedido');
    }
    const uri = `http://localhost:3000/pedidos/${obj.id}`;
    res.location(uri);
    res.status(201).send();
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
