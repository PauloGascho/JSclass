// novo recruso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa

console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)
console.log(n)
console.log(i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//garantir que o dade esteja setado para não ocorrer erro
const { conta: { ag, num } } = pessoa
console.log(ag, num)