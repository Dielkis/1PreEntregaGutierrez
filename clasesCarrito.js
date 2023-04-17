class productoAgregado {
  nombre;
  precio;
  cantidad;

  constructor(nombre, precio, cantidad, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  //Metodos
  subTotal = () => {
    return this.precio * this.cantidad;
  };
}