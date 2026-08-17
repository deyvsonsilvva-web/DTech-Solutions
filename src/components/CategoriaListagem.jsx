import { useEffect, useRef, useState } from 'react';
import { categorias, produtosDaCategoria } from '../data/categorias.js';
import { produtos } from '../data/produtos.js';
import ProdutoCard from './ProdutoCard.jsx';
import ModalEspecificacoes from './ModalEspecificacoes.jsx';

export default function CategoriaListagem({ categoriaId, onComprar, onFechar }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const secaoRef = useRef(null);

  const categoria = categorias.find((item) => item.id === categoriaId);
  const produtosFiltrados = produtosDaCategoria(produtos, categoriaId);

  useEffect(() => {
    secaoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [categoriaId]);

  if (!categoria) return null;

  return (
    <section className="secao secao--alt categoria-listagem" id="categoria-listagem" ref={secaoRef}>
      <div className="container">

        <div className="categoria-listagem__topo">
          <div className="secao-titulo categoria-listagem__titulo">
            <h2>{categoria.icone} {categoria.nome}</h2>
            <p>{produtosFiltrados.length} produto{produtosFiltrados.length === 1 ? '' : 's'} nesta categoria.</p>
          </div>
          <button type="button" className="btn btn-outline-secondary categoria-listagem__fechar" onClick={onFechar}>
            Fechar categoria
          </button>
        </div>

        {produtosFiltrados.length === 0 ? (
          <p className="text-center">Nenhum produto disponível nesta categoria no momento.</p>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {produtosFiltrados.map((produto) => (
              <div className="col" key={produto.id}>
                <ProdutoCard
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
