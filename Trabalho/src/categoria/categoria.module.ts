import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { CategoriaRepository } from './categoria.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria, CategoriaRepository])],
  controllers: [CategoriaController],
  providers: [CategoriaService, CategoriaRepository]
})
export class CategoriaModule {}
