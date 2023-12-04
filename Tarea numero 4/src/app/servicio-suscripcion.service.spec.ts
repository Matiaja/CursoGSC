import { TestBed } from '@angular/core/testing';

import { ServicioSuscripcionService } from './servicio-suscripcion.service';

describe('ServicioSuscripcionService', () => {
  let service: ServicioSuscripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSuscripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
