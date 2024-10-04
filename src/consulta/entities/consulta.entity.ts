import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
@Entity()
export class Consulta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:'data'})
  data: Date;

  @Column('descricao')
  descricao: string;

  @Column('data_consulta')
  dataConsulta: Date;

  @ManyToOne(type => User)
  prestador: User;

  @ManyToOne(type => User)
  paciente: User;

}