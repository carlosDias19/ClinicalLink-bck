import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avaliacao  } from './entities/avaliacao.entity';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoController } from './avaliacao.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Avaliacao])],
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService],
})
export class AvaliacaoModule {}
