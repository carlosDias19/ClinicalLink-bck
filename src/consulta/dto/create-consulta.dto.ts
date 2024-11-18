import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty, IsUUID, IsString } from 'class-validator';

export class CreateConsultaDto {
  @ApiProperty({
    description: 'ID do paciente',
  })
  @IsNotEmpty()
  @IsUUID()
  pacienteId: string;

  @ApiProperty({
    description: 'ID do profissional (psicólogo ou estagiário)',
  })
  @IsNotEmpty()
  @IsUUID()
  profissionalId: string;

  @ApiProperty({
    description: 'Data e hora da consulta',
    example: '2024-11-20T14:30:00Z',
  })
  @IsNotEmpty()
  @IsString()
  data: string;

  @ApiProperty({
    description: 'Observações da consulta',
    example: 'Paciente relatou ansiedade.',
    required: false,
  })
  @IsOptional()
  @IsString()
  observacoes?: string;
}
