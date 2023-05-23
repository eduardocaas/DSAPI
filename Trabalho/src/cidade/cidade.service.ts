import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CidadeRepository } from './cidade.repository';
import { Cidade } from './cidade.entity';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class CidadeService {

  constructor(@InjectRepository(Cidade) private readonly cidadeRepository: CidadeRepository) {}

  async getAll(): Promise<Cidade[]> {
    return this.cidadeRepository.find();
  }

  async getById(id: number): Promise<Cidade> {
    const options: FindOneOptions<Cidade> = {
      where: {id: id},
    };
    return this.cidadeRepository.findOne(options);
  }

  async save(cidade: Cidade): Promise<Cidade> {
    return this.cidadeRepository.save(cidade);
  }

  async update(cidade: Cidade): Promise<Cidade> {
    await this.cidadeRepository.update(cidade.id, cidade);
    return this.getById(cidade.id);
  }

  async delete(id: number): Promise<Cidade> {
    const cidade = await this.getById(id);
    return this.cidadeRepository.remove(cidade);
  }
}
