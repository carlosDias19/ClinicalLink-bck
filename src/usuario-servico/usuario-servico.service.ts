import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioServico } from './entities/usuario-servico.entity';

@Injectable()
export class UsuarioServicoService {
  constructor(
    @InjectRepository(UsuarioServico)
    private readonly usuarioServicoRepository: Repository<UsuarioServico>,
  ) {}

  create(data: Partial<UsuarioServico>) {
    const usuarioServico = this.usuarioServicoRepository.create(data);
    return this.usuarioServicoRepository.save(usuarioServico);
  }

  findAll() {
    return this.usuarioServicoRepository.find({
      relations: ['usuario', 'servico'],
    });
  }

  findOne(id: string) {
    return this.usuarioServicoRepository.findOne({
      where: { id },
      relations: ['usuario', 'servico'],
    });
  }

  update(id: string, data: Partial<UsuarioServico>) {
    return this.usuarioServicoRepository.update(id, data);
  }

  remove(id: string) {
    return this.usuarioServicoRepository.delete(id);
  }
}
