export const categorias = [
  { id: 'notebooks', icone: '💻', nome: 'Notebooks', filtro: ['Notebook'] },
  { id: 'pcs-gamer', icone: '🎮', nome: 'PCs Gamer', filtro: ['PC Gamer'] },
  { id: 'desktops', icone: '🖥️', nome: 'Desktops', filtro: ['Desktop'] },
  { id: 'teclados', icone: '⌨️', nome: 'Teclados', filtro: ['Teclado'] },
  { id: 'mouses', icone: '🖱️', nome: 'Mouses', filtro: ['Mouse'] },
  { id: 'headsets', icone: '🎧', nome: 'Headsets', filtro: ['Áudio'] },
  { id: 'monitores', icone: '🖥️', nome: 'Monitores', filtro: ['Monitores'] },
  { id: 'ssd', icone: '💾', nome: 'SSD', filtro: ['Armazenamento'] },
  { id: 'memorias', icone: '💾', nome: 'Memórias RAM', filtro: ['Memória RAM'] },
  { id: 'perifericos', icone: '🔌', nome: 'Periféricos', filtro: ['Periféricos'] },
];

export function produtosDaCategoria(produtos, categoriaId) {
  const categoria = categorias.find((item) => item.id === categoriaId);
  if (!categoria) return [];
  return produtos.filter((produto) => categoria.filtro.includes(produto.categoria));
}

export function categoriaDoProduto(produto) {
  return categorias.find((categoria) => categoria.filtro.includes(produto.categoria)) || null;
}
