import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaInterface } from '../../core/interface/tarea.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [FormsModule, TablaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
})
export class ListaTareasComponent implements OnInit {
  tarea: string = '';
  observaciones: string = '';
  misTareas: TareaInterface[] = [];
  titulo: string = 'Lista de Tareas';
  columnas: string[] = ['tarea', 'observaciones'];

  ngOnInit(): void {
    this.misTareas = [
      {
        tarea: 'Tarea Ejemplo',
        observaciones: 'Observacion Ejemplo',
      },
    ];
  }

  agregarTarea() {
    this.misTareas.push({
      tarea: this.tarea,
      observaciones: this.observaciones,
    });

    this.tarea = '';
    this.observaciones = '';
  }

  recibirInfoTareas(item: TareaInterface) {
    Swal.fire({
      title: `Tarea`,
      icon: 'success',
      html: `Nombre de Tarea: ${item.tarea} <br>
      Observaciones: ${item.observaciones} <br>`,
    });
  }
}
