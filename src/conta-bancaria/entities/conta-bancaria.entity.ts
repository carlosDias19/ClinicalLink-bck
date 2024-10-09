import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
@Entity()
export class ContaBancaria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('instituicao_destino')
  instituicaoDestino: string;

  @Column('agencia_destino')
  agenciaDestino: string;

  @Column('conta_destino')
  contaDestino: string;

  @ManyToOne(type => User)
  usuario: User;

}
