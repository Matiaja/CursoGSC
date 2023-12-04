import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioSuscripcionService } from '../servicio-suscripcion.service';
@Component({
  selector: 'app-reactivo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactivo.component.html',
  styleUrl: './reactivo.component.css'
})
export class ReactivoComponent {
onSubmit() {
  if (this.formUser.valid) {
    this.servicioSuscripcion.registrarSubscripcion(this.formUser.value);
  }
}

  constructor (private fb: FormBuilder, private servicioSuscripcion: ServicioSuscripcionService){

  }
  
  formUser = this.fb.group({
    'nombre' : ['',Validators.required],
    'apellido' : ['',Validators.required],
    'email' : ['',Validators.required],
    'confirmar email' : ['',Validators.required],
    'clave' : ['',Validators.required],
    'telefono' : ['',Validators.required],
    'desea notificacion' : ['',Validators.required],
    'terminos y condiciones' : ['',Validators.required],});
    
}
