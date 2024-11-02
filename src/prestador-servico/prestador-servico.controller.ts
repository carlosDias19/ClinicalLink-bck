import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestadorServicoService } from './prestador-servico.service';
import { CreatePrestadorServicoDto } from './dto/create-prestador-servico.dto';
import { UpdatePrestadorServicoDto } from './dto/update-prestador-servico.dto';

@Controller('prestador-servico')
export class PrestadorServicoController {
  constructor(private readonly prestadorServicoService: PrestadorServicoService) {}

  @Post()
  create(@Body() createPrestadorServicoDto: CreatePrestadorServicoDto) {
    return this.prestadorServicoService.create(createPrestadorServicoDto);
  }

  @Get()
  findAll() {
    return this.prestadorServicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestadorServicoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrestadorServicoDto: UpdatePrestadorServicoDto) {
    return this.prestadorServicoService.update(+id, updatePrestadorServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestadorServicoService.remove(+id);
  }
}
