const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)

// Cuidado!! JS é linguagem fracamente tipada! Está passando dados de string em contexto incorreto!
imprimirResultado('Epa!')