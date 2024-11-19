import { Module } from '@nestjs/common';
import { SupervisorService } from './supervisor.service';
import { SupervisorController } from './supervisor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { Supervisor } from './entities/supervisor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Supervisor])],
  controllers: [SupervisorController],
  providers: [SupervisorService],
  exports: [SupervisorService],
})
export class SupervisorModule {}
