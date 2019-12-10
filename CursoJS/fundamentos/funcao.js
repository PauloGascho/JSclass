// Função sem retorno
function printSome(a, b) {
    console.log(a + b)
}

printSome(2, 3)

//flexibilidades da função
printSome(2)
printSome(2, 3, 4, 6)
printSome()


// Função com retorno
function some(a, b = 0){
    return a + b
}

console.log(some(2, 3))
//flexibilidade da função
console.log(some(2))