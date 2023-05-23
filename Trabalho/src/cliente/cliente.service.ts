import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { ClienteRepository } from './cliente.repository';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class ClienteService {

  constructor(@InjectRepository(Cliente) private readonly clienteRepository: ClienteRepository) {}

  async getAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async getById(id: number): Promise<Cliente> {
    const options: FindOneOptions = {
      where: {id: id},
    };
    return this.clienteRepository.findOne(options);
  }

  async save(cliente: Cliente): Promise<Cliente> {
    return this.clienteRepository.save(cliente);
  }

  async update(cliente: Cliente): Promise<Cliente> {
    await this.clienteRepository.update(cliente.id, cliente);
    return this.getById(cliente.id);
  }

  async delete(id: number): Promise<Cliente> {
    const cliente = await this.getById(id);
    return this.clienteRepository.remove(cliente);
  }

}
