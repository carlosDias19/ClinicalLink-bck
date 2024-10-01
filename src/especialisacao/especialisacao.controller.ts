import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspecialisacaoService } from './especialisacao.service';
import { CreateEspecialisacaoDto } from './dto/create-especialisacao.dto';
import { UpdateEspecialisacaoDto } from './dto/update-especialisacao.dto';

@Controller('especialisacao')
export class EspecialisacaoController {
  constructor(private readonly especialisacaoService: EspecialisacaoService) {}

  @Post()
  create(@Body() createEspecialisacaoDto: CreateEspecialisacaoDto) {
    return this.especialisacaoService.create(createEspecialisacaoDto);
  }

  @Get()
  findAll() {
    return this.especialisacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.especialisacaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEspecialisacaoDto: UpdateEspecialisacaoDto) {
    return this.especialisacaoService.update(+id, updateEspecialisacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.especialisacaoService.remove(+id);
  }
}
