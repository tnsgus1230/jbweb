import { TestBed } from '@angular/core/testing';

import { KakaopayService } from './kakaopay.service';

describe('KakaopayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KakaopayService = TestBed.get(KakaopayService);
    expect(service).toBeTruthy();
  });
});
