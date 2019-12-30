// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' //tentando adicionar um novo atributo de descrição
delete produto.tag
console.log(produto)


// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //tentando adicionar um novo atributo
delete pessoa.nome //tentando deletar um atributo
pessoa.idade = 29
console.log(pessoa)


// Object.freeze = selado + valores constantes