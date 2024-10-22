import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user.repository';
import { User } from 'src/user/entities/user.entity';
import { Consulta } from 'src/consulta/entities/consulta.entity';
import { AvaliacaoRepository } from 'src/avaliacao/avaliacao.repository';
import { ConsultaRepository } from 'src/consulta/consulta.repository';
@Injectable()
export class FuncionalidadeSupervisorService {

    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
    
        @InjectRepository(AvaliacaoRepository)
        private readonly avaliacaoRepository: AvaliacaoRepository,

        @InjectRepository(ConsultaRepository)
        private readonly consultaRepository: ConsultaRepository,
      ) {}

  

      async buscarAlunosSupervisionados(supervisor : number): Promise<User[]> {
        const user = await this.userRepository.findBySupervisor(supervisor);
        return user || null;
      }

      async buscarConsultasMes(user: User,dataInicio: Date, dataFim: Date ): Promise<Consulta[]>{
        const consultas = await this.consultaRepository.findConsultaEntreDatas(user,dataInicio,dataFim);
        return consultas || null;
      }

}
