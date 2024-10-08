import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Consulta } from 'src/consulta/entities/consulta.entity';
import { User } from 'src/user/entities/user.entity';
import { ConsultaRepository } from 'src/consulta/consulta.repository';


@Injectable()
export class EspecialistaRepository {
    constructor(
        @InjectRepository(Consulta)
        private readonly consuoltaRepository: ConsultaRepository
        @InjectRepository(User)
        //private readonly userRepository: UserRepository,
    ) {}

    async findByUserBetweenDates(user: User, startDate: Date, endDate: Date): Promise<Consulta[]> {
        return this.c({
            where: {
                paciente: user,
                dataConsulta: Between(startDate, endDate), 
            },
        });
    }
    
}
