import { Test, TestingModule } from '@nestjs/testing';
import { EspecialisacaoService } from './especialisacao.service';

describe('EspecialisacaoService', () => {
  let service: EspecialisacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspecialisacaoService],
    }).compile();

    service = module.get<EspecialisacaoService>(EspecialisacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
