import { Module } from '@nestjs/common';
import { PrestadorServicoService } from './prestador-servico.service';
import { PrestadorServicoController } from './prestador-servico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestadorServico } from './entities/prestador-servico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrestadorServico])],
  controllers: [PrestadorServicoController],
  providers: [PrestadorServicoService],
})
export class PrestadorServicoModule {}
