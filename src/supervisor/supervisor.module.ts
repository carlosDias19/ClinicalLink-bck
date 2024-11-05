import { Module } from '@nestjs/common';
import { SupervisorService } from './supervisor.service';
import { SupervisorController } from './supervisor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SupervisorModule])],
  controllers: [SupervisorController],
  providers: [SupervisorService],
})
export class SupervisorModule {}
