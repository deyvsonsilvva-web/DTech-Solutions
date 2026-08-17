import { useRef } from 'react';
import ProdutoCard from './ProdutoCard.jsx';

export default function ProductCarousel({ produtos, onComprar, onAbrirDetalhes }) {
  const trilhaRef = useRef(null);

  function rolar(direcao) {
    const trilha = trilhaRef.current;
    if (!trilha) return;

    const primeiroItem = trilha.querySelector('.carrossel__item');
    const distancia = primeiroItem
      ? primeiroItem.getBoundingClientRect().width + 20
      : trilha.clientWidth * 0.85;

    trilha.scrollBy({ left: direcao * distancia, behavior: 'smooth' });
  }

  if (!produtos.length) {
    return <p className="carrossel__vazio">Nenhum produto em destaque no momento.</p>;
  }

  return (
    <div className="carrossel">
      <button
        type="button"
        className="carrossel__seta carrossel__seta--esquerda"
        aria-label="Ver produtos anteriores"
        onClick={() => rolar(-1)}
      >
        ‹
      </button>

      <div className="carrossel__trilha" ref={trilhaRef} role="list">
        {produtos.map((produto) => (
          <div className="carrossel__item" role="listitem" key={produto.id}>
            <ProdutoCard produto={produto} onComprar={onComprar} onAbrirDetalhes={onAbrirDetalhes} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carrossel__seta carrossel__seta--direita"
        aria-label="Ver mais produtos"
        onClick={() => rolar(1)}
      >
        ›
      </button>
    </div>
  );
}
