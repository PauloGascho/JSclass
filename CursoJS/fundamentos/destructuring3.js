function rand({min=0, max=1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} //função que recebe dois valores e retorna um numero randômico entre eles

const obj = { max: 50, min: 40 }
console.log(rand(obj)) //passando os valores de obj como parâmetro da função rand()
console.log(rand({ min: 955 })) //passando apenas o valor no parâmetro min da função rand() e por padrão max=1000
console.log(rand({})) //passando objeto vazio para o rand() e instanciando parâmentros padrões da função
console.log(rand())