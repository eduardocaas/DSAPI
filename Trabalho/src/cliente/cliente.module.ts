import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteRepository } from './cliente.repository';
import { Cliente } from './cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, ClienteRepository])],
  providers: [ClienteService, ClienteRepository],
  controllers: [ClienteController]
})
export class ClienteModule {}
