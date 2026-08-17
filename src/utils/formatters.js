export function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}
export function calcularDesconto(produto) {
  const {
    preco,
    precoPromocional
  } = produto;
  if (!precoPromocional || precoPromocional >= preco || preco <= 0) {
    return 0;
  }
  return Math.round((1 - precoPromocional / preco) * 100);
}
export function precoFinal(produto) {
  if (produto.promocao && produto.precoPromocional && produto.precoPromocional < produto.preco) {
    return produto.precoPromocional;
  }
  return produto.preco;
}
