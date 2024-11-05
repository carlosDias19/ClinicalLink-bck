import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
import { Consulta } from 'src/consulta/entities/consulta.entity';
import { PrestadorServico } from 'src/prestador-servico/entities/prestador-servico.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('prestador')
export class Prestador {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 14 })
  cnpj: string;

  @Column({ length: 50 })
  ra: string;

  @Column({ length: 50 })
  crp: string;

  @OneToOne(() => Usuario, (usuario) => usuario.prestador)
  usuario: Usuario;

  @OneToMany(
    () => PrestadorServico,
    (prestadorServico) => prestadorServico.prestador,
  )
  prestadorServico: PrestadorServico[];

  @OneToMany(() => Consulta, (consulta) => consulta.prestador)
  consultas: Consulta[];

  @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.avaliado)
  avaliacoes: Avaliacao[];
}
