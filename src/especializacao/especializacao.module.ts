import { Module } from '@nestjs/common';
import { EspecializacaoService } from './especializacao.service';
import { EspecializacaoController } from './especializacao.controller';

@Module({
  controllers: [EspecializacaoController],
  providers: [EspecializacaoService],
})
export class EspecializacaoModule {}
