import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async findBySupervisor(supervisor: number): Promise<User[]> {
    return this.userRepository.find({ where: { supervisor: { id: supervisor } } });
  }

  async findByLogin(login: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { login } });
  }

  async createUser(usuario: User): Promise<User> {
    return this.userRepository.save(usuario);
  }

  async updateUsuario(login: string, updateData: Partial<User>): Promise<User> {
    const usuario = await this.findByLogin(login);
    if (!usuario) {
        throw new NotFoundException(`O usuario não foi encontrada`);
    }

    Object.assign(usuario, updateData);
    return this.userRepository.save(usuario);
  }
}