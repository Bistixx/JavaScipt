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

//BOTON DE NO APRETAR
document.getElementById("BotonNoApretar").addEventListener("click", function() {
    alert("¡Botón pulsado, perdiste!");
});

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

//AGREGAR Y ELIMINAR ELEMENTOS DE UN ARRAY
let frutas = ['manzana', 'banana'];
frutas.push('naranja');
console.log(frutas);  // Salida: ['manzana', 'banana', 'naranja']

// Eliminar el primer elemento del array
let primeraFruta = frutas.shift();
console.log(frutas);  // Salida: ['banana', 'naranja']
console.log(`La primera fruta eliminada es: ${primeraFruta}`);  // Salida: 'manzana'

// Eliminar el último elemento del array
let frutaEliminada = frutas.pop();
console.log(frutas);  // Salida: ['manzana', 'banana']
console.log(`La fruta eliminada es: ${frutaEliminada}`);  // Salida: 'naranja'

// Agregar múltiples elementos al inicio del array
let frutasNuevas = frutas.unshift('manzana', 'naranja', 'kiwi');
console.log(frutas);
console.log(`Se han agregado mas frutas. El total de frutas ahora son: ${frutasNuevas}`);

//USO DE INDEXOF
let nombres = ['Ana', 'Juan', 'Carlos', 'Marta'];
let indice = nombres.indexOf('Carlos');
console.log(`Hola ${nombres[indice]}, ¿cómo estás?`);

//VERIFICADOR RAPIDO CON INCLUDE
//SIRVE PARA SABER SI UN ELEMENTO EXISTE EN UN ARRAY
let Frutas = ['manzana', 'naranja', 'banana'];
let contiene = Frutas.includes('naranja');
console.log(contiene);

//ORDENAR UN ARRAY DE STRINGS CONTANDO LAS MAYUS SORT
let apellidosDesordenados = ['Gomez', 'Perez', 'lopez', 'Martinez'];
apellidosDesordenados.sort();
console.log(apellidosDesordenados);
//ORDENAR UN ARRAY DE STRINGS SIN CONTAR LAS MAYUS
let apellidosDesordenados2 = ['Gomez', 'Perez', 'lopez', 'Martinez'];
apellidosDesordenados2.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(apellidosDesordenados2);
//ORDENAR UN ARRAY DE NUMEROS MANERA CRECIENTE
let numerosDesordenados = [5, 3, 8, 1, 4];
numerosDesordenados.sort((a, b) => a - b);
console.log(numerosDesordenados);
//METODO REVERSE
numerosDesordenados.reverse();
console.log(numerosDesordenados);

//SEMAFORO FUNCIONAL
function semaforo(estado) {
  const estadoElemento = document.getElementById("estado");

  switch (estado) {
    case 'rojo':
      estadoElemento.innerText = "Detenerse";
      break;
    case 'amarillo':
      estadoElemento.innerText = "Precaución";
      break;
    case 'verde':
      estadoElemento.innerText = "Avanzar";
      break;
    default:
      estadoElemento.innerText = "Estado desconocido";
  }
}

//ARRAY DE OBJETOS CON PUSH
let arrayObjetos = [];
arrayObjetos.push({ id: 1, nombre: "Sombrero" });
arrayObjetos.push({ id: 2, nombre: "Camisa" });
arrayObjetos.push({ id: 3, nombre: "Pantalón" });
console.log(arrayObjetos);

for (let objeto of arrayObjetos) {
    console.log(objeto.nombre);
}

//EJEMPLO DE ARRAYS "VACIOS"
alert("TU ID ES PERSONAL, NO SE LA COMPARTAS A NADIE");

const usuarios2 = [];
usuarios2.push({idPersonal: 13200613, usuario: "Ana", contraseña: "abc" });
usuarios2.push({ idPersonal: 200613, usuario: "Luis", contraseña: "123" });

//PARTE DE APRETAR EL BOTON PARA RECUPERAR CUENTA
document.getElementById("recuperarBtn").addEventListener("click", function() {
  const id = prompt("Ingrese el ID del usuario a buscar:");

//SI FALLA VUELVE A INTENTAR
  if (!id) return;

// BUSCAR USUARIO EN EL ARRAY
  const user = usuarios2.find(usuario =>
    usuario.idPersonal === parseInt(id)
  );

// Muestra el resultado
  const resultado = document.getElementById("resultado");

  if (user) {
    resultado.innerText = `Usuario: ${user.usuario} Contraseña: ${user.contraseña}`;
    resultado.classList.remove("oculto");
  } else {
    resultado.innerText = "Usuario no encontrado";
    resultado.classList.remove("oculto");
  }
});
