now = new Date()
switch (now.getDay()) {
    case 0:
        var write='Domingo'
        break
    case 1:
        var write='Segunda'
        break
    case 3:
        var write='Terça'
        break
    case 4:
        var write='Quarta'
        break
    case 5:
        var write='Quinta'
        break
    case 6:
        var write='Sexta'
        break
    default:
        var write='Sábado'
        break
}

console.log(write)