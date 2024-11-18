import { Injectable } from '@nestjs/common';
import { CreateDetalhesProfissionaisDto } from './dto/create-detalhes-profissionais.dto';
import { UpdateDetalhesProfissionaisDto } from './dto/update-detalhes-profissionais.dto';

@Injectable()
export class DetalhesProfissionaisService {
  create(createDetalhesProfissionaisDto: CreateDetalhesProfissionaisDto) {
    return 'This action adds a new detalhesProfissionai';
  }

  findAll() {
    return `This action returns all detalhesProfissionais`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalhesProfissionais`;
  }

  update(
    id: number,
    updateDetalhesProfissionaiDto: UpdateDetalhesProfissionaisDto,
  ) {
    return `This action updates a #${id} detalhesProfissionais`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalhesProfissionais`;
  }
}
