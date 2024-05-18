export class Productomodel {
  constructor(
    public nombre: string,
    public sku: string,
    public cantidad: number,
    public precio: number,
    public distribuidor: {
      nit: string;
      razonSocial: string;
      telefono: number;
      direccion: string;
    },

    public createAt: Date,
    public usuario: {
      _id: string;
      nombre: string;
      email: string;
    },

    public opiniones?: {
      comentarios: string;
      calificacion: number;
    }
  ) {}
}
