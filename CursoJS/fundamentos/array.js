const valores = [7.7, 8.9, 6.5, 0.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //retorna comprimento da array

valores.push({id: 3}, false, null, 'teste') //adiciona novos elementos no array
console.log(valores)

console.log(valores.pop()) //retira ultimo elemento do array

delete valores[0] //deleta um valor de um determinado elemento
console.log(valores)

console.log(typeof valores)