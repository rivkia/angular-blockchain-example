import { TestBed, inject } from '@angular/core/testing';

import { FirstContractService } from './first-contract.service';

describe('FirstContractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstContractService]
    });
  });

  it('should be created', inject([FirstContractService], (service: FirstContractService) => {
    expect(service).toBeTruthy();
  }));
});
