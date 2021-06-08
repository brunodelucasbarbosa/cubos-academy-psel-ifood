function solucao(tempo, distancia) {

	if (tempo < 5) {
  console.log("600")
} else if (tempo >= 5 && tempo <= 60) {
  var valor = (tempo / 1) + 0.5 * distancia
  console.log(valor*100)
} else if (tempo > 60) {
    if (distancia < 100) {
      var valor = distancia * 2
    } else if (distancia >= 100) {
      var valor = 1.50 * distancia
    }
    console.log(valor*100)
}
    
    

}