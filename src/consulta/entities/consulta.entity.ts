import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Prestador } from 'src/prestador/entities/prestador.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('consulta')
export class Consulta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'data_agendamento', type: 'timestamp' })
  dataAgendamento: Date;

  @Column({ name: 'data_atendimento', type: 'timestamp' })
  dataAtendimento: Date;

  @Column({ length: 255, nullable: true })
  descricao?: string;

  @ManyToOne(() => Prestador, (prestador) => prestador.consultas, { eager: true })
  @JoinColumn({ name: 'prestador_id' })
  prestador: Prestador;

  @ManyToOne(() => Cliente, (cliente) => cliente.consultas, { eager: true })
  @JoinColumn({ name: 'paciente_id' })
  paciente: Cliente;
}