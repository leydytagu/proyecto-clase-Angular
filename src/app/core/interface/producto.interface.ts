export interface ProductoInterface {
  nombre: string;
  sku: string;
  cantidad: number;
  precio: number;
  distribuidor: {
    nit: string;
    razonSocial: string;
    telefono: number;
    direccion: string;
  };
  createAt: Date;
}

export interface crearProductoInterface {
  nombre: string;
  sku: string;
  cantidad: number;
  precio: number;
  distribuidor: distribuidorinterface;
}

export interface distribuidorinterface {
  nit: string;
  razonSocial: string;
  telefono: number;
  direccion: string;
}
