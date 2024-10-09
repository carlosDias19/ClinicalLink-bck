import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { ContaBancaria } from 'src/conta-bancaria/entities/conta-bancaria.entity';

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('valor')
  valor: number;

  @OneToMany(type => ContaBancaria)
  contaPagante : ContaBancaria

  @OneToMany(type => ContaBancaria)
  contaRecebe  : ContaBancaria
}
