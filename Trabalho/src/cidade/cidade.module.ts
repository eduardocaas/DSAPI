import { Module } from '@nestjs/common';
import { CidadeController } from './cidade.controller';
import { CidadeService } from './cidade.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cidade } from './cidade.entity';
import { CidadeRepository } from './cidade.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Cidade, CidadeRepository])],
  controllers: [CidadeController],
  providers: [CidadeService, CidadeRepository]
})
export class CidadeModule {}
