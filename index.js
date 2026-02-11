const pessoa = {}
console.log(pessoa) // undefined

pessoa.nome = 'João'
console.log(pessoa) // { nome: 'João' }

const carro = {
    marca: 'Ford',
    modelo: 'Ka',
    ano: 2020
}
console.log(carro) // { marca: 'Ford', modelo: 'Ka', ano: 2020 }

carro.ano = 2021
console.log(carro) // { marca: 'Ford', modelo: 'Ka', ano: 2021 }

delete carro.modelo
console.log(carro) // { marca: 'Ford', ano: 2021 }