// Implementando o map de forma manual (map2)

Array.prototype.map2 = function(callback) {
    const newArray = [] // O map cria um novo array
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [

    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'

]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) // função que converte o JSON para objeto (armazenado em variável)
const apenasPreco = produto => produto.preco // função que recebe um produto e armazena apenas o atributo preço

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)