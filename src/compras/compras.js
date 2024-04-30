console.log("Flávoia");

const {
  buscaPrecoFerramenta,
  verificarVetorVazio,
} = require("../funcoes/vetores");

function calcularTotal(vetorFerramentas, vetorComprar) {
  let valorTotal = 0;
  let quantidadeItensTem = 0;
  let listaFerramentasQueVaiComprar = "";

  if (verificarVetorVazio(vetorComprar))
    throw new Error("Ambas as listas precisam ter ao menos um item.");
  else if (verificarVetorVazio(vetorFerramentas))
    throw new Error("Ambas as listas precisam ter ao menos um item.");

  for (let indice = 0; indice <= vetorComprar.length; indice++) {
    let preco = buscaPrecoFerramenta(vetorFerramentas, vetorComprar[indice]);
    //console.log(`O preço do item ${vetorComprar[indice]} é ${preco} reais.`);
    if (preco != "Nenhuma ferramenta desejada encontrada.") {
      quantidadeItensTem++;
      valorTotal = valorTotal + preco;
      if (quantidadeItensTem === 1)
        listaFerramentasQueVaiComprar = `${vetorComprar[indice]}`;
      else
        listaFerramentasQueVaiComprar = `${listaFerramentasQueVaiComprar}, ${vetorComprar[indice]}`;
    }
  }
  if (quantidadeItensTem > 0)
    return `O valor a pagar pelas ferramentas (${listaFerramentasQueVaiComprar}) é R$ ${valorTotal.toFixed(
      2
    )}`;
  else throw new Error("Nenhuma ferramenta desejada encontrada.");
}
module.exports = {
  calcularTotal,
};
