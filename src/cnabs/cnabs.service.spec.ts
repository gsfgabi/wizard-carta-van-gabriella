import { Test, TestingModule } from '@nestjs/testing';
import { CnabsService } from './cnabs.service';

describe('CnabsService', () => {
  let service: CnabsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CnabsService],
    }).compile();

    service = module.get<CnabsService>(CnabsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
