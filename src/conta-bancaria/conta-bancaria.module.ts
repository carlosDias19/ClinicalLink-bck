import { Module } from '@nestjs/common';
import { ContaBancariaService } from './conta-bancaria.service';
import { ContaBancariaController } from './conta-bancaria.controller';

@Module({
  controllers: [ContaBancariaController],
  providers: [ContaBancariaService],
})
export class ContaBancariaModule {}
