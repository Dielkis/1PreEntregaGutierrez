class ProductoAgregado {
  nombre;
  precio;
  cantidad;

  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  //Metodos
  subTotal = () => {
    return this.precio * this.cantidad;
  };
}

let rolineras = new ProductoAgregado("Rolineras", 3000, 0);
let valvulas = new ProductoAgregado("Valvulas", 1500, 0);
let kitDeReparacion = new ProductoAgregado("Kit de reparación", 5000, 0);
let catalinaDeBicicleta = new ProductoAgregado("Catalina de bicicleta",6000,0);
