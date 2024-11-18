import { Module } from '@nestjs/common';
import { UsuarioServicoService } from './usuario-servico.service';
import { UsuarioServicoController } from './usuario-servico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioServico } from './entities/usuario-servico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioServico])],
  controllers: [UsuarioServicoController],
  providers: [UsuarioServicoService],
})
export class UsuarioServicoModule {}
