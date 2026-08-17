import { useState } from 'react';

export default function ProdutoImagem({ imagem, emoji, nome }) {
  const [falhouCarregar, setFalhouCarregar] = useState(false);

  if (falhouCarregar || !imagem) {
    return <span aria-hidden="true">{emoji}</span>;
  }

  return (
    <img
      src={`/${imagem}`}
      alt={nome}
      loading="lazy"
      width="400"
      height="180"
      onError={() => setFalhouCarregar(true)}
    />
  );
}
