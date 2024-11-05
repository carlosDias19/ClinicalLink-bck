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
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true, 
    }),
    AvaliacaoModule, ConsultaModule, ServicoModule, PrestadorModule, ClienteModule, UniversidadeModule, PrestadorServicoModule, SupervisorModule, UsuarioModule
  ],
})
export class AppModule {}
