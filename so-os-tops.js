function solucao(produtos) {
	var total = 0
var totaltop = 0
var percentual = 0

for (let i = 0; i < produtos.length; i++) {
  total += produtos[i].preco
    if(produtos[i].preco > 10000) {
      totaltop += produtos[i].preco
    }
}

percentual = totaltop / total
var result = {
  totalTop: totaltop,
  percentual: percentual,
}

console.log(result)
    
}