// JS Function is First-class Object (Citizens)
// Higher-order function

// criando de forma literal
function fun1(){ }

// armazenando em variável
const fun2 = function (){ }

// armazenando em um array
const array = [function (a, b) {return a + b}, fun1, fun2]

console.log(array[0](2,3))


// armazenando em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passando função como param
function run (fun) {
    fun()
}

run(function () {console.log('Executando...')})

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) //chamando função com parametro da função (acima) aninhada

// atribuindo função em variável e chamando com parâmetro da função aninhada diretamente
const cincoMais = soma(2, 3)
cincoMais(4)