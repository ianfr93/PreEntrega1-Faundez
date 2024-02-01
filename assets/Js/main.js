let nombre_y_apellido;
let producto;
let precio;
let total_compra = 0;
let salir;
let error;

function pedir_datos_cliente() {
  nombre_y_apellido = prompt('Indique su nombre y apellido');
}

function cargar_productos() {
  do {
    error = 0;
    producto = parseInt(prompt("Ingrese el código de producto que quiere llevar" + "\n" +
      "1-Aceite Belmont 1lt" + "\n" +
      "2-coca cola 3lts" + "\n" +
      "3-lavalozas quix 1lt" + "\n" +
      "4-leche soprole chocolate 1lt" + "\n" +
      "5-galletas oreo chocolate" + "\n" +
      "6-tarro de palmitos wasil" + "\n" +
      "7-limpia pisos alex 1lt" + "\n" +
      "8-pasta de dientes colgate triple" + "\n" +
      "9-confort noble 4 rollos" + "\n" +
      "10-arroz miraflores granel"))


    switch (producto) {
      case 1:
        precio = 4000;
        producto = "Aceite Belmont 1lt";
        break;
      case 2:
        precio = 3000;
        producto = "coca cola 3lts";
        break;
      case 3:
        precio = 2850;
        producto = "lavalozas quix 1lt";
        break;
      case 4:
        precio = 1200;
        producto = "leche soprole chocolate 1lt";
        break;
      case 5:
        precio = 850;
        producto = "galletas oreo chocolate";
        break;
      case 6:
        precio = 2300;
        producto = "tarro de palmitos wasil";
        break;
      case 7:
        precio = 5500;
        producto = "limpia pisos alex 1lt";
        break;
      case 8:
        precio = 2240;
        producto = "pasta de dientes colgate triple";
        break;
      case 9:
        precio = 1280;
        producto = "confort noble 4 rollos";
        break;
      case 10:
        precio = 1600;
        producto = "arroz miraflores granel";
        break;

      default:
        alert('Opción incorrecta. Digite nuevamente');
        error = 1;
    }
  } while (error == 1);

  return // producto, precio
}

// Comienzo con el programa
alert("Bienvenido al proceso de compra");

// Solicito datos al cliente
pedir_datos_cliente();

do {
  // Solicito cliente al usuarios
  cargar_productos();

  // Solicito la cantidad del producto
  cantidad = parseInt(prompt("¿Qué cantidad del " + producto + " desea llevar?"));

  console.log(producto);
  console.log(precio);
  console.log(cantidad);

  // Sumo al total de la compra
  total_compra = total_compra + precio * cantidad;

  salir = prompt('Desea agregar otro producto en el carrito de compras? SI/NO');

} while (salir.toUpperCase() != 'NO');

// Aplicar IVA
const iva = total_compra * 0.19;
const total_con_iva = total_compra + iva;

console.log(nombre_y_apellido);
console.log(total_compra);

// Muestro al cliente el total de su compra con IVA
alert(`${nombre_y_apellido.toUpperCase()}, el total de tu compra (con IVA) fue de $${total_con_iva.toFixed(2)}`);