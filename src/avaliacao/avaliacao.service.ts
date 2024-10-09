import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { Avaliacao } from '../avaliacao/entities/avaliacao.entity'
import { AvaliacaoRepository } from './avaliacao.repository';

@Injectable()
export class AvaliacaoService {
  constructor(
    @InjectRepository(Avaliacao)
    private readonly avaliacaoRepository: AvaliacaoRepository,
  ){}

  create(avaliacao: Avaliacao) {
    return this.avaliacaoRepository.createAvaliacao(avaliacao);
  }

  async findOne(id: number) {
    return this.avaliacaoRepository.findOne(id);
  }

  findAll() {
    return this.avaliacaoRepository.findAll();
  }

  update(id: number, updateAvaliacao: Avaliacao) {
    return this.avaliacaoRepository.updateAvaliacao(id,updateAvaliacao);
  }

  async delete(id: number): Promise<void> {
    this.avaliacaoRepository.deleteAvaliacao(id);
  }
}
