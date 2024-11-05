import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateSupervisorDto {
  @ApiProperty({
    description: 'ID do prestador que será o supervisor',
    type: 'string',
    format: 'uuid',
  })
  @IsUUID()
  supervisorId: string;

  @ApiProperty({
    description: 'ID do prestador que será supervisionado',
    type: 'string',
    format: 'uuid',
  })
  @IsUUID()
  supervisionadoId: string;

  @ApiProperty({
    description: 'ID da universidade associada ao supervisor',
    type: 'number',
  })
  universidadeId: number;
}
