import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { PedidoRepository } from './pedido.repository';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class PedidoService {

  constructor(@InjectRepository(Pedido) private readonly pedidoRepository: PedidoRepository) {}

  async getAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  async getById(id: number): Promise<Pedido> {
    const options: FindOneOptions = {
      where: {id: id},
    };
    return this.pedidoRepository.findOne(options);
  }

  async save(pedido: Pedido): Promise<Pedido> {
    return this.pedidoRepository.save(pedido);
  }

  async update(pedido: Pedido): Promise<Pedido> {
    await this.pedidoRepository.update(pedido.id, pedido);
    return this.getById(pedido.id);
  }

  async delete(id: number): Promise<Pedido> {
    const pedido = await this.getById(id);
    return this.pedidoRepository.remove(pedido);
  }

}
