function compras(trab1, trab2){
    const compSorv = trab1 || trab2
    const compTV50 = trab1 && trab2
    // const compTV50 = !!(trab1 ^ trab2) // bitwise xor
    const compTV32 = trab1 != trab2
    const mantSaud = !compSorv //operador unário

//JS só suporta um return, mas é possível retornar tudo em um objeto
    /*
    return { compSorv: compSorv, compTV50: compTV50, compTV32:compTV32, mantSaud: mantSaud } 
}
    */
//Simplificando o obj (recurso novo do ES)
    return { compSorv, compTV50, compTV32, mantSaud } //JS só suporta um return, mas é possível retornar tudo em um objeto
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))