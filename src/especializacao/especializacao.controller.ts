import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspecializacaoService } from './especializacao.service';
import { CreateEspecializacaoDto } from './dto/create-especializacao.dto';
import { UpdateEspecializacaoDto } from './dto/update-especializacao.dto';

@Controller('especializacao')
export class EspecializacaoController {
  constructor(private readonly especializacaoService: EspecializacaoService) {}

  @Post()
  create(@Body() createEspecializacaoDto: CreateEspecializacaoDto) {
    return this.especializacaoService.create(createEspecializacaoDto);
  }

  @Get()
  findAll() {
    return this.especializacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.especializacaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEspecializacaoDto: UpdateEspecializacaoDto) {
    return this.especializacaoService.update(+id, updateEspecializacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.especializacaoService.remove(+id);
  }
}
