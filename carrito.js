let carrito = [];
let hayProductos = false;
alert("¡Bienvenido a Motos&Bike la mejor tienda de repuestos y accesorios! ");
let total = 0;
let empieza = prompt(
  "¿Podemos comenzar con tu pedido?: Ingresa Si"
).toLowerCase();

if (empieza === "si") {
  seleccionarProducto();
} else {
  alert("Gracias, vuelva pronto");
}

function datosUsuario() {
  if (empieza != "si") {
    let nombreUsuario = prompt("Por Favor, ingrese su nombre y apellido.");
    let saludo = alert("Hola! " + nombreUsuario);
    alert(
      "Ademas de nuestra bienvenida, quisieramos presentarte algunos de nuestros produtos en promoción.\nPromoción valida por el mes en curso"
    );
  }
  return;
}

function cantidad(cantidad, precioPromocional) {
  return cantidad * precioPromocional;
}

function envio() {
  if (hayProductos) {
    if (total >= 10000) {
      alert("El envio de tu compra es completamente gratis");
    } else {
      total += 1000;
      alert("El costo de envio es de 1000, el total es: $" + total);
    }
    alert("El total de la compra es de: $" + total);
  }
  return;
}

function metodoDePago() {
  if (hayProductos) {
    let metodo = prompt(
      "Ingrese el metodo de pago, tarjeta o efectivo\nRecuerda que pagando en efectivo tendras un descuento de 1000$\nPagando con tu tarjeta tendras un incremento de 1000$"
    ).toLowerCase();
    if (metodo == "tarjeta") {
      total += 1000;
      console.log(total);
      alert("Tendras un recargo de 1000, el total es: $" + total);
    } else if (metodo == "efectivo") {
      total -= 1000;
      alert("Tendras un descuento de 1000, el total es: $" + total);
    } else {
      alert("No hemos reconocido tu eleccion, por favor vuelve a intentar");
      metodoDePago();
    }
  }
  return;
}

function seleccionarProducto() {
  let seleccionProductos = Number(
    prompt(
      "¿Deseas alguno de los productos en promoción?\nTe dejamos la lista a continuación:\n1-Rolineras $3000\n2-Valvulas $1500\n3-Kit de reparación $5000\n4-Catalina de bicicleta $6000\n5-Ingresa otro producto \n Si no deseas uno de los productos en promoción, escribe 0"
    )
  );
  while (seleccionProductos >= 0) {
    switch (seleccionProductos) {
      case 0:
        alert("Gracias, vuelva pronto");
        console.log("ESTOY EN EL CASE 0");
        seleccionProductos = -1;
        break;
      case 1:
        rolineras.cantidad = Number(
          prompt(
            `el producto seleccionado es ${rolineras.nombre}, indique la cantidad: `
          )
        );
        console.log("ESTOY EN EL CASE 1");
        total += cantidad(rolineras.cantidad, 3000);
        seleccionProductos = -1;
        hayProductos = true;
        envio();
        metodoDePago();
        carrito.push(rolineras);
        break;
      case 2:
        hayProductos = true;
        valvulas.cantidad = Number(
          prompt(
            `el producto seleccionado es ${valvulas.nombre}, indique la cantidad: `
          )
        );
        console.log("ESTOY EN EL CASE 2");
        total += cantidad(valvulas.cantidad, 1500);
        seleccionProductos = -1;
        envio();
        metodoDePago();
        carrito.push(valvulas);
        break;
      case 3:
        hayProductos = true;
        kitDeReparacion.cantidad = Number(
          prompt(
            `el producto seleccionado es ${kitDeReparacion.nombre}, indique la cantidad: `
          )
        );

        console.log("ESTOY EN EL CASE 3");
        total += cantidad(kitDeReparacion.cantidad, 5000);
        seleccionProductos = -1;
        envio();
        metodoDePago();
        carrito.push(kitDeReparacion);
        break;
      case 4:
        hayProductos = true;
        catalinaDeBicicleta.cantidad = Number(
          prompt(
            `el producto seleccionado es ${catalinaDeBicicleta.nombre}, indique la cantidad: `
          )
        );

        console.log("ESTOY EN EL CASE 4");
        total += cantidad(catalinaDeBicicleta.cantidad, 6000);
        seleccionProductos = -1;
        envio();
        metodoDePago();

        carrito.push(catalinaDeBicicleta);
        break;
      case 5:
        alert("Ingresa tu propio producto");
        productoNuevo = new ProductoAgregado();
        productoNuevo.nombre = prompt("Nombre: ");
        productoNuevo.precio = Number(prompt("Precio: "));
        productoNuevo.cantidad = Number(prompt("Cantidad: "));
        total += cantidad(productoNuevo.cantidad, productoNuevo.precio);
        seleccionProductos = -1;
        hayProductos = true;
        envio();
        metodoDePago();
        carrito.push(productoNuevo);
        break;
      default:
        seleccionProductos = alert(
          "No seleccionaste un numero que corresponda a las opciones, por favor vuelve a intentar"
        );
    }
  }
}

alert("GRACIAS POR PREFERIR MOTOS&BIKES\n\nHASTA LA PROXIMA");
