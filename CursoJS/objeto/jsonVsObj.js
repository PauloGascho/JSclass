const obj = { a: 1, b: 3, c: 3, soma() { return a+b+c } }
console.log(JSON.stringify(obj)) //A função do objeto será ignorada pela conversão em JSON

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))   // formato inválido para leitura de JSON
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))   // formato inválido para leitura de JSON

// formatos válidos para leitura de JSON
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) 
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))