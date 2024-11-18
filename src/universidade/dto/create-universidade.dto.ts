import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateUniversidadeDto {
  @ApiProperty({
    description: 'Nome da universidade',
    example: 'Universidade Federal de São Paulo',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;
}
