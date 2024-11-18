import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class CreateAvaliacaoDto {
  @ApiProperty({ description: 'ID da consulta' })
  @IsNotEmpty()
  @IsUUID()
  consultaId: string;

  @ApiProperty({ description: 'Nota da avaliação (1 a 5)', example: 4 })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  nota: number;

  @ApiProperty({
    description: 'Comentário sobre a consulta',
    example: 'Muito atencioso!',
    required: false,
  })
  @IsOptional()
  @IsString()
  comentario?: string;
}
