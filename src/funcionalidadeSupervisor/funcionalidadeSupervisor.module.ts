import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionalidadeSupervisorService } from './funcionalidadeSupervisor.service';
import { FuncionalidadeSupervisorController } from './funcionalidadeSupervisor.controller';
import { User } from '../user/entities/user.entity'; // Ajuste o caminho conforme necessário
import { Consulta } from '../consulta/entities/consulta.entity'; // Ajuste o caminho conforme necessário

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Consulta]), 
  ],
  controllers: [FuncionalidadeSupervisorController],
  providers: [FuncionalidadeSupervisorService],
  exports: [FuncionalidadeSupervisorService], 
})
export class FuncionalidadeSupervisorModule {}