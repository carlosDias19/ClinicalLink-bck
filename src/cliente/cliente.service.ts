// import { Injectable } from '@nestjs/common';
// // import { CreateClienteDto } from './dto/create-cliente.dto';
// // import { UpdateClienteDto } from './dto/update-cliente.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// // import { Cliente } from './entities/cliente.entity';
// @Injectable()
// export class ClienteService {
//   constructor(
//     @InjectRepository(Cliente)
//     private readonly clienteRepository:  Repository<Cliente>,
//   ){}

//   create(createClienteDto: CreateClienteDto) {
//     const avaliacaoCreate = this.clienteRepository.create(createClienteDto)
//     return this.clienteRepository.save(createClienteDto);
//   }

//   findAll() {
//     return `This action returns all cliente`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} cliente`;
//   }

//   update(id: number, updateClienteDto: UpdateClienteDto) {
//     return `This action updates a #${id} cliente`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} cliente`;
//   }
// }
