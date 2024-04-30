import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  personas: PersonaInterface[] = [];
  tituloTabla: string = 'Lista de Personas';
  columnas: string[] = [];

  ngOnInit(): void {
    this.personas = [
      {
        nombre: 'Tatiana',
        fechaNacimiento: new Date('1993-10-21'),
        tipoDocumento: 'Cedula de Cidadania',
        numeroDocumento: '1029345675',
        numeroCelular: 324567897,
        email: 'tatiana.lg@gmail.com',
        peso: '50kg',
      },
      {
        nombre: 'María García',
        fechaNacimiento: new Date('1990-12-15'),
        tipoDocumento: 'Pasaporte',
        numeroDocumento: '123456789',
        numeroCelular: 3009876543,
        email: 'maria.garcia@example.com',
      },
      {
        nombre: 'Pedro López',
        fechaNacimiento: new Date('1985-07-20'),
        tipoDocumento: 'Tarjeta de Identidad',
        numeroDocumento: '78901234',
        numeroCelular: 3151234567,
        email: 'pedro.lopez@example.com',
        peso: '80kg',
      },
      {
        nombre: 'Ana Martínez',
        fechaNacimiento: new Date('1995-08-20'),
        tipoDocumento: 'Cédula de Ciudadanía',
        numeroDocumento: '987654321',
        numeroCelular: 3207654321,
        email: 'ana.martinez@example.com',
      },
    ];

    this.obtenerColumnas(this.personas);
  }

  obtenerColumnas(personas: PersonaInterface[]) {
    if (personas.length > 0) {
      this.columnas = Object.keys(personas[0]);
    }
  }
}
