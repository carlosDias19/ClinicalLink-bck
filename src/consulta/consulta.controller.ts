import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { Consulta } from './entities/consulta.entity';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Post()
  create(@Body() consulta: Consulta) {
    return this.consultaService.createConsulta(consulta);
  }

  // @Get(':id')
  // findAllConsultasUsuario(@Param('id') id: string) {
  //   return this.consultaService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateConsultaDto: UpdateConsultaDto) {
  //   return this.consultaService.update(+id, updateConsultaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.consultaService.remove(+id);
  // }
}
