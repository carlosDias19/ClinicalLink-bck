import { IsEmail, IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { TipoUsuario } from "src/enums/tipo-usuario.enum";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'Nome',
    maxLength: 255,
  })
  @IsString()
  @Length(1, 255)
  nome: string;

  @ApiProperty({
    description: 'Telefone',
    maxLength: 20,
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(0, 20)
  telefone?: string;

  @ApiProperty({
    description: 'Login',
    maxLength: 50,
  })
  @IsString()
  @Length(1, 50)
  login: string;

  @ApiProperty({
    description: 'Email',
    maxLength: 255,
  })
  @IsEmail()
  @Length(1, 255)
  email: string;

  @ApiProperty({
    description: 'Senha',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Tipo do prestador (CLIENTE, PSICOLOGO, UNIVERSITARIO)',
    enum: TipoUsuario,
    default: TipoUsuario.CLIENTE,
  })
  @IsEnum(TipoUsuario)
  tipoPestador: TipoUsuario;
}
