import { Test, TestingModule } from '@nestjs/testing';
import { CnabsController } from './cnabs.controller';
import { CnabsService } from './cnabs.service';

describe('CnabsController', () => {
  let controller: CnabsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CnabsController],
      providers: [CnabsService],
    }).compile();

    controller = module.get<CnabsController>(CnabsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
