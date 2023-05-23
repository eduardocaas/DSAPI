import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { ProdutoRepository } from './produto.repository';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class ProdutoService {

  constructor(@InjectRepository(Produto) private readonly produtoRepository: ProdutoRepository) {}

  async getAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async getById(id: number): Promise<Produto> {
    const options: FindOneOptions = {
      where: {id: id},
    };
    return this.produtoRepository.findOne(options);
  }

  async save(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {
    await this.produtoRepository.update(produto.id, produto);
    return this.getById(produto.id);
  }

  async delete(id: number): Promise<Produto> {
    const produto = await this.getById(id);
    return this.produtoRepository.remove(produto);
  }

}
