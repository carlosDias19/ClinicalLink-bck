import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Prestador } from 'src/prestador/entities/prestador.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('avaliacao')
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: true })
  descricao?: string;

  @Column()
  nota: number;

  // Relacionamento com Prestador
  @ManyToOne(() => Prestador, (prestador) => prestador.avaliacoes, { eager: true })
  @JoinColumn({ name: 'avaliado_id' })
  avaliado: Prestador;

  // Relacionamento com Cliente
  @ManyToOne(() => Cliente, (cliente) => cliente.avaliacoes, { eager: true })
  @JoinColumn({ name: 'avaliador_id' })
  avaliador: Cliente;
}