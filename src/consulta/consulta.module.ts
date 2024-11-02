import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Consulta } from './entities/consulta.entity';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { ConsultaRepository } from './consulta.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Consulta])],
  controllers: [ConsultaController],
  providers: [ConsultaService, ConsultaRepository],
})
export class ConsultaModule {}
