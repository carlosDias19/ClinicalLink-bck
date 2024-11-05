import { Cliente } from "../../cliente/entities/cliente.entity";
import { Prestador } from "../../prestador/entities/prestador.entity";
import { TipoUsuario } from "src/enums/tipo-usuario.enum";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255 })
    nome: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    telefone?: string;

    @Column({ length: 50 })
    login: string;

    @Column({ length: 255 })
    email: string;

    @Column()
    password: string;

    @Column({
    type: 'enum',
    enum: TipoUsuario,
    default: TipoUsuario.CLIENTE,
    })
    tipoPestador: TipoUsuario;

    @OneToOne(() => Cliente, (cliente) => cliente.usuario, { nullable: true })
    @JoinColumn()
    cliente?: Cliente;

    @OneToOne(() => Prestador, (prestador) => prestador.usuario, { nullable: true })
    @JoinColumn()
    prestador?: Prestador;
}
