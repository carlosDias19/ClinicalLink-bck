import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  OneToOne,
} from 'typeorm';

@Entity('consulta')
export class Consulta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.consultas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'paciente_id' })
  paciente: Usuario;

  @ManyToOne(() => Usuario, (usuario) => usuario.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'profissional_id' })
  profissional: Usuario;

  @Column({ type: 'timestamp' })
  data: Date;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @CreateDateColumn({ name: 'criado_em', type: 'timestamp' })
  criadoEm: Date;

  @OneToOne(() => Avaliacao, (avaliacao) => avaliacao.consulta)
  avaliacao: Avaliacao;
}
