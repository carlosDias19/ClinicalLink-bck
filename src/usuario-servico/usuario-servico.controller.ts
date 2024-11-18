import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsuarioServicoService } from './usuario-servico.service';
import { CreateUsuarioServicoDto } from './dto/create-usuario-servico.dto';
import { UpdateUsuarioServicoDto } from './dto/update-usuario-servico.dto';

@ApiTags('usuarios-servicos')
@Controller('usuarios-servicos')
export class UsuarioServicoController {
  constructor(private readonly usuarioServicoService: UsuarioServicoService) {}

  @Post()
  create(@Body() createUsuarioServicoDto: CreateUsuarioServicoDto) {
    return this.usuarioServicoService.create(createUsuarioServicoDto);
  }

  @Get()
  findAll() {
    return this.usuarioServicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioServicoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsuarioServicoDto: UpdateUsuarioServicoDto,
  ) {
    return this.usuarioServicoService.update(id, updateUsuarioServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioServicoService.remove(id);
  }
}
