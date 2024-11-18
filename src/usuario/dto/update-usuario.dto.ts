import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @ApiProperty({
    description: 'ID',
  })
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
