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

//Condiciones Anidadas
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

//Descuento
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
