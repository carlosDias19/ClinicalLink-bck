import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateSupervisorDto {
  @ApiProperty({
    description: 'ID do psicólogo supervisor',
  })
  @IsNotEmpty()
  @IsUUID()
  psicologoId: string;

  @ApiProperty({
    description: 'ID do estagiário supervisionado',
  })
  @IsNotEmpty()
  @IsUUID()
  estagiarioId: string;

  @ApiProperty({
    description: 'ID da universidade',
    type: 'string',
  })
  @IsNotEmpty()
  @IsUUID()
  universidadeId: number;
}
