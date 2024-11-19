import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Universidade } from 'src/universidade/entities/universidade.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

export class CreateSupervisorDto {
  @ApiProperty({ type: Usuario, description: 'Psicólogo supervisor' })
  @IsNotEmpty()
  psicologo: Usuario;

  @ApiProperty({
    type: Usuario,
    description: 'Estagiário supervisionado',
  })
  @IsNotEmpty()
  estagiario: Usuario;

  @ApiProperty({
    type: Universidade,
    description: 'Universidade',
  })
  @IsNotEmpty()
  universidade: Universidade;
}
