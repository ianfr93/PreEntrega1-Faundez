// menu de inicio de sesion
let usuarios = [{
    usuario: "usuario1",
    contraseña: "contraseña1"
  },

  {
    usuario: "usuario2",
    contraseña: "contraseña2"
  },
  {
    usuario: "usuario3",
    contraseña: "contraseña3"
  },
  {
    usuario: "usuario4",
    contraseña: "contraseña4"
  },
  {
    usuario: "usuario5",
    contraseña: "contraseña5"
  },
  {
    usuario: "usuario6",
    contraseña: "contraseña6"
  }
];

function autenticarUsuario() {
  let nombreUsuario = prompt("Ingrese su nombre de usuario");
  let contraseña = prompt("Ingrese su contraseña");
  let usuarioValido = usuarios.find(user => user.usuario === nombreUsuario && user.contraseña === contraseña);

  // si los datos estan mal ingresados
  if (!usuarioValido) {
    alert("Nombre de usuario o contraseña incorrectos. Intente nuevamente.");
    autenticarUsuario();
  }
}
// Luego, llama a la función para autenticar al usuario
autenticarUsuario();

let Selecione_Caja;
let producto;
let precio;
let total_compra = 0;
let salir;
let error;

function pedir_datos_cliente() {
  Selecione_Caja = prompt('Indique caja');
  alert(`Bienvenido a la caja ${Selecione_Caja}, ${nombreUsuario}`);
}

function seleccionarCaja() {
  do {
    error = 0;
    Selecione_Caja = prompt('Seleccione una caja (1-4):\n1- La Reina\n2- Recoleta\n3- Las Condes\n4- Pomaire');

    switch (Selecione_Caja) {
      case '1':
        alert("Bienvenido a la caja 1 - La Reina, " + nombreUsuario);
        break;
      case '2':
        alert("Bienvenido a la caja 2 - Recoleta, " + nombreUsuario);
        break;
      case '3':
        alert("Bienvenido a la caja 3 - Las Condes, " + nombreUsuario);
        break;
      case '4':
        alert("Bienvenido a la caja 4 - Pomaire, " + nombreUsuario);
        break;
      default:
        alert('Opción incorrecta. Por favor, seleccione una caja válida.');
        error = 1;
    }
  } while (error == 1);
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
      "6-arroz miraflores granel"))

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

  return; // producto, precio
}


// Cuando Se Comienza con el programa Tiene el Siguiente Mensaje
alert("Bienvenido a Super WebPOS Ventas");

// Solicito los datos al cliente
pedir_datos_cliente();

do {
  // Solicito cliente al usuarios
  cargar_productos();

  // Solicito la cantidad del producto
  let cantidad = parseInt(prompt("¿Qué cantidad del " + producto + " desea llevar?"));

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

console.log(nombreUsuario);
console.log(total_compra);

// Muestro al cliente el total de su compra con IVA
alert(`${nombreUsuario.toUpperCase()}, el total de tu compra (con IVA) fue de $${total_con_iva.toFixed(2)}`);