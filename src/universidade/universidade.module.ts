import { Module } from '@nestjs/common';
import { UniversidadeService } from './universidade.service';
import { UniversidadeController } from './universidade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Universidade } from './entities/universidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Universidade])],
  controllers: [UniversidadeController],
  providers: [UniversidadeService],
})
export class UniversidadeModule {}
