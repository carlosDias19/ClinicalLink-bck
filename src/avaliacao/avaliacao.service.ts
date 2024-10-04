import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { Avaliacao } from '../avaliacao/entities/avaliacao.entity'

@Injectable()
export class AvaliacaoService {
  constructor(
    @InjectRepository(Avaliacao)
    private readonly avaliacaoRepository: Repository<Avaliacao>,
  ){}

  create(createAvaliacaoDto: CreateAvaliacaoDto) {
    return 'This action adds a new avaliacao';
  }

  findAll() {
    return `This action returns all avaliacao`;
  }



  update(id: number, updateAvaliacaoDto: UpdateAvaliacaoDto) {
    return `This action updates a #${id} avaliacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} avaliacao`;
  }
}
