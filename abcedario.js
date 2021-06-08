function solucao(letra, palavras) {
	var erro =0
for(let i = 0; i < palavras.length; i++) {
  if(palavras[i].substr(0,1) != letra) {
    erro++
  }
}
console.log(erro)
    
}