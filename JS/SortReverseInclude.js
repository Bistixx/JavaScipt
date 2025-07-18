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