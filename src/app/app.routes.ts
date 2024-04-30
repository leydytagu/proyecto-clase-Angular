import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ImagenesComponent } from './pages/inicio/imagenes/imagenes.component';
import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercaDeComponent } from './pages/inicio/acerca-de/acerca-de.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { FooterComponent } from './shares/footer/footer.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';

export const routes: Routes = [
  {
    path: '',
    title: 'home',
    children: [
      {
        path: 'inicio',
        title: 'home',
        component: InicioComponent,
      },
      {
        path: 'nombre',
        title: 'nombres',
        component: UserListComponent,
      },
      {
        path: 'usuarios',
        title: 'Ver usuarios',
        component: UsuariosComponent,
      },
      {
        path: 'productos',
        title: 'Mis productos',
        component: ProductosComponent,
      },
      {
        path: 'tables',
        title: 'tables',
        component: InicioComponent,
      },
      {
        path: 'image',
        title: 'imagenes',
        component: ImagenesComponent,
      },
      {
        path: 'contacto',
        title: 'contacto',
        component: ContactoComponent,
      },
      {
        path: 'tareas',
        title: 'Lista de Tareas',
        component: ListaTareasComponent,
      },
      {
        path: 'acerca-de',
        title: 'Acerca De Nosotros',
        component: AcercaDeComponent,
      },
      {
        path: 'articulo',
        title: 'Articulo',
        component: ArticuloComponent,
      },
    ],
  },
];
