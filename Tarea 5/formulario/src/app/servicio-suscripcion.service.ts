import { Injectable } from '@angular/core';
import { Suscripcion } from './suscripcion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioSuscripcionService {
  constructor() {}

  private urlUsada = 'http://backend/api/suscripciones';

  private http!: HttpClient;

  crearSubscripcion(s: Suscripcion): Observable<Suscripcion> {
    return this.http.post<Suscripcion>(this.urlUsada, s);
  }

  buscarSuscripcionPorId(id: number): Observable<Suscripcion> {
    return this.http.get<Suscripcion>(`${this.urlUsada}/${id}`);
  }

  buscarSuscripciones(): Observable<Suscripcion[]> {
    return this.http.get<Suscripcion[]>(this.urlUsada);
  }

  borrarUnaSuscripcion(id: number): Observable<Suscripcion> {
    return this.http.delete<Suscripcion>(`${this.urlUsada}/${id}`);
  }

 
}
