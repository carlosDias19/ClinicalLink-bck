import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePrestadorDto {
  @ApiProperty({
    description: 'CNPJ',
    maxLength: 14,
  })
  @IsString()
  @Length(14, 14)
  cnpj: string;

  @ApiProperty({
    description: 'Registro acadêmico',
    maxLength: 50,
  })
  @IsString()
  @Length(1, 50)
  ra: string;

  @ApiProperty({
    description: 'Registro no Conselho Regional de Psicologia',
    maxLength: 50,
  })
  @IsString()
  @Length(1, 50)
  crp: string;
}
