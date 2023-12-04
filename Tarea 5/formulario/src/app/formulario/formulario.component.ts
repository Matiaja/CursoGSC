import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServicioSuscripcionService } from '../servicio-suscripcion.service';
import { HttpClientModule } from '@angular/common/http';
import { Suscripcion } from '../suscripcion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  formUser = this.fb.group({
    'nombre' : ['',Validators.required],
    'apellido' : ['',Validators.required],
    'email' : ['',Validators.required],
    'confirmaremail' : ['',Validators.required],
    'clave' : ['',Validators.required],
    'telefono' : ['',Validators.required],
    'deseanotificacion' : [true,Validators.required],
    'terminosycondiciones' : ['',Validators.required],});

  constructor(
    private fb: FormBuilder, 
    private servicioSuscripcion: ServicioSuscripcionService
  ) {}

  onSubmit() {
    if (this.formUser.valid) {
      const suscripcion = new Suscripcion(
      this.formUser.get('nombre')!.value ?? '', 
      this.formUser.get('apellido')!.value ?? '',
      this.formUser.get('email')!.value ?? '',
      Number(this.formUser.get('telefono')!.value) || 0,
      this.formUser.get('clave')!.value ?? '',
      this.formUser.get('deseanotificacion')!.value!,

      );

      this.servicioSuscripcion.crearSubscripcion(suscripcion).subscribe(
        (response) => {
          console.log('Suscripción exitosa:', response);
        },
        (error) => {
          console.error('Error al suscribirse:', error);
        }
      );
    }
}
}
