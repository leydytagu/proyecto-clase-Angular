import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { ImagenesComponent } from './pages/inicio/imagenes/imagenes.component';
import { HeaderComponent } from './shares/header/header.component';
import { FooterComponent } from './shares/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ArticuloComponent,
    InicioComponent,
    UserListComponent,
    ImagenesComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
