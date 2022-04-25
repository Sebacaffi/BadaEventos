import { TestBed } from '@angular/core/testing';

import { ContactoService } from '../services/contacto.service';

describe('ContactoService', () => {
  let service: ContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
