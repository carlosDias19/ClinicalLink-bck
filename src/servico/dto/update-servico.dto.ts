import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateServicoDto } from './create-servico.dto';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateServicoDto extends PartialType(CreateServicoDto) {
  @ApiProperty({
    description: 'ID',
  })
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
