import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateServicoDto {
  @ApiProperty({
    description: 'Nome do serviço',
    maxLength: 255,
  })
  @IsString()
  @Length(1, 255)
  nome: string;
}
