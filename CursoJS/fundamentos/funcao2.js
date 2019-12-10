// Armazenando uma função em uma variável

const printSome = function (a, b) {
    console.log(a + b)
}

printSome(2, 3)

// Armazenando uma função arrow em uma variável
const some = (a, b) => {
    return a + b
}
console.log(some(2, 3))

// Retorno implicito
const subtration = (a, b) => a - b
console.log(subtration(2, 3))

const print2 = a => console.log(a)
print2 ('cool!!!')