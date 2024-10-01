import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Especialisacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nome: string;

  @Column('instituicao_ensino')
  instituicaoEnsino: string;

  @Column('titulo')
  titulo: string;

}