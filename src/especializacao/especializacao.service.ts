import { Injectable } from '@nestjs/common';
import { CreateEspecializacaoDto } from './dto/create-especializacao.dto';
import { UpdateEspecializacaoDto } from './dto/update-especializacao.dto';

@Injectable()
export class EspecializacaoService {
  create(createEspecializacaoDto: CreateEspecializacaoDto) {
    return 'This action adds a new especializacao';
  }

  findAll() {
    return `This action returns all especializacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} especializacao`;
  }

  update(id: number, updateEspecializacaoDto: UpdateEspecializacaoDto) {
    return `This action updates a #${id} especializacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} especializacao`;
  }
}
