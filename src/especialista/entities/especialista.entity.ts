import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { Especialisacao } from 'src/especialisacao/entities/especialisacao.entity';

@Entity()
export class Especialista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nome: string;

  @Column('instituicao_ensino')
  instituicaoEnsino: string;

  @Column('titulo')
  titulo: string;

  @ManyToOne(type => Especialisacao)
  especialisacao: Especialisacao;

}
