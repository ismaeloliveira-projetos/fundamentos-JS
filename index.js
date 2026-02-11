const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    ligar: function() {
        console.log('O carro está ligado.');
    },
    desligar: function() {
        console.log('O carro está desligado.');
    }
};

console.log(carro.marca); // Output: Toyota
console.log(carro.modelo); // Output: Corolla
console.log(carro.ano); // Output: 2020

carro.ligar(); // Output: O carro está ligado.
carro.desligar(); // Output: O carro está desligado.