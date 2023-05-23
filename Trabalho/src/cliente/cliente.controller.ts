import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put, Res } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Response } from 'express';
import { Cliente } from './cliente.entity';

@Controller('/clientes')
export class ClienteController {

  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    const clientes: Cliente[] = await this.clienteService.getAll();
    res.status(200).send(clientes);
  }

  @Get("/:id")
  async getById(@Param("id") id: number, @Res() res: Response): Promise<void> {
    const cliente = await this.clienteService.getById(id);
    if(!cliente) {
      res.status(404).send({mensagem: "Cliente não encontrado"});
    }
    res.status(200).send(cliente);
  }

  @Post()
  async save(cliente: Cliente, @Res() res: Response): Promise<void> {
    const obj = await this.clienteService.save(cliente);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao salvar o cliente');
    }
    const uri = `http://localhost:3000/clientes/${obj.id}`;
    res.location(uri);
    res.status(201).send();
  }

  @Put()
  async update(@Body() cliente: Cliente, @Res() res: Response): Promise<void> {
    const obj = await this.clienteService.update(cliente);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao atualizar o cliente');
    }
    res.status(200).send();
  }
    
  @Delete("/:id")
  async delete(@Param('id') id: number, @Res() res: Response): Promise<void> {
    const obj = await this.clienteService.delete(id);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao deletar o cliente');
    }
    res.status(204).send();
  }
}
