import { Prestador } from 'src/prestador/entities/prestador.entity';
import { Universidade } from 'src/universidade/entities/universidade.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Supervisor {
  @ManyToOne(() => Prestador)
  @JoinColumn({ name: 'supervisor_id' })
  supervisor: Prestador;

  @ManyToOne(() => Prestador)
  @JoinColumn({ name: 'supervisionado_id' })
  supervisionado: Prestador;

  @ManyToOne(() => Universidade)
  @JoinColumn({ name: 'universidade_id' })
  universidade: Universidade;
}
