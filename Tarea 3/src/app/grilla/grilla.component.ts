import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeldaComponent } from '../celda/celda.component';

@Component({
  selector: 'app-grilla',
  standalone: true,
  imports: [CommonModule, CeldaComponent],
  templateUrl: './grilla.component.html',
  styleUrl: './grilla.component.css'
})
export class GrillaComponent {
  estados: string[] = Array(9).fill(''); 

  turnoActual: string = 'X';

  celdaClickeada(index: number) {
    this.estados[index] = this.turnoActual;
    this.turnoActual = this.turnoActual === 'X' ? 'O' : 'X';
  }
}
