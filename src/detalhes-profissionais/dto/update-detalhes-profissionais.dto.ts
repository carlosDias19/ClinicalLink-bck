import { PartialType } from '@nestjs/swagger';
import { CreateDetalhesProfissionaisDto } from './create-detalhes-profissionais.dto';

export class UpdateDetalhesProfissionaisDto extends PartialType(
  CreateDetalhesProfissionaisDto,
) {}
