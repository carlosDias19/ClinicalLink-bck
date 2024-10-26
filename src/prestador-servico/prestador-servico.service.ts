import { Injectable } from '@nestjs/common';
import { CreatePrestadorServicoDto } from './dto/create-prestador-servico.dto';
import { UpdatePrestadorServicoDto } from './dto/update-prestador-servico.dto';

@Injectable()
export class PrestadorServicoService {
  create(createPrestadorServicoDto: CreatePrestadorServicoDto) {
    return 'This action adds a new prestadorServico';
  }

  findAll() {
    return `This action returns all prestadorServico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestadorServico`;
  }

  update(id: number, updatePrestadorServicoDto: UpdatePrestadorServicoDto) {
    return `This action updates a #${id} prestadorServico`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestadorServico`;
  }
}
