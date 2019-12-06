const escola = "School"

console.log(escola.charAt(4)) //retorna o caractere da string na posição (4)
console.log(escola.charAt(6)) //retornará um valor vazio
console.log(escola.charCodeAt(3)) //retorna indice do item da string
console.log(escola.indexOf('3'))


console.log(escola.substring(1)) //fatiando string
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) //concatenando com .concat
console.log('Escola '+ escola + "!") //concatenando com +
console.log(escola.replace('o', 'a'))

console.log('Ana,Maria,Pedro'.split(',')) //gera uma array selecionando ',' como separador
console.log('Ana,Maria,Pedro'.split(/./)) //pesquisar sobre regex