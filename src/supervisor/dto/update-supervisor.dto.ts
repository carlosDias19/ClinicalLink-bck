import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSupervisorDto } from './create-supervisor.dto';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateSupervisorDto extends PartialType(CreateSupervisorDto) {
  @ApiProperty({
    description: 'ID',
  })
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
