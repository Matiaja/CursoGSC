export class Suscripcion {
    constructor(
      public nombre: string,
      public apellido: string,
      public email: string,
      public telefono: number,
      public clave: string,
      public notificaciones: boolean
    ) {}
  }