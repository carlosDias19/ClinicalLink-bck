import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateServicoDto {
  @ApiProperty({
    description: 'Nome do serviço',
    example: 'Terapia Cognitivo-Comportamental',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'Descrição do serviço',
    example: 'Terapia baseada em TCC.',
    required: false,
  })
  @IsOptional()
  @IsString()
  descricao?: string;
}
