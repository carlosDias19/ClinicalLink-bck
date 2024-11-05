import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
import { Consulta } from 'src/consulta/entities/consulta.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cliente')
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Usuario, (usuario) => usuario.cliente)
    usuario: Usuario;

    @OneToMany(() => Consulta, (consulta) => consulta.paciente)
    consultas: Consulta[];

    @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.avaliador)
    avaliacoes: Avaliacao[];
}
