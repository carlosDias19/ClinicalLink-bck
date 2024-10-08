import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Especialista } from './entities/especialista.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class EspecialistaRepository {
    constructor(
        @InjectRepository(Especialista)
        private readonly especialistaRepository: Repository<Especialista>,
    ) {}

    async findAll(): Promise<Especialista[]> {
        return this.especialistaRepository.find();
    }

    async findOne(id: number): Promise<Especialista> {
        return this.especialistaRepository.findOne({where : {id}});
    }

    async createEspecialista(especialista: Especialista): Promise<Especialista> {
        return this.especialistaRepository.save(especialista);
    }
    
}
