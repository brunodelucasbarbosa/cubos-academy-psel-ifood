function solucao(precos) {
    var menor = precos[0]
var total = 0
if (precos.length >= 5) {
  for (let i = 0; i < precos.length; i++) {
    if(precos[i] < menor){
    menor = precos[i]
    }
    total +=precos[i]
  }
  total = total - menor

  console.log(total)
} else {
  for (let i = 0; i < precos.length; i++) {
    total +=precos[i]
  }
  console.log(total)
}