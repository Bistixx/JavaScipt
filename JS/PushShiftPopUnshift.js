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