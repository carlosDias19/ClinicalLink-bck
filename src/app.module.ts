import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsultaModule } from './consulta/consulta.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { EspecialisacaoModule } from './especialisacao/especialisacao.module';
import { EspecialistaModule } from './especialista/especialista.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConsultaModule, PagamentoModule, EspecialisacaoModule, EspecialistaModule, AvaliacaoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
