console.log(soma(3, 4)) //esta função (soma) pode ser chama antes da definição

// function declaration
function soma (x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // esta função deve ser chamada após definição

//named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4)) // esta função também deve ser chamada somente após definição