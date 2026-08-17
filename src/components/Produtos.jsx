import { useState } from 'react';
import { produtos } from '../data/produtos.js';
import ProductCarousel from './ProductCarousel.jsx';
import ModalEspecificacoes from './ModalEspecificacoes.jsx';

export default function Produtos({ onComprar }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const produtosDestaque = produtos.filter((produto) => produto.destaque);

  return (
    <section className="secao secao--alt" id="produtos">
      <div className="container">

        <div className="secao-titulo">
          <h2>Produtos em destaque</h2>
          <p>Seleção com os itens mais desejados da semana.</p>
        </div>

        <ProductCarousel
          produtos={produtosDestaque}
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
