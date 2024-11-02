import { TipoPrestador } from 'src/enums/tipo-prestador.enum';
import { PrestadorServico } from 'src/prestador-servico/entities/prestador-servico.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Prestador extends User {
  @Column({ length: 14 })
  cnpj: string;

  @Column({ length: 50 })
  ra: string;

  @Column({ length: 50 })
  crp: string;

  @Column({
    type: 'enum',
    enum: TipoPrestador,
    default: TipoPrestador.PRESTADOR,
  })
  tipoPestador: TipoPrestador;

  @OneToMany(
    () => PrestadorServico,
    (prestadorServico) => prestadorServico.prestador,
  )
  prestadorServico: PrestadorServico[];
}
