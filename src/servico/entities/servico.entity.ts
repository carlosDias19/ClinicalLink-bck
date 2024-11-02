import { PrestadorServico } from 'src/prestador-servico/entities/prestador-servico.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;

  @OneToMany(
    () => PrestadorServico,
    (prestadorServico) => prestadorServico.servico,
  )
  prestadorServico: PrestadorServico[];
}
