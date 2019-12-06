const nome = 'Paulo'
const concatenacao = 'Olá ' + nome + '!'

//concatenando utilizando template string e verificando que ele comporta as quebras de linha
const template = `
    Olá 
    ${nome}!`
console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)