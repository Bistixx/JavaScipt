//validacion de usuarios y acepto de terminos
const usuarios = [
  { nombre: "joaquin", edad: 18, aceptoTerminos: true },
  { nombre: "santino", edad: 14, aceptoTerminos: false },
  { nombre: "javier", edad: 48, aceptoTerminos: false },
  { nombre: "mariana", edad: 55, aceptoTerminos: true },
];

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].edad <= 18 && usuarios[i].aceptoTerminos) {
    console.log(usuarios[i].nombre);
  } else if (usuarios[i].edad <= 17 && usuarios[i].aceptoTerminos) {
    console.log(usuarios[i].nombre);
  } else if (usuarios[i].edad <= 50 && usuarios[i].aceptoTerminos) {
    console.log(usuarios[i].nombre);
  } else if (usuarios[i].edad <= 75 && usuarios[i].aceptoTerminos) {
    console.log(usuarios[i].nombre);
  }
}

//CONDICIONES ANIDADAS
let edad = null;
let nombre = "Carlos";

if (edad !== null && edad !== undefined) {
  console.log(`Tienes ${edad} años`);
} else {
  if (nombre) {
    console.log(`Bienvenido, ${nombre}`);
  } else {
    console.log("Información incompleta");
  }
}

//DESCUENTO
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("cambiarDescuento");

let descuentoInicial;

const descuentoPredeterminado = 10;
let descuentoActual = descuentoInicial ?? descuentoPredeterminado;
mensaje.textContent = `El descuento es del ${descuentoActual}%`;

boton.addEventListener("click", () => {
  let descuentoIngresado = prompt("Ingrese el descuento en %");

  while (descuentoIngresado > 25) {
    descuentoIngresado = prompt(
      "El descuento anterior supera el limite, ingrese el descuento nuevamente"
    );
  }

  descuentoIngresado = Number(descuentoIngresado);

  descuentoActual = descuentoIngresado ?? descuentoPredeterminado;

  mensaje.textContent = `El descuento es del ${descuentoActual}%`;
});

// FUNCIONES
function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}

saludar("Ana");
saludar("Juan");
saludar("María");

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.log(`El área del triángulo es ${calcularAreaTriangulo(10, 5)}`);

//SUMA EN FUNCION
function sumar(a, b)//parametros
 {
    return a + b;
}

let resultado = sumar(5, 3); //argumentos 
console.log(resultado);  // Muestra: 8

// FUNCION PARA CALCULAR DESCUENTO
function calcularDescuento(precio, porcentajeDescuento) {
    return precio - (precio * porcentajeDescuento / 100);
}

// Función para calcular el precio final incluyendo impuestos
function calcularPrecioFinal(precio, descuento, impuesto) {
    let precioConDescuento = calcularDescuento(precio, descuento);
    return precioConDescuento + (precioConDescuento * impuesto / 100);
}

// Invocación
let total = calcularPrecioFinal(100, 10, 21);
console.log(total);

//FUNCION CALCULAR MULTA
function calcularMulta(diasRetraso) {
    const multaPorDia = 0.50; // 50 centavos por día de retraso
    return diasRetraso * multaPorDia;
}

let multa = calcularMulta(5);
console.log(`La multa total es: $${multa}`); // Muestra: La multa total es: $2.5

// FUNCION AGREGAR Y BUSCAR LIBROS
function agregarLibro(titulo, autor) {
    return { titulo, autor };
}

function mostrarDetalleLibro(libro) {
    console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
}

// Agregar un libro
let libro1 = agregarLibro("1984", "George Orwell");

// Mostrar detalles del libro
mostrarDetalleLibro(libro1);
// Muestra: Título: 1984, Autor: George Orwell


function devolverLibro(titulo, diasRetraso = 0) {
    const multa = diasRetraso * 0.50;
    const mensaje = diasRetraso > 0 
        ? `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}` 
        : "Devuelto a tiempo. No hay multa.";
    console.log(`Libro "${titulo}": ${mensaje}`);
}

devolverLibro("El Principito");
// Muestra: Libro "El Principito": Devuelto a tiempo. No hay multa.

devolverLibro("El Principito", 3);
// Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5.

//Mostrar color
let color = 'azul';

function mostrarColor() {
    console.log(color); // Accede a la variable global
}

mostrarColor(); // Imprime: azul

document.getElementById("miBoton").addEventListener("click", function() {
    alert("¡Botón pulsado, perdiste!");
});

//FUNCION FLECHA
const sumarFlecha = a => a + 10;
console.log(sumarFlecha(5));

//ARRAYS
const frutas = ["manzana", "banana", "cereza"];

// Acceder al primer elemento
console.log(frutas[0]);  // "manzana"

// Acceder al tercer elemento
console.log(frutas[2]);  // "cereza"