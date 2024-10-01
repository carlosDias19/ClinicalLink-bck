import { Module } from '@nestjs/common';
import { EspecialisacaoService } from './especialisacao.service';
import { EspecialisacaoController } from './especialisacao.controller';

@Module({
  controllers: [EspecialisacaoController],
  providers: [EspecialisacaoService],
})
export class EspecialisacaoModule {}
