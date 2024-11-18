import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUsuarioServicoDto {
  @ApiProperty({
    description: 'ID do usuário (psicólogo ou estagiário)',
  })
  @IsNotEmpty()
  @IsUUID()
  usuarioId: string;

  @ApiProperty({
    description: 'ID do serviço',
  })
  @IsNotEmpty()
  @IsUUID()
  servicoId: string;

  @ApiProperty({
    description: 'Indica se o usuário é especialista neste serviço',
    example: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  especialista: boolean;
}
