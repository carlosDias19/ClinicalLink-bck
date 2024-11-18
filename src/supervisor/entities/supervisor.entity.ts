import { Universidade } from 'src/universidade/entities/universidade.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('supervisor')
export class Supervisor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.id, { onDelete: 'CASCADE' })
  psicologo: Usuario;

  @ManyToOne(() => Usuario, (usuario) => usuario.id, { onDelete: 'CASCADE' })
  estagiario: Usuario;

  @CreateDateColumn({ name: 'criado_em', type: 'timestamp' })
  criadoEm: Date;

  @ManyToOne(() => Universidade)
  @JoinColumn({ name: 'universidade_id' })
  universidade: Universidade;
}
