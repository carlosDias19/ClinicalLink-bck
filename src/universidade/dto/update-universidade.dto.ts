import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUniversidadeDto } from './create-universidade.dto';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateUniversidadeDto extends PartialType(CreateUniversidadeDto) {
  @ApiProperty({
    description: 'ID',
  })
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
