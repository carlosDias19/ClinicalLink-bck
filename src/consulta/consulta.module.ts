import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Consulta } from './entities/consulta.entity';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forFeature([Consulta]),
  UsuarioModule],
  controllers: [ConsultaController],
  providers: [ConsultaService],
  exports: [ConsultaService],
})
export class ConsultaModule {}
