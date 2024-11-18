import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from './entities/servico.entity';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>,
  ) {}

  create(data: Partial<Servico>) {
    const servico = this.servicoRepository.create(data);
    return this.servicoRepository.save(servico);
  }

  findAll() {
    return this.servicoRepository.find();
  }

  findOne(id: string) {
    return this.servicoRepository.findOne({ where: { id } });
  }

  update(id: string, data: Partial<Servico>) {
    return this.servicoRepository.update(id, data);
  }

  remove(id: string) {
    return this.servicoRepository.delete(id);
  }
}
