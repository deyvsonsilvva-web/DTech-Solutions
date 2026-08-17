import { useState } from 'react';
import { produtos } from '../data/produtos.js';
import PromotionCard from './PromotionCard.jsx';
import ModalEspecificacoes from './ModalEspecificacoes.jsx';

export default function Promocoes({ onComprar }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const produtosEmPromocao = produtos.filter(
    (produto) => produto.promocao && produto.precoPromocional
  );

  return (
    <section className="secao" id="promocoes">
      <div className="container">

        <div className="secao-titulo">
          <h2>Promoções imperdíveis</h2>
          <p>Ofertas por tempo limitado nos produtos mais procurados da DTech Solutions.</p>
        </div>

        {produtosEmPromocao.length === 0 ? (
          <p className="text-center">Nenhuma promoção ativa no momento. Volte em breve!</p>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {produtosEmPromocao.map((produto) => (
              <div className="col" key={produto.id}>
                <PromotionCard
                  produto={produto}
                  onComprar={onComprar}
                  onAbrirDetalhes={setProdutoSelecionado}
                />
              </div>
            ))}
          </div>
        )}

      </div>

      <ModalEspecificacoes
        produto={produtoSelecionado}
        onFechar={() => setProdutoSelecionado(null)}
      />
    </section>
  );
}
