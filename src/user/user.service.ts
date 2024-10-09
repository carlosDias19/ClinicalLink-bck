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

  findOne(username: string) {6
    return `This action returns a user`;
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email }});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
