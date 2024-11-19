import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { DetalhesProfissionaisModule } from 'src/detalhes-profissionais/detalhes-profissionais.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), DetalhesProfissionaisModule],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
