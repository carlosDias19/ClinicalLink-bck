import { Consulta } from 'src/consulta/entities/consulta.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity('avaliacao')
export class Avaliacao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Consulta, (consulta) => consulta.avaliacao, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'consulta_id' })
  consulta: Consulta;

  @Column({ type: 'int', nullable: false })
  nota: number;

  @Column({ type: 'text', nullable: true })
  comentario: string;

  @CreateDateColumn({ type: 'timestamp' })
  criadoEm: Date;
}
