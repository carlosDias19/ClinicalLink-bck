import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Consulta } from './entities/Consulta.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ConsultaRepository {
    constructor(
        @InjectRepository(Consulta)
        private readonly consultaRepository: Repository<Consulta>,
    ) {}

    async findAllConsultasUsuario(usuario : User): Promise<Consulta[]> {
        return this.consultaRepository.findOne({where :{ paciente : usuario}});
    }

    async findConsultaUsuario(prestadorConsulta : User, pacienteConsulta : User): Promise<Consulta> {
        return this.consultaRepository.findOne({where : {prestador : prestadorConsulta, paciente : pacienteConsulta}});
    }

    async createConsulta(Consulta: Consulta): Promise<Consulta> {
        return this.consultaRepository.save(Consulta);
    }

    async findConsultaEntreDatas(usuario: User,dataInicio: Date, dataFim: Date){
        return this.consultaRepository.find({where : {paciente: usuario,dataConsulta: Between(dataInicio, dataFim),}})
    }
    
}
