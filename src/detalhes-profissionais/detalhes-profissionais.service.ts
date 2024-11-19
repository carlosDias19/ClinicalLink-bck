import { Injectable } from '@nestjs/common';
import { CreateDetalhesProfissionaisDto } from './dto/create-detalhes-profissionais.dto';
import { UpdateDetalhesProfissionaisDto } from './dto/update-detalhes-profissionais.dto';
import { DetalhesProfissionais } from './entities/detalhes-profissionais.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DetalhesProfissionaisService {
  constructor(
    @InjectRepository(DetalhesProfissionais)
    private readonly detalhesProRepository: Repository<DetalhesProfissionais>,
) {}

create(data: CreateDetalhesProfissionaisDto) {
  const detalhesProfissionais = this.detalhesProRepository.create(data);
  return this.detalhesProRepository.save(detalhesProfissionais);
}


  findAll() {
   // return this.detalhesProRepository.find()`;
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
