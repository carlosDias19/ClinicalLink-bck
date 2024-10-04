import { Injectable } from '@nestjs/common';
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

  async findBySupervisor(supervisor: User): Promise<User[]> {
    return this.userRepository.find({ where: { supervisor: { id: supervisor.id } } });
  }

  async findByLogin(login: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { login } });
  }

  async createUser(login: string, password: string): Promise<User> {
    const user = this.userRepository.create({ login, password });
    return this.userRepository.save(user);
  }
}