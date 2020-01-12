let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(++num1 === num2--) // O num2-- será executado depois da compração, retornandum uma expressão verdadeira (2=2)
console.log(num1 === num2) // Desta vez retornará falso pois o num2-- foi executado