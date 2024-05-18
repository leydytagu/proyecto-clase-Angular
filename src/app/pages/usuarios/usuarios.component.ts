import { UsuariosService } from './../../services/usuarios/usuarios.service';
import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { PersonaInterface } from '../../core/interface/persona.interface';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../core/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  imports: [TablaComponent],
})
export class UsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = [];

  columnas: string[] = [];
  informacionUsuario: any;

  usuarioService = inject(UsuariosService);

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((resp: any) => {
      this.usuarios = resp.usuarios;
      this.obtenerColumnas(this.usuarios);
    });
  }

  obtenerColumnas(usuarios: UsuarioModel[]) {
    if (usuarios.length > 0) {
      this.columnas = Object.keys(usuarios[0]);
    }
  }

  recibirInfoUsuarios(usuario: PersonaInterface) {
    this.informacionUsuario = usuario;

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
