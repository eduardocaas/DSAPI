import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';
import { Response } from 'express';

@Controller('/categorias')
export class CategoriaController {

  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    const categorias: Categoria[] = await this.categoriaService.getAll();
    res.status(200).send(categorias);
  }

  @Get("/:id")
  async getById(@Param("id") id: number, @Res() res: Response): Promise<void> {
    const categoria = await this.categoriaService.getById(id);
    if(!categoria) {
      res.status(404).send({mensagem: "Categoria não encontrada"});
    }
    res.status(200).send(categoria);
  }

  @Post()
  async save(@Body() categoria: Categoria, @Res() res: Response): Promise<void> {
    const obj = await this.categoriaService.save(categoria);
    if(!obj){
      throw new InternalServerErrorException("Erro ao salvar categoria");
    }
    const uri = `http://localhost:3000/categorias/${obj.id}`;
    res.location(uri);
    res.status(201).send();
  }

  @Put()
  async update(@Body() categoria: Categoria, @Res() res: Response): Promise<void> {
    const obj = await this.categoriaService.update(categoria);
    if(!obj) {
      throw new InternalServerErrorException("Erro ao atualizar categoria");
    }
    res.status(200).send();
  }

  @Delete("/:id")
  async delete(@Param("id") id: number, @Res() res: Response): Promise<void> {
    const obj = await this.categoriaService.delete(id);
    if(!obj) {
      throw new InternalServerErrorException("Erro ao deletar categoria");
    }
    res.status(204).send();
  }
  

}
