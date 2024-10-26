import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Universidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;
}
