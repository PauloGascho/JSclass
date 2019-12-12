function getInteiroaleatoryEntre(min, max) {
    const v1 = Math.random() * (max - min) + min
    return Math.floor(v1)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroaleatoryEntre(-1, 10)
    console.log(`The choice option is ${opcao}.`)
}

console.log('To the next time!')