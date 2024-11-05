import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateConsultaDto {
  @ApiProperty({
    description: 'Data de agendamento da consulta',
    type: 'string',
    format: 'date-time',
  })
  @IsNotEmpty()
  @IsDate()
  dataAgendamento: Date;

  @ApiProperty({
    description: 'Data de atendimento da consulta',
    type: 'string',
    format: 'date-time',
  })
  @IsNotEmpty()
  @IsDate()
  dataAtendimento: Date;

  @ApiProperty({
    description: 'Descrição da consulta',
    type: 'string',
    nullable: true,
  })
  @IsOptional()
  descricao?: string;

  @ApiProperty({
    description: 'ID do prestador associado à consulta',
    type: 'number',
  })
  prestadorId: number;

  @ApiProperty({
    description: 'ID do paciente associado à consulta',
    type: 'number',
  })
  pacienteId: number;
}
