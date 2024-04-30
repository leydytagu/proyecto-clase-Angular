import { MenuInfoInterface } from '../core/interface/menu_info.interfaces';

export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: 'inicio',
    title: 'Home',
    icon: 'fa-solid fa-house',
    classCss: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
  {
    path: 'nombre',
    title: 'Ver personas',
    icon: 'fa-solid fa-user',
    classCss: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
  {
    path: 'usuarios',
    title: 'Ver Usuarios',
    icon: 'fa-solid fa-user',
    classCss: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
  {
    path: 'productos',
    title: 'Ver productos',
    icon: 'fa-solid fa-cart-shopping p-2',
    classCss: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
  {
    path: 'image',
    title: 'Imagen',
    icon: 'fa-solid fa-image',
    classCss: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
  {
    path: 'contacto',
    title: 'Contacto',
    icon: 'fa-solid fa-message',
    classCss: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
  {
    path: 'tareas',
    title: 'Lista de tareas',
    icon: 'fa-solid fa-check',
    classCss: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
  {
    path: 'acerca-de',
    title: 'AcercaDe',
    icon: 'fa-solid fa-question',
    classCss: 'd-flex justify-content-center align-items-center p-2',
    submenu: [
      {
        path: 'mapa',
        title: 'Mapa',
        icon: 'fa-solid fa-map-pin',
        classCss: 'd-flex justify-content-center align-items-center p-2',
      },
    ],
  },
];
