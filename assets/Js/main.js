// Menu de inicio de sesión
let usuarios = [
  { usuario: "usuario1", contraseña: "contraseña1" },
  { usuario: "usuario2", contraseña: "contraseña2" },
  { usuario: "usuario3", contraseña: "contraseña3" },
  { usuario: "usuario4", contraseña: "contraseña4" },
  { usuario: "usuario5", contraseña: "contraseña5" },
  { usuario: "usuario6", contraseña: "contraseña6" }
];

function autenticarUsuario() {
  let nombreUsuario = prompt("Ingrese su nombre de usuario");
  let contraseña = prompt("Ingrese su contraseña");
  let usuarioValido = usuarios.find(user => user.usuario === nombreUsuario && user.contraseña === contraseña);

  // si los datos están mal ingresados
  if (!usuarioValido) {
    alert("Nombre de usuario o contraseña incorrectos. Intente nuevamente.");
    autenticarUsuario();
  }
}

// Luego, llama a la función para autenticar al usuario
autenticarUsuario();

let producto;
let precio;
let total_compra = 0;
let salir;
let error;

function cargar_productos() {
  do {
    error = 0;
    producto = parseInt(prompt("Ingrese el código de producto que quiere llevar" + "\n" +
      "1-Aceite Belmont 1lt" + "\n" +
      "2-coca cola 3lts" + "\n" +
      "3-lavalozas quix 1lt" + "\n" +
      "4-leche soprole chocolate 1lt" + "\n" +
      "5-galletas oreo chocolate" + "\n" +
      "6-arroz miraflores granel"));

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
        precio = 1600;
        producto = "arroz miraflores granel";
        break;
      default:
        alert('Opción incorrecta. Digite nuevamente');
        error = 1;
    }
  } while (error == 1);
}

// Solicito productos
cargar_productos();

do {
  // Solicito la cantidad del producto
  let cantidad = parseInt(prompt("¿Qué cantidad del " + producto + " desea llevar?"));

  console.log(producto);
  console.log(precio);
  console.log(cantidad);

  // Sumo al total de la compra
  total_compra = total_compra + precio * cantidad;

  salir = prompt('Desea agregar otro producto en el carrito de compras? SI/NO');

  if (salir.toUpperCase() === 'SI') {
    // Solicito productos nuevamente si el usuario quiere agregar más
    cargar_productos();
  }

} while (salir.toUpperCase() === 'SI');

// Aplicar IVA
const iva = total_compra * 0.19;
const total_con_iva = total_compra + iva;

console.log(nombreUsuario); // Esto dará un error ya que nombreUsuario no está definido en este contexto
console.log(total_compra);

// Muestro al cliente el total de su compra con IVA
alert(`El total de tu compra (con IVA) fue de $${total_con_iva.toFixed(2)}`);
