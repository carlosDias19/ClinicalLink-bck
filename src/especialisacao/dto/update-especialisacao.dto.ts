import { PartialType } from '@nestjs/mapped-types';
import { CreateEspecialisacaoDto } from './create-especialisacao.dto';

export class UpdateEspecialisacaoDto extends PartialType(CreateEspecialisacaoDto) {}
