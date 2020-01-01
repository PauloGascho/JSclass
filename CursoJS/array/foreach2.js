// Implementando um forEach manual através de uma função com laço for
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) { // Sem método implementado forEach2, erro aponta que não reconhece
    console.log(`${indice +1}) ${nome}`)
})