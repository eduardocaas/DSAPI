import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { PedidoRepository } from './pedido.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, PedidoRepository])],
  providers: [PedidoService, PedidoRepository],
  controllers: [PedidoController]
})
export class PedidoModule {}
