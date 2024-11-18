import { Module } from '@nestjs/common';
import { DetalhesProfissionaisService } from './detalhes-profissionais.service';
import { DetalhesProfissionaisController } from './detalhes-profissionais.controller';

@Module({
  controllers: [DetalhesProfissionaisController],
  providers: [DetalhesProfissionaisService],
})
export class DetalhesProfissionaisModule {}
