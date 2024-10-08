import { EntityRepository, Repository } from 'typeorm';
import { Consulta } from './entities/consulta.entity';
import { User } from 'src/user/entities/user.entity';
import { Between } from 'typeorm';

@EntityRepository(Consulta)
export class ConsultaRepository extends Repository<Consulta> {

    async findByUserBetweenDates(user: User, startDate: Date, endDate: Date): Promise<Consulta[]> {
        return this.find({
            where: {
                paciente: user,
                dataConsulta: Between(startDate, endDate), 
            },
        });
    }
}