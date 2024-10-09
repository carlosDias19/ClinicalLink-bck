import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';
import { Avaliacao } from './entities/avaliacao.entity';


@Injectable()
export class AvaliacaoRepository {
    constructor(
        @InjectRepository(Avaliacao)
        private readonly avaliacaoRepository: Repository<Avaliacao>,
    ) {}

    async findAll(): Promise<Avaliacao[]> {
        return this.avaliacaoRepository.find();
    }

    async findOne(id: number): Promise<Avaliacao> {
        return this.avaliacaoRepository.findOne({where : {id}});
    }

    async createAvaliacao(Avaliacao: Avaliacao): Promise<Avaliacao> {
        return this.avaliacaoRepository.save(Avaliacao);
    }

    async updateAvaliacao(id: number, updateData: Partial<Avaliacao>): Promise<Avaliacao> {
        const avaliacao = await this.findOne(id);
        if (!avaliacao) {
            throw new NotFoundException(`A avaliação não foi encontrada`);
        }

        Object.assign(avaliacao, updateData);
        return this.avaliacaoRepository.save(avaliacao);
    }

    async deleteAvaliacao(id: number): Promise<Avaliacao>{
        const avaliacao = await this.findOne(id);
        if(!avaliacao){
            throw new NotFoundException('Avaliação não foi encontrada')
        }

        this.avaliacaoRepository.delete(id);
        return avaliacao;
    }
    
}
