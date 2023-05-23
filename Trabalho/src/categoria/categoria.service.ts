import { Injectable } from '@nestjs/common';
import { Categoria } from './categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaRepository } from './categoria.repository';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class CategoriaService {

  constructor(@InjectRepository(Categoria) private readonly categoriaRepository: CategoriaRepository) {}

  async getAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async getById(id: number): Promise<Categoria> {
    const options: FindOneOptions<Categoria> = {
      where: {id : id}
    };
    return this.categoriaRepository.findOne(options);
  }

  async save(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  async update(categoria: Categoria): Promise<Categoria> {
    await this.categoriaRepository.update(categoria.id, categoria);
    return this.getById(categoria.id);
  }

  async delete(id: number): Promise<Categoria> {
    const categoria = await this.getById(id);
    return this.categoriaRepository.remove(categoria);
  }

}
