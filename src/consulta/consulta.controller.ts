import { Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { Consulta } from './entities/consulta.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateConsultaDto } from './dto/create-consulta.dto';

@ApiTags('consulta')
@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Post()
  create(@Body() consulta: CreateConsultaDto) {
    return this.consultaService.createConsulta(consulta);
  }

  @Get(':id/consultaPsicologo')
  findOne(@Param('id') id: string) {
    return this.consultaService.findConsultaByProfissional(id);
  }

}

