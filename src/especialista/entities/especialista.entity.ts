import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { Especializacao } from 'src/especializacao/entities/especializacao.entity';

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

  @ManyToOne(type => Especializacao)
  especializacao: Especializacao;

}
