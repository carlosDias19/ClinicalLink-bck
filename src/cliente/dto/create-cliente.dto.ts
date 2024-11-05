import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({
    description: 'ID do usuário associado ao cliente',
  })
  usuarioId: string;
}
