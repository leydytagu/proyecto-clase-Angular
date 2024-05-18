import { ProductosService } from './../../../services/productos/productos.service';
import { Router, RouterLink } from '@angular/router';
import { Productomodel } from '../../../core/models/producto.model';
import { Component, OnInit, inject } from '@angular/core';
import { TablaComponent } from '../../../components/tabla/tabla.component';
import { ProductoInterface } from '../../../core/interface/producto.interface';
import Swal from 'sweetalert2';
import { PATH } from '../../../enum/path.enum';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  imports: [TablaComponent],
})
export class ProductosComponent implements OnInit {
  misProductos: ProductoInterface[] = [];
  productos: Productomodel[] = [];
  titulo: string = 'Lista de Productos';
  columnas: string[] = [];
  informacion: Productomodel | undefined;

  private productosService = inject(ProductosService);

  private router = inject(Router);

  ngOnInit(): void {
    this.productosService
      .getProductos()
      .subscribe((productos: Productomodel[]) => {
        this.productos = productos;
        this.misProductos = productos.map((prodcuto) =>
          this.resumenDeProductos(prodcuto)
        );

        this.obtenerColumnas(this.misProductos);
      });
  }

  resumenDeProductos(producto: Productomodel): ProductoInterface {
    return {
      nombre: producto.nombre,
      sku: producto.sku,
      cantidad: producto.cantidad,
      precio: producto.precio,
      distribuidor: producto.distribuidor,
      createAt: producto.createAt,
    };
  }

  obtenerColumnas(productos: ProductoInterface[]) {
    if (productos.length > 0) {
      this.columnas = Object.keys(productos[0]);
    }
  }

  recibirInformacion(data: ProductoInterface) {
    this.informacion = this.productos.find(
      (producto) => producto.sku === data.sku
    ); //informacion completa
    if (this.informacion) {
      Swal.fire({
        title: `Info Producto # ${this.informacion.sku}`,
        icon: 'success',
        html: `Nombre: ${this.informacion.nombre} <br>
              Sku: ${this.informacion.sku} <br>
              Cantidad: ${this.informacion.cantidad} <br>
              Precio: ${this.informacion.precio} <br>
              Distribuidor direccion: ${this.informacion.distribuidor.direccion} <br>
              Distribuidor nit : ${this.informacion.distribuidor.nit} <br>
              Distribuidor razon: ${this.informacion.distribuidor.razonSocial} <br>
              Distribuidor telefono: ${this.informacion.distribuidor.telefono}`,
      });
    }
  }

  crearProductos() {
    this.router.navigateByUrl(`${PATH.CREAR_PRODUCTOS}`);
  }
}
