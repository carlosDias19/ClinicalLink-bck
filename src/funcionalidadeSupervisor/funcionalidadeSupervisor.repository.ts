import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Consulta } from 'src/consulta/entities/consulta.entity';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { ConsultaRepository } from 'src/consulta/consulta.repository';


@Injectable()
export class EspecialistaRepository {
    constructor(
        @InjectRepository(Consulta)
        private readonly consultaRepository: ConsultaRepository
        @InjectRepository(User)
        private readonly userRepository: UserRepository,
    ) {}

    async findByUserBetweenDates(usuario: User, startDate: Date, endDate: Date): Promise<Consulta[]> {
        return this.consultaRepository.findConsultaEntreDatas(usuario,startDate,endDate);
    }
    
}
