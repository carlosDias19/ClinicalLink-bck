import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('universidade')
export class Universidade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  endereco?: string;

  @OneToMany(() => Usuario, (usuario) => usuario.universidade)
  estagiarios: Usuario[];
}
