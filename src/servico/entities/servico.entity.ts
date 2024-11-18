import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('servico')
export class Servico {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'text', nullable: true })
  descricao?: string;
}
