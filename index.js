const frutas = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi'];

// Imprime o array original
console.log('Array original:', frutas);

frutas.push('banana'); // Adiciona 'banana' ao final do array
console.log("frutas")

frutas.push('maçã'); // Adiciona 'maçã' ao final do array
console.log("frutas")

const index = frutas.indexOf('banana'); // Encontra o índice da primeira ocorrência de 'banana'
console.log("index")

frutas.pop (); // Remove o último elemento do array
console.log("frutas")

frutas.shift(); // Remove o primeiro elemento do array
console.log("frutas")

frutas.splice(2, 1); // Remove o elemento na posição 2 (laranja)
console.log("frutas")