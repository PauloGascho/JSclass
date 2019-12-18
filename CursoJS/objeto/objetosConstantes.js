// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome:'Ana'} // <- ocorre erro pois ' pessoa ' foi definido como constante

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa.nome) // ' pessoa ' continua atribuida com Pedro pois objeto foi congelado (.freeze)
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

//Criando objeto já congelado
const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)