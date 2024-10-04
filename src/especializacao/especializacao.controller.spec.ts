import { Test, TestingModule } from '@nestjs/testing';
import { EspecializacaoController } from './especializacao.controller';
import { EspecializacaoService } from './especializacao.service';

describe('EspecializacaoController', () => {
  let controller: EspecializacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecializacaoController],
      providers: [EspecializacaoService],
    }).compile();

    controller = module.get<EspecializacaoController>(EspecializacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
