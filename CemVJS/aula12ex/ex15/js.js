
Júnior Gomes
6 months ago
SCRIPT AQUI


ATENÇÃO, FAÇA O SEU, USE ESSE APENAS EM CASO DE EMERGÊNCIA PARA TIRAR DÚVIDAS, DIGITE O SEU (há divergências de ids com o da aula)


function verificar() {
 var data = new Date()
 var ano = data.getFullYear()
 var anoN = document.getElementById('txtano')
 var anoNasc = anoN.value
 var res = document.querySelector('div#res')
 if (anoNasc <= 1904 || anoNasc > ano) {
  res.innerHTML = "Dados incorretos, revise-os!"
  alert('Dados incorretos, revise-os!')
 } else {
  var sexo = document.getElementsByName('radsexo')
  var idade = ano - anoNasc
  var genero = ""
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')
  if (sexo[0].checked) {
   genero = "Masculino"
   if (idade < 10) {
    img.setAttribute('src', 'kid-boy.png')
   } else if (idade < 20) {
    img.setAttribute('src', '_imagens/boy.png')
   } else if (idade < 60) {
    img.setAttribute('src', '_imagens/man.png')
   } else {
    img.setAttribute('src', '_imagens/old-man.png')
   }
  } else {
   genero = "feminino"
   if (idade < 10) {
    img.setAttribute('src', '_imagens/kid-girl.png')
   } else if (idade < 20) {
    img.setAttribute('src', '_imagens/girl.png')
   } else if (idade < 60) {
    img.setAttribute('src', '_imagens/woman.png')
   } else {
    img.setAttribute('src', '_imagens/old-woman.png')
   }
  }
  res.innerHTML = `A idade da pessoa foi ${idade} anos e o gênero ${genero}.`
  img.style.padding = '10px'
  res.appendChild(img)
 }
 
//nada de pegar e colar espertinho ;)
}