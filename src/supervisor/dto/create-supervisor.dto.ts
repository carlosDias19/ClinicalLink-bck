import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { Universidade } from 'src/universidade/entities/universidade.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

export class CreateSupervisorDto {
  @ApiProperty({type:Usuario,
    description: 'ID do psicólogo supervisor',
  })
  @IsNotEmpty()
  @IsUUID()
  psicologo: Usuario;

  @ApiProperty({type:Usuario,
    description: 'ID do estagiário supervisionado',
  })
  @IsNotEmpty()
  @IsUUID()
  estagiario: Usuario;

  @ApiProperty({
    description: 'ID da universidade',
    type: 'string',
  })
  @IsNotEmpty()
  universidade: Universidade;
}
