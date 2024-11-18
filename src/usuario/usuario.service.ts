import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    const user = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(user);
  }


  //--------- GETS de Usuario ------------------------------------

  findAll() {
    return this.usuarioRepository.find();
  }

  findOne(id: number) {
    return this.usuarioRepository.findOne({ where: { id: id.toString() } });
  }

  findByEmail(email: string) {
    return this.usuarioRepository.findOne({ where: { email } });
  }

  findByTipo(tipoUsuario: number) {
    return this.usuarioRepository.find({ where: { tipoUsuario } });
  }
  
  findByNome(nomeCompleto: string) {
    const [nome, ...resto] = nomeCompleto.split(' ');
    const sobrenome = resto.join(' '); 

    return this.usuarioRepository.findOne({
      where: {
        nome,
        sobrenome,
      },
    });
  }

   //---------------------------------------------


  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.create();
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }

}
