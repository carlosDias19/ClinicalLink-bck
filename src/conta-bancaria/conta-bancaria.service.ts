import { Injectable } from '@nestjs/common';
import { CreateContaBancariaDto } from './dto/create-conta-bancaria.dto';
import { UpdateContaBancariaDto } from './dto/update-conta-bancaria.dto';
import { ContaBancaria } from './entities/conta-bancaria.entity';

@Injectable()
export class ContaBancariaService {
  create(createContaBancariaDto: CreateContaBancariaDto) {
    return 'This action adds a new contaBancaria';
  }

  findAll() {
    return `This action returns all contaBancaria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contaBancaria`;
  }

  update(id: number, updateContaBancariaDto: UpdateContaBancariaDto) {
    return `This action updates a #${id} contaBancaria`;
  }

  remove(id: number) {
    return `This action removes a #${id} contaBancaria`;
  }
}
