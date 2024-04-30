import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { PersonaInterface } from '../../core/interface/persona.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  imports: [TablaComponent],
})
export class UsuariosComponent implements OnInit {
  usuarios: PersonaInterface[] = [];

  columnas: string[] = [
    'Nombre',
    'Fecha de Nacimiento',
    'Tipo de Documento',
    'Numero de documento',
    'Numero de celular',
    'Email',
    'Peso',
  ];
  informacionUsuario: any;

  ngOnInit(): void {
    this.usuarios = [
      {
        nombre: 'Jimmy',
        fechaNacimiento: new Date('1992-12-30'),
        tipoDocumento: 'Cedula de Cidadania',
        numeroDocumento: '48473833',
        numeroCelular: 93838383,
        email: 'jimmy.ca@gmail.com',
        peso: '70kg',
      },
      {
        nombre: 'Alfonso',
        fechaNacimiento: new Date('1962-11-14'),
        tipoDocumento: 'Cedula de Extranjeria',
        numeroDocumento: '938393',
        numeroCelular: 901234393,
        email: 'alfonso.or@gmail.com',
        peso: '80kg',
      },
    ];
    console.log('componente padre', this.usuarios);
    this.obtenerColumnas(this.usuarios);
  }

  obtenerColumnas(usuarios: PersonaInterface[]) {
    if (usuarios.length > 0) {
      this.columnas = Object.keys(usuarios[0]);
    }
  }

  recibirInfoUsuarios(usuario: PersonaInterface) {
    this.informacionUsuario = usuario;

    console.log('test', this.informacionUsuario);
    Swal.fire({
      title: `Usuario`,
      icon: 'success',
      html: `Nombre: ${usuario.nombre} <br>
      Fecha de Nacimiento: ${usuario.fechaNacimiento} <br>
      Tipo de documento: ${usuario.tipoDocumento} <br>
      Numero de documento: ${usuario.numeroDocumento} <br>
      Email: ${usuario.email} <br>
      Peso: ${usuario.peso} <br>`,
    });
  }
}
