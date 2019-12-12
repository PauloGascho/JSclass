function whatever (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let option = -1
// declarando variável com o valor resultante do while (-1) com execução normal do bloco
do {
    option = whatever(-1, 10)
    console.log (`The choice option is ${option}`)
} while (option != -1)

console.log('To the next time!')