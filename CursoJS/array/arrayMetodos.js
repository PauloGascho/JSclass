const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa' ]
console.log(pilotos)

pilotos.pop() // remove último índice
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um último índice com novo elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro indice
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um primeiro índice com novo elemento
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Botas', 'Massa') // a partir do indice 2, adiciona novos indices com novos elementos
console.log(pilotos)

// remover
pilotos.splice(3, 1) // a partir do índice 3, remove 1 índice
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) // novo array (pulando 2 índices)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)