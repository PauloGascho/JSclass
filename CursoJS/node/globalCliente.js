require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // Não vai mudar pois objeto esta congelado ( Object.freeze() )
console.log(MinhaApp.nome)