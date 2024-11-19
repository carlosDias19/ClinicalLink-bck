import { Module } from '@nestjs/common';
import { DetalhesProfissionaisService } from './detalhes-profissionais.service';
import { DetalhesProfissionaisController } from './detalhes-profissionais.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalhesProfissionais } from './entities/detalhes-profissionais.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetalhesProfissionais])],
  controllers: [DetalhesProfissionaisController],
  providers: [DetalhesProfissionaisService],
  exports: [DetalhesProfissionaisService],
})
export class DetalhesProfissionaisModule {}
