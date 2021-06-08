function solucao(joao, andre) {
    const pedra = "PEDRA"
    const papel = "PAPEL"
    const tesoura = "TESOURA"
    if (joao == pedra && andre == pedra) {
      console.log("EMPATE")
    } else if (joao == pedra && andre == papel) {
      console.log("ANDRE")
    } else if (joao == pedra && andre == tesoura) {
      console.log("JOAO")
    } else if (joao == papel && andre == papel) {
      console.log("EMPATE")
    }  else if (joao == papel && andre == pedra) {
      console.log("JOAO")
    } else if (joao == papel && andre == tesoura) {
      console.log("ANDRE")
    } else if (joao == tesoura && andre == papel) {
      console.log("JOAO")
    } else if (joao == tesoura && andre == pedra) {
      console.log("ANDRE")
    } else if (joao == tesoura && andre == tesoura) {
      console.log("EMPATE")
    }
    }