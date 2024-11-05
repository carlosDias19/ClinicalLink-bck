import { Module } from '@nestjs/common';
import { ConsultaModule } from './consulta/consulta.module';
//import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicoModule } from './servico/servico.module';
import { PrestadorModule } from './prestador/prestador.module';
import { ClienteModule } from './cliente/cliente.module';
import { UniversidadeModule } from './universidade/universidade.module';
import { PrestadorServicoModule } from './prestador-servico/prestador-servico.module';
import { SupervisorModule } from './supervisor/supervisor.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'clinical_link',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true, 
    }),
    AvaliacaoModule, ConsultaModule, ServicoModule, PrestadorModule, ClienteModule, UniversidadeModule, PrestadorServicoModule, SupervisorModule, UsuarioModule
  ],
})
export class AppModule {}
