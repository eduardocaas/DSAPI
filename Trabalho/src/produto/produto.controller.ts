import { Controller, Delete, Get, InternalServerErrorException, Param, Post, Put, Res } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Response } from 'express';
import { Produto } from './produto.entity';

@Controller('/produtos')
export class ProdutoController {

  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    const produtos: Produto[] = await this.produtoService.getAll();
    res.status(200).send(produtos);
  }

  @Get("/:id")
  async getById(@Param("id") id: number, @Res() res: Response): Promise<void> {
    const produto = await this.produtoService.getById(id);
    if(!produto) {
      res.status(404).send({mensagem: "Produto não encontrado"});
    }
    res.status(200).send(produto);
  }

  @Post()
  async save(produto: Produto, @Res() res: Response): Promise<void> {
    const obj = await this.produtoService.save(produto);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao salvar o produto');
    }
    const uri = `http://localhost:3000/produtos/${obj.id}`;
    res.location(uri);
    res.status(201).send();
  }

  @Put()
  async update(produto: Produto, @Res() res: Response): Promise<void> {
    const obj = await this.produtoService.update(produto);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao atualizar o produto');
    }
    res.status(200).send();
  }

  @Delete("/:id")
  async delete(@Param('id') id: number, @Res() res: Response): Promise<void> {
    const obj = await this.produtoService.delete(id);
    if(!obj) {
      throw new InternalServerErrorException('Erro ao deletar o produto');
    }
    res.status(204).send();
  }

}
