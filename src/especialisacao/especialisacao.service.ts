import { Injectable } from '@nestjs/common';
import { CreateEspecialisacaoDto } from './dto/create-especialisacao.dto';
import { UpdateEspecialisacaoDto } from './dto/update-especialisacao.dto';

@Injectable()
export class EspecialisacaoService {
  create(createEspecialisacaoDto: CreateEspecialisacaoDto) {
    return 'This action adds a new especialisacao';
  }

  findAll() {
    return `This action returns all especialisacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} especialisacao`;
  }

  update(id: number, updateEspecialisacaoDto: UpdateEspecialisacaoDto) {
    return `This action updates a #${id} especialisacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} especialisacao`;
  }
}
