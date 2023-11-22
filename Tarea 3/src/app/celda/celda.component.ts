import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-celda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './celda.component.html',
  styleUrl: './celda.component.css'
})
export class CeldaComponent {
  @Input() estado: string | undefined; 
  @Output() celdaClickeada: EventEmitter<void> = new EventEmitter<void>();

  celdaClicked() {
    if (!this.estado) {
      this.celdaClickeada.emit();
    }
  }

  
}
