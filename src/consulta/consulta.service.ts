import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from './entities/consulta.entity';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ConsultaRepository {
    constructor(
        @InjectRepository(Consulta)
        private readonly consultaRepository: ConsultaRepository,
    ) {}

    async findAllConsultasUsuario(usuario: User): Promise<Consulta[]> {
        return this.consultaRepository.findAllConsultasUsuario(usuario);
    }

    async findConsultaUsuario(prestadorConsulta: User , pacienteConsulta:User): Promise<Consulta> {
        return this.consultaRepository.findConsultaUsuario(prestadorConsulta,pacienteConsulta);
    }

    async createConsulta(consulta: Consulta): Promise<Consulta> {
        return this.consultaRepository.createConsulta(consulta);
    }
    
}
