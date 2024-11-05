import { Prestador } from 'src/prestador/entities/prestador.entity';
import { Servico } from 'src/servico/entities/servico.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('prestador_servico')
export class PrestadorServico {
  @PrimaryColumn({ name: 'prestador_id' })
  prestadorId: number;

  @ManyToOne(() => Prestador, (prestador) => prestador.prestadorServico, {
    eager: true,
  })
  @JoinColumn({ name: 'prestador_id' })
  prestador: Prestador;

  @PrimaryColumn({ name: 'servico_id' })
  servicoId: number;

  @ManyToOne(() => Servico, (servico) => servico.prestadorServico, {
    eager: true,
  })
  @JoinColumn({ name: 'servico_id' })
  servico: Servico;

  @Column({ type: 'boolean', default: false })
  especialista: boolean;
}
