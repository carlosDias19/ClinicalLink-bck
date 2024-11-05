import { Prestador } from 'src/prestador/entities/prestador.entity';
import { Universidade } from 'src/universidade/entities/universidade.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('supervisor')
export class Supervisor {
  @PrimaryColumn({ name: 'supervisor_id' })
  supervisorId: string;

  @ManyToOne(() => Prestador)
  @JoinColumn({ name: 'supervisor_id' })
  supervisor: Prestador;

  @PrimaryColumn({ name: 'supervisionado_id' })
  supervisionadoId: string;

  @ManyToOne(() => Prestador)
  @JoinColumn({ name: 'supervisionado_id' })
  supervisionado: Prestador;

  @ManyToOne(() => Universidade)
  @JoinColumn({ name: 'universidade_id' })
  universidade: Universidade;
}
