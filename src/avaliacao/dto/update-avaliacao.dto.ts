import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateAvaliacaoDto } from './create-avaliacao.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class UpdateAvaliacaoDto extends PartialType(CreateAvaliacaoDto) {
  @ApiProperty({
    description: 'ID',
  })
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
