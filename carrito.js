alert('¡Bienvenido a Motos&Bike la mejor tienda de repuestos y accesorios! ');
let total = 0
let empieza;

do {
    empieza = prompt("¿Podemos comenzar con tu pedido?: Ingresa Si").toLowerCase();

} while (empieza != "si");

let nombreUsuario = prompt("Por Favor, ingrese su nombre y apellido.");
let saludo = alert("Hola! " + nombreUsuario);
alert("Antes de realizar tu pedido quisieramos presentarte algunos productos en promoción")

let seleccionProductos = Number(prompt("¿Deseas alguno de los productos en promoción?\n\n Te dejamos la lista a continuación:\n\n1-Rolineras $3000\n2-Valvulas $1500\n3-Kit de reparación $5000\n4-Catalina de bicicleta $6000\n\n Si no desea uno de los productos en promoción, escribe 0").toLowerCase());

const cantidad = (cantidad, precioPromocional) => {
    return cantidad * precioPromocional
}

while (seleccionProductos != 0) {
    switch (seleccionProductos) {
        case 1:
            seleccionProductos = Number(prompt("el producto seleccionado es Rolineras, indique la cantidad"))
            total += cantidad(seleccionProductos, 3000)
            break;
        case 2:
            seleccionProductos = Number(prompt("el producto seleccionado es Valvulas, indique la cantidad"))
            total += cantidad(seleccionProductos, 1500)
            break;
        case 3:
            seleccionProductos = Number(prompt("el producto seleccionado es Kit de reparación, indique la cantidad"))
            total += cantidad(seleccionProductos, 5000)
            break;
        case 4:
            seleccionProductos = Number(prompt("el producto seleccionado es Catalina de bicicleta, indique la cantidad"))
            total += cantidad(seleccionProductos, 6000)
            break;
        default:
            seleccionProductos = alert("No seleccionaste un numero que corresponda a un producto, por favor vuelve a intentar")
    }
    seleccionProductos = Number(prompt("Elige el producto que deseas:\n1-Rolineras $3000\n2-Valvulas $1500\n3-Kit de reparación $5000\n4-Catalina de bicicleta $6000\n\n Si no desea uno de los productos en promoción, escribe 0"))
}

function cargarUnProducto() {
    const nuevoProducto = new productoAgregado();
    nuevoProducto.nombre = prompt("Escribe el nombre de tu producto: ");
    nuevoProducto.cantidad = Number(prompt("Cuantos deseas? "));
    nuevoProducto.precio = Number(prompt("Que precio tiene? "));
  
    carrito.push(nuevoProducto);
    console.log("Producto agregado al carrito!");
  }


alert("El total de la compra es de: $" + total);

const envio = () => {
    if (total >= 10000) {
        alert("El envio de tu compra es completamente gratis")
    } else {
        total += 1000
        alert("El costo de envio es de 1000, el total es: $" + total)
    }
}

envio()

const metodoDePago = () => {
    let metodo = prompt("Ingrese el metodo de pago, tarjeta o efectivo\nRecuerda que pagando en efectivo tendras un descuento de 1000$\nPagando con tu tarjeta tendras un incremento de 1000$").toLowerCase()
    if (metodo == "tarjeta") {
        total += 1000
        console.log(total);
        alert("Tendras un recargo de 1000, el total es: $" + total)
    } else if (metodo == "efectivo") {
        total -= 1000
        alert("Tendras un descuento de 1000, el total es: $" + total)
    }
    else {
        alert("No hemos reconocido tu eleccion, por favor vuelve a intentar")
        metodoDePago()
    }


}

metodoDePago()

alert("GRACIAS POR PREFERIR MOTOS&BIKES\n\nHASTA LA PROXIMA")                     