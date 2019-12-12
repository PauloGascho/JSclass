function compras(trab1, trab2){
    const compSorv = trab1 || trab2
    const compTV50 = trab1 && trab2
    // const compTV50 = !!(trab1 ^ trab2) // bitwise xor
    const compTV32 = trab1 != trab2
    const mantSaud = !compSorv //operador unário

    return { compSorv, compTV50, compTV32, mantSaud }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))