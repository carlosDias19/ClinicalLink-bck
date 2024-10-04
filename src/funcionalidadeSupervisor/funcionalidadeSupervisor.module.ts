import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionalidadeSupervisorService } from './funcionalidadeSupervisor.service';
import { FuncionalidadeSupervisorController } from './funcionalidadeSupervisor.controller';
import { User } from '../user/entities/user.entity'; // Ajuste o caminho conforme necessário
import { Consulta } from '../consulta/entities/consulta.entity'; // Ajuste o caminho conforme necessário

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Consulta]), // Adicionando repositórios aqui
  ],
  controllers: [FuncionalidadeSupervisorController],
  providers: [FuncionalidadeSupervisorService],
  exports: [FuncionalidadeSupervisorService], // Expondo o serviço se necessário em outros módulos
})
export class FuncionalidadeSupervisorModule {}