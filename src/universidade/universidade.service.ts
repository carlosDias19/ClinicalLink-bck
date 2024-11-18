import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Universidade } from './entities/universidade.entity';

@Injectable()
export class UniversidadeService {
  constructor(
    @InjectRepository(Universidade)
    private readonly universidadeRepository: Repository<Universidade>,
  ) {}

  create(data: Partial<Universidade>) {
    const universidade = this.universidadeRepository.create(data);
    return this.universidadeRepository.save(universidade);
  }

  findAll() {
    return this.universidadeRepository.find();
  }

  findOne(id: string) {
    return this.universidadeRepository.findOne({ where: { id } });
  }

  update(id: string, data: Partial<Universidade>) {
    return this.universidadeRepository.update(id, data);
  }

  remove(id: string) {
    return this.universidadeRepository.delete(id);
  }
}
