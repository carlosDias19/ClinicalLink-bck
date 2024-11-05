import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consulta } from './entities/consulta.entity';
import { ConsultaRepository } from './consulta.repository';

@Injectable()
export class ConsultaService {
    constructor(
        @InjectRepository(Consulta)
        private readonly consultaRepository: ConsultaRepository,
    ) {}

    async createConsulta(consulta: Consulta): Promise<Consulta> {
        return this.consultaRepository.createConsulta(consulta);
    }
}
