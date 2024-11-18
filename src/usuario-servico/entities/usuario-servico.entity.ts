import { Servico } from 'src/servico/entities/servico.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Entity, ManyToOne, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario_servico')
export class UsuarioServico {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.id, { onDelete: 'CASCADE' })
  usuario: Usuario;

  @ManyToOne(() => Servico, (servico) => servico.id, { onDelete: 'CASCADE' })
  servico: Servico;

  @Column({ type: 'boolean', default: false })
  especialista: boolean;
}
