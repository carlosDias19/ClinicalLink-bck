import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber } from 'class-validator';

export class CreatePrestadorServicoDto {
  @ApiProperty({
    description: 'ID do prestador',
    type: 'number',
  })
  @IsNumber()
  prestadorId: number;

  @ApiProperty({
    description: 'ID do serviço',
    type: 'number',
  })
  @IsNumber()
  servicoId: number;

  @ApiProperty({
    description: 'Indica se o prestador é especialista',
    default: false,
  })
  @IsBoolean()
  especialista?: boolean;
}
