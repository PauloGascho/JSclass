function teste1(num){
    if(num > 7)
        console.log(num)
    // Não é baseado a identação. Fará ambas as sentenças do bloco    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {  // ; finalizando sentença de código vazia! Cuidado! Não usar ; em estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)