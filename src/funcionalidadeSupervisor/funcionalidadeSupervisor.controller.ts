import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuncionalidadeSupervisorService } from './funcionalidadeSupervisor.service';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { ConsultaService } from 'src/consulta/consulta.service';

@Controller('funcionalidadeSupervisor')
export class FuncionalidadeSupervisorController {
  constructor(
    private readonly funcionalidadeSupervisorService: FuncionalidadeSupervisorService) {}

  @Get(':supervisor')
  buscarAlunosSupervisionados(@Param('supervisor') supervisor: number) {
    return this.funcionalidadeSupervisorService.buscarAlunosSupervisionados(supervisor);
  }

  @Get(':user/:dataInicio/:dataFim')
  buscarConsultasMes(@Param('user') user: User,
    @Param('dataInicio') dataInicio: Date,
    @Param('dataFim') dataFim: Date) {
    return this.funcionalidadeSupervisorService.buscarConsultasMes(user,dataInicio,dataFim);
  }

  


}
