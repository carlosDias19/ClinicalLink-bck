import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Avaliacao } from '../avaliacao/entities/avaliacao.entity';
import { Repository } from 'typeorm';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor(
    @InjectRepository(Avaliacao)
    private readonly avaliacaoRepository: Repository<Avaliacao>,
  ) {}

  create(avaliacaoDto: CreateAvaliacaoDto) {
    const user = this.avaliacaoRepository.create(avaliacaoDto);
    return this.avaliacaoRepository.save(user);
  }

  async findOne(id: string) {
    return this.avaliacaoRepository.findOne({ where: { id: id.toString() } });
  }

  findAll() {
    return this.avaliacaoRepository.find();
  }

  updateAvaliacao(id: string, updateAvaliacao: CreateAvaliacaoDto) {
    return this.avaliacaoRepository.update(id, updateAvaliacao);
  }

  async delete(id: string): Promise<void> {
    this.avaliacaoRepository.delete(id);
  }
}
