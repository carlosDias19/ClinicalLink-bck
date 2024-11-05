import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { TipoUsuario } from 'src/enums/tipo-usuario.enum';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @ApiPropertyOptional()
  nome?: string;

  @ApiPropertyOptional()
  telefone?: string;

  @ApiPropertyOptional()
  login?: string;

  @ApiPropertyOptional()
  email?: string;

  @ApiPropertyOptional()
  password?: string;

  @ApiPropertyOptional({ enum: TipoUsuario })
  tipoPestador?: TipoUsuario;
}
