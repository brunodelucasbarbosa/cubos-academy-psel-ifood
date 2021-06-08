function solucao(ano) {
	var atual = ano - 1930
var atual2 = ano - 1896

if (atual % 4 == 0) {
  console.log("COPA")
} else if(atual2 % 4 == 0) {
  console.log("JOGOS")
} else if(atual % 4 != 0 && atual2 % 4 != 0) {
  console.log("MEH")
}
}