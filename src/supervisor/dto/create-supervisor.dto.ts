import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Universidade } from 'src/universidade/entities/universidade.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

export class CreateSupervisorDto {
  @ApiProperty({
    description: 'ID do psicólogo supervisor',
  })
  @IsNotEmpty()
  psicologo: Usuario;

  @ApiProperty({
    description: 'ID do estagiário supervisionado',
  })
  @IsNotEmpty()
  estagiario: Usuario;

  @ApiProperty({
    description: 'ID da universidade',
    type: 'string',
  })
  @IsNotEmpty()
  universidade: Universidade;
}
