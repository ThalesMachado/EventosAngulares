import { TestBed } from '@angular/core/testing';

import { EdicaoEventoService } from './edicao-evento.service';

describe('EdicaoEventoService', () => {
  let service: EdicaoEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdicaoEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
