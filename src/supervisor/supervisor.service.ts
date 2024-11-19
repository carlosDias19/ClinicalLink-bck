import { Injectable } from '@nestjs/common';
import { CreateSupervisorDto } from './dto/create-supervisor.dto';
import { UpdateSupervisorDto } from './dto/update-supervisor.dto';
import { Supervisor } from './entities/supervisor.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class SupervisorService {
  constructor(
    @InjectRepository(Supervisor)
    private readonly supervisorRepository: Repository<Supervisor>
  ) {}

 
  create(createSupervisorDto: CreateSupervisorDto) {
    const supervisor = this.supervisorRepository.create(createSupervisorDto);
    return this.supervisorRepository.save(supervisor);
  }

  async findAll() {
    return `This action returns all supervisor`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} supervisor`;
  }

  async findEstagiarios(supervisorUsuario: string) {
    return this.supervisorRepository
      .createQueryBuilder('supervisor')
      .innerJoinAndSelect('supervisor.psicologo', 'psicologo') // Faz o join com a tabela Usuario
      .where('psicologo.id = :supervisorUsuario', { supervisorUsuario })  
      .getMany();
  }

  update(id: number, updateSupervisorDto: UpdateSupervisorDto) {
    return `This action updates a #${id} supervisor`;
  }

  remove(id: number) {
    return `This action removes a #${id} supervisor`;
  }
}
