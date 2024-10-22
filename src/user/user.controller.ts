import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

 // @Post()
//  create(@Body() usuario: User) {
 //   return this.userService.createUsuario(usuario);
 // }

  @Get(':login')
  findByLogin(@Param('login') login: string) {
    return this.userService.findByLogin(login);
  }

  @Get(':supervisor')
  async findBySupervisor(@Param('supervisor') supervisorId: number): Promise<User[]> {
    const supervisor = await this.userService.findBySupervisor(supervisorId);
    return supervisor;
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
