const buscaPrecoFerramenta = (vetorFerramentas, itemDesejaComprar) => {
  const quantidadeItens = vetorFerramentas.length;

  for (let indice = 0; indice < quantidadeItens; indice++) {
    if (vetorFerramentas[indice].nome == itemDesejaComprar)
      return vetorFerramentas[indice].preco;
  }
  return "Nenhuma ferramenta desejada encontrada.";
}; 

const verificarVetorVazio = (vetor) => {
  let estaVazio = true;
  if (vetor.length == null || vetor == undefined) estaVazio = true;
  else if (vetor.length > 0) estaVazio = false;
  return estaVazio;
};

module.exports = {
  buscaPrecoFerramenta,
  verificarVetorVazio,
};
