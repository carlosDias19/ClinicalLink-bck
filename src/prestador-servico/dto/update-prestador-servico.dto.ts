import { PartialType } from '@nestjs/swagger';
import { CreatePrestadorServicoDto } from './create-prestador-servico.dto';

export class UpdatePrestadorServicoDto extends PartialType(CreatePrestadorServicoDto) {}
