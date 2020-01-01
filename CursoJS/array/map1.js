const nums = [1, 2, 3, 4, 5]

// map = For com propósito! (além de efetuar loopings, pode executar funções)
let resultado = nums.map(function(e) {
    return e * 2
})
// Imprimindo resultado
console.log(resultado)


// atribuindo funções de formatações em variáveis
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // atribuindo todas as formatações na array

console.log(resultado)