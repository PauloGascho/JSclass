//OBJETO em JS é um conjunto de pares (chave e valor)
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
// { nome: 'Celular Ultra Mega' }
// chave: nome; valor:

//atribuindo valor dinamicamente
prod1.preco = 4980.90

prod1["Desconto legal"] = 0.40 //evitar atributos com espaço

console.log(prod1)

//Criando objeto
const prod2 = {
    nome: 'Camisa Polo',
    preco: 19.50,
}

//é possível aninhar objetos
const obj1 = {
    atributo: 'um atributo',
    obj2: {
        atributo: 'outro atributo',
    }
}

//é possível gerar um json a partir de um objeto