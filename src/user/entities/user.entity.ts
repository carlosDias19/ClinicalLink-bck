import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  nome: string;

  @Column({ length: 50 })
  login: string;

  @Column({ length: 255 })
  email: string;

  @Column()
  password: string;

  @Column({ length: 11 })
  cpf: string;
}
