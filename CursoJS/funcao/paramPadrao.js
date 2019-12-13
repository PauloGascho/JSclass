// Estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1()) // retornará a soma com o valor padrão (1) para cada variável
console.log(soma1(3)) // retornará a soma com a primeira variável valendo 3 e o resto como padrão
console.log(soma1(1, 2, 3)) // retornará a soma de cada variável conforme parâmetros

// PROBLEMAS! /Pode gerar bugs
console.log(soma1(0, 0, 0)) //neste caso, por 0 ser ' false ' cada variável será o valor padrão


// Estratégia 2, 3, e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // se ' c ' não for um número retorna 1, senão
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))


// FORMA MAIS ADEQUADA! - Valor padrão do ES 2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))