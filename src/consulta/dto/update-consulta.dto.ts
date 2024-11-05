import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsNumber } from 'class-validator';

export class UpdateConsultaDto {
  @ApiProperty({
    description: 'Data de agendamento da consulta',
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  @IsOptional()
  @IsDate()
  dataAgendamento?: Date;

  @ApiProperty({
    description: 'Data de atendimento da consulta',
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  @IsOptional()
  @IsDate()
  dataAtendimento?: Date;

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
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  prestadorId?: number;

  @ApiProperty({
    description: 'ID do paciente associado à consulta',
    type: 'number',
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  pacienteId?: number;
}
