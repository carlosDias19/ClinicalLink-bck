import { Module } from '@nestjs/common';
import { PrestadorService } from './prestador.service';
import { PrestadorController } from './prestador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestador } from './entities/prestador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestador])],
  controllers: [PrestadorController],
  providers: [PrestadorService],
})
export class PrestadorModule {}
