console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // this não aponta para exports dentro de uma função
    console.log(this === module.exports)
    console.log(this === global) // this aponta para global dentro de uma função
}

logThis()