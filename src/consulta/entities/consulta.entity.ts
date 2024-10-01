import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from 'src/universidade/entities/universidade.entity';

@Entity()
export class Consulta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:'data'})
  data: Date;

  @Column('descricao')
  descricao: string;

  @ManyToOne(type => User)
  prestador: User;

  @ManyToOne(type => User)
  paciente: User;

}