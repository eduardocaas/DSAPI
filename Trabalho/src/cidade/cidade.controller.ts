import { Controller, Get, Post, Put, Delete, Body, NotFoundException, InternalServerErrorException, Param, Res } from '@nestjs/common';
import { CidadeService } from './cidade.service';
import { Cidade } from './cidade.entity';
import { Response } from 'express';

@Controller("/cidades")
export class CidadeController {

  constructor(private readonly cidadeService: CidadeService) {}

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    const cidades: Cidade[] = await this.cidadeService.getAll();
    res.status(200).send(cidades);
  }

  @Get("/:id")
  async getById(@Param('id') id: number, @Res() res: Response): Promise<void> {
    const cidade = await this.cidadeService.getById(id);
    if(!cidade) {
      res.status(404).send({mensagem: "Cidade não encontrada"});
    }
    res.status(200).send(cidade);
  }

  @Post()
  async save(@Body() cidade: Cidade, @Res() res: Response): Promise<void> {
    const obj = await this.cidadeService.save(cidade);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao salvar a cidade');
    }
    const uri = `http://localhost:3000/cidades/${obj.id}`;
    res.location(uri);
    res.status(201).send();
  }

  @Put()
  async update(@Body() cidade: Cidade, @Res() res: Response): Promise<void> {
    const obj = await this.cidadeService.update(cidade);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao atualizar a cidade');
    }
    res.status(200).send();
  }

  @Delete("/:id")
  async delete(@Param('id') id: number, @Res() res: Response): Promise<void> {
    const obj = await this.cidadeService.delete(id);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao deletar a cidade');
    }
    res.status(204).send();
  }
  

}
