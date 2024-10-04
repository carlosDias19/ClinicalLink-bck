import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

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

  @Column({name:'username', length: 50 })
  username: string;

  @Column({name:'cnpj', length: 255 })
  cnpj: string;

  @Column({name:'ra', length: 255 })
  ra: string;

  @Column({name:'tipoUsuario', length: 1 })
  tipoUsuario: number;

  @OneToOne(type => User)
  supervisor: User;
}