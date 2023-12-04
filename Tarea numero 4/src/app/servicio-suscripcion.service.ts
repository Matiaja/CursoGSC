import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioSuscripcionService {

  registrarSubscripcion(subscripcion: any) {
    console.log('Subscripción registrada:', subscripcion);
  }
}
