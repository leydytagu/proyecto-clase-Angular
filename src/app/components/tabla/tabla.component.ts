import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() titulo: string = '';
  @Input() columnas: string[] = [];

  @Output() onInformacion: EventEmitter<any> = new EventEmitter<any>();

  //ngoninit: Renderizar - Llamar servicios. cCrea el primer componente, es el primero que se ve en el navegador
  ngOnInit(): void {}

  //ngo=Onchanges. Funcion que escucha los cambios de la informacion que me envia el padre, se ve en el componente hijo
  //Los veo en el input y veo los cambios en el ngOnchange
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.data = changes['data'].currentValue;
    }
  }

  formatearNombreDeColumnas(columna: string): string {
    // Dividir el nombre por mayúsculas y unir con espacios
    return columna.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleUpperCase();
  }

  isFecha(value: any): boolean {
    return value instanceof Date;
  }

  enviarInformacion(data: any) {
    this.onInformacion.emit(data);
  }
}
