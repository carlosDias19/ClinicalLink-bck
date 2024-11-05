import { Controller, Post, Body } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { Consulta } from './entities/consulta.entity';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Post()
  create(@Body() consulta: Consulta) {
    return this.consultaService.createConsulta(consulta);
  }
}
