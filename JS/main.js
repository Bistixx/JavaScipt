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

//FUNCION FLECHA
const sumarFlecha = a => a + 10;
console.log(sumarFlecha(5));

//ARRAYS DE CONTRASEÑAS
let contraseñas = ["1234", "abcd", "holaa", "password"];

console.log(contraseñas);

//ARRAY CON ARRAYS
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matriz);
let numeroElegido = (matriz[0][1]);
console.log(`El número elegido es: ${numeroElegido}`);


// Supongamos que tenemos el siguiente array de números
const numeros = [10, 20, 30, 40, 50];

// Para recorrer este array usaremos un bucle for
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Esto imprimirá cada número del array en la consola
}

//USO DE INDEXOF
let nombres = ['Ana', 'Juan', 'Carlos', 'Marta'];
let indice = nombres.indexOf('Carlos');
console.log(`Hola ${nombres[indice]}, ¿cómo estás?`);

//ARRAY DE OBJETOS CON PUSH
let arrayObjetos = [];
arrayObjetos.push({ id: 1, nombre: "Sombrero" });
arrayObjetos.push({ id: 2, nombre: "Camisa" });
arrayObjetos.push({ id: 3, nombre: "Pantalón" });
console.log(arrayObjetos);

for (let objeto of arrayObjetos) {
    console.log(objeto.nombre);
}
