import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsultaModule } from './consulta/consulta.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { EspecialisacaoModule } from './especialisacao/especialisacao.module';
import { EspecialistaModule } from './especialista/especialista.module';

@Module({
  imports: [ConsultaModule, PagamentoModule, EspecialisacaoModule, EspecialistaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
