import { useEffect } from 'react';
import { obterProdutoPorSlug, produtosRelacionados } from '../data/produtos.js';
import { categoriaDoProduto } from '../data/categorias.js';
import { Link } from '../router/router.jsx';
import Breadcrumb from '../components/produto/Breadcrumb.jsx';
import GaleriaProduto from '../components/produto/GaleriaProduto.jsx';
import AcoesCompra from '../components/produto/AcoesCompra.jsx';
import EspecificacoesProduto from '../components/produto/EspecificacoesProduto.jsx';
import ProdutosRelacionados from '../components/produto/ProdutosRelacionados.jsx';
import ProdutoNaoEncontrado from '../components/produto/ProdutoNaoEncontrado.jsx';

function imagensDoProduto(produto) {
  if (produto.imagens?.length) return produto.imagens;
  return produto.imagem ? [produto.imagem] : [];
}

export default function ProdutoDetalhes({ slug, onComprar }) {
  const produto = obterProdutoPorSlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    const tituloOriginal = document.title;
    document.title = produto ? `DTech Solutions | ${produto.nome}` : 'DTech Solutions | Produto não encontrado';

    const meta = document.querySelector('meta[name="description"]');
    const descricaoOriginal = meta?.getAttribute('content');
    if (meta && produto) {
      meta.setAttribute('content', produto.descricao.slice(0, 155));
    }

    return () => {
      document.title = tituloOriginal;
      if (meta && descricaoOriginal) meta.setAttribute('content', descricaoOriginal);
    };
  }, [produto, slug]);

  if (!produto) {
    return <ProdutoNaoEncontrado />;
  }

  const categoria = categoriaDoProduto(produto);
  const relacionados = produtosRelacionados(produto);

  return (
    <main className="produto-detalhes">
      <div className="container">
        <Breadcrumb produto={produto} categoria={categoria} />

        {categoria && (
          <Link to="/" hash="#categorias" className="produto-detalhes__voltar">
            ← Voltar para {categoria.nome}
          </Link>
        )}

        <div className="produto-detalhes__principal">
          <GaleriaProduto
            imagens={imagensDoProduto(produto)}
            nome={produto.nome}
            indisponivel={!produto.disponivel}
          />

          <div className="produto-detalhes__info">
            <span className="produto-detalhes__categoria">{produto.categoria}</span>
            <h1 className="produto-detalhes__nome">{produto.nome}</h1>

            {produto.avaliacao && (
              <p className="produto-detalhes__avaliacao">
                <span aria-hidden="true">{'★'.repeat(Math.round(produto.avaliacao))}</span>
                {produto.avaliacao.toFixed(1)}
                {produto.numeroAvaliacoes && <span> · {produto.numeroAvaliacoes} avaliações</span>}
              </p>
            )}

            <p className="produto-detalhes__descricao-curta">{produto.descricao}</p>

            <AcoesCompra produto={produto} onComprar={onComprar} />
          </div>
        </div>

        <section className="produto-detalhes__sobre" aria-labelledby="titulo-sobre">
          <h2 id="titulo-sobre">Sobre este produto</h2>

          {produto.descricaoCompleta ? (
            <>
              <p>{produto.descricaoCompleta.introducao}</p>

              {produto.descricaoCompleta.destaques?.length > 0 && (
                <ul>
                  {produto.descricaoCompleta.destaques.map((item, index) => (
                    <li key={index}>
                      <strong>{item.titulo}:</strong> {item.descricao}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <p>{produto.descricao}</p>
          )}
        </section>

        <EspecificacoesProduto specs={produto.specs} />
      </div>

      <ProdutosRelacionados produtos={relacionados} onComprar={onComprar} />
    </main>
  );
}
