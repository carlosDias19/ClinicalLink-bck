import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from './entities/consulta.entity';

@Injectable()
export class ConsultaRepository {
  constructor(
    @InjectRepository(Consulta)
    private readonly consultaRepository: Repository<Consulta>,
  ) {}

  async createConsulta(Consulta: Consulta): Promise<Consulta> {
    return this.consultaRepository.save(Consulta);
  }
}
