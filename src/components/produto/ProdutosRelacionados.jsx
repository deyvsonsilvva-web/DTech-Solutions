import { useState } from 'react';
import ProductCarousel from '../ProductCarousel.jsx';
import ModalEspecificacoes from '../ModalEspecificacoes.jsx';

export default function ProdutosRelacionados({ produtos, onComprar }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  if (!produtos.length) return null;

  return (
    <section className="produtos-relacionados secao secao--alt" aria-labelledby="titulo-relacionados">
      <div className="container">
        <div className="secao-titulo">
          <h2 id="titulo-relacionados">Você também pode gostar</h2>
        </div>

        <ProductCarousel
          produtos={produtos}
          onComprar={onComprar}
          onAbrirDetalhes={setProdutoSelecionado}
        />
      </div>

      <ModalEspecificacoes
        produto={produtoSelecionado}
        onFechar={() => setProdutoSelecionado(null)}
      />
    </section>
  );
}
