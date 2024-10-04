import { PartialType } from '@nestjs/mapped-types';
import { CreateEspecializacaoDto } from './create-especializacao.dto';

export class UpdateEspecializacaoDto extends PartialType(CreateEspecializacaoDto) {}
