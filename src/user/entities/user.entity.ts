import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:'login', length: 50 })
  login: string;

  @Column('password')
  password: string;

  @Column({name:'email', length: 255 })
  email: string;

  @Column({name:'nome', length: 255 })
  nome: string;

  @Column({name:'cpf', length: 255 })
  cpf: string;

  @Column({name:'cnpj', length: 255 })
  cnpj: string;

  @Column({name:'ra', length: 255 })
  ra: string;

  @Column({name:'tipoUsuario', length: 1 })
  tipoUsuario: number;
}