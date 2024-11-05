import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUniversidadeDto {
  @ApiProperty({
    description: 'Nome',
    maxLength: 255,
  })
  @IsString()
  @Length(1, 255)
  nome: string;
}
