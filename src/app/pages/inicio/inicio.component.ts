import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  mostrarTitulo: boolean = true;

  personas = [
    {
      nombre: 'Tatiana',
      edad: 30,
      ciudad: 'Bogota',
      documento: 1029238392,
    },
    {
      nombre: 'Jimmy',
      edad: 31,
      ciudad: 'Mosquera',
      documento: 19282383,
    },
  ];

  abrirModal() {
    Swal.fire('Nuevo Modal');
  }
}
