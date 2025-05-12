import { Test, TestingModule } from '@nestjs/testing';
import { ZendeskController } from './zendesk.controller';
import { ZendeskService } from './zendesk.service';

describe('ZendeskController', () => {
  let controller: ZendeskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZendeskController],
      providers: [ZendeskService],
    }).compile();

    controller = module.get<ZendeskController>(ZendeskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
