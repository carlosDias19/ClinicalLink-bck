import { Test, TestingModule } from '@nestjs/testing';
import { EspecialisacaoController } from './especialisacao.controller';
import { EspecialisacaoService } from './especialisacao.service';

describe('EspecialisacaoController', () => {
  let controller: EspecialisacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecialisacaoController],
      providers: [EspecialisacaoService],
    }).compile();

    controller = module.get<EspecialisacaoController>(EspecialisacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
