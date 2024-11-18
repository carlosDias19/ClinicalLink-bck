import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Avaliacao } from '../avaliacao/entities/avaliacao.entity';
import { AvaliacaoRepository } from './avaliacao.repository';

@Injectable()
export class AvaliacaoService {
  constructor(
    @InjectRepository(Avaliacao)
    private readonly avaliacaoRepository: AvaliacaoRepository,
  ) {}

  create(avaliacao: Avaliacao) {
    return this.avaliacaoRepository.createAvaliacao(avaliacao);
  }

  async findOne(id: string) {
    return this.avaliacaoRepository.findOne(id);
  }

  findAll() {
    return this.avaliacaoRepository.findAll();
  }

  updateAvaliacao(id: string, updateAvaliacao: Avaliacao) {
    return this.avaliacaoRepository.updateAvaliacao(id, updateAvaliacao);
  }

  async delete(id: string): Promise<void> {
    this.avaliacaoRepository.deleteAvaliacao(id);
  }
}
