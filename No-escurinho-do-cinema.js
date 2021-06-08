function solucao(obj) {
    var acesso = false
if (obj.temIngresso && obj.idade >= obj.censura || obj.estaComPais) {
  acesso++
}

if (acesso >= 1 && obj.temCarteirinha || obj.idade < 18) {
  acesso++
}
    
if(obj.temIngresso === false) {
    console.log("ACESSO NEGADO")
} else if (obj.idade < obj.censura && obj.estaComPais === false) {
  console.log("ACESSO NEGADO")
}
 else if (acesso == 0) {
  console.log("ACESSO NEGADO")
} else if (acesso == 1) {
  console.log("INTEIRA")
} else if (acesso == 2) {
  console.log("MEIA")
}


}