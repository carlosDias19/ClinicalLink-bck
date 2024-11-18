import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuarioServicoDto } from './create-usuario-servico.dto';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateUsuarioServicoDto extends PartialType(
  CreateUsuarioServicoDto,
) {
  @ApiProperty({
    description: 'ID',
  })
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
