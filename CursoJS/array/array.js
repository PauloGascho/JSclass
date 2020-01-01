// Array (em JS) é um objeto
console.log(typeof Array, typeof new Array, typeof [])


//Array é uma estrutura dinâmica (cresce e diminui de forma dinâmica) e começa pelo indice '0'
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')

console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //método para ordernar indices do array
console.log(aprovados)

delete aprovados[1] //método para deletar elemento de uma array
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice( 1, 1) //método versatil que faz exclusão e adição de elementos
console.log(aprovados)