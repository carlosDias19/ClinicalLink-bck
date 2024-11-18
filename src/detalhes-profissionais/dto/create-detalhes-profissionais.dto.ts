import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateDetalhesProfissionaisDto {
  @ApiProperty({ description: 'ID do usuário' })
  @IsUUID()
  usuarioId: string;

  @ApiProperty({ description: 'Descrição do profissional', required: false })
  @IsOptional()
  @IsString()
  descricao?: string;

  @ApiProperty({
    description: 'Local de trabalho do profissional',
    required: false,
  })
  @IsOptional()
  @IsString()
  localTrabalho?: string;

  @ApiProperty({
    description: 'Latitude do local de trabalho',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  localTrabalhoLat?: number;

  @ApiProperty({
    description: 'Longitude do local de trabalho',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  localTrabalhoLong?: number;

  @ApiProperty({
    description: 'Telefone de contato',
    example: '(11) 99999-9999',
    required: false,
  })
  @IsOptional()
  @IsString()
  telefone?: string;

  @ApiProperty({
    description: 'Registro profissional',
    example: 'CRP 06/123456',
  })
  @IsString()
  registroProfissional?: string;
}
