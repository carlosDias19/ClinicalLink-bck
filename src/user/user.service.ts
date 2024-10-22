import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../user/entities/user.entity'
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository
  ){}

  createUsuario(usuario: User) {
    return this.userRepository.createUser(usuario);
  }

  async findByUsername(username: string) {
    return this.userRepository.findByUsername(username);
  }

  findBySupervisor(supervisor: number) {
    return this.userRepository.findBySupervisor(supervisor);
  }

  async findByLogin(login: string){
    return this.userRepository.findByLogin(login);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
