import { formatarPreco, precoFinal } from '../utils/formatters.js';
import { obterSlugProduto } from '../data/produtos.js';
import { Link } from '../router/router.jsx';
import ProdutoImagem from './ProdutoImagem.jsx';

export default function ProdutoCard({ produto, onComprar, onAbrirDetalhes }) {
  const emPromocao = produto.promocao && produto.precoPromocional;
  const urlProduto = `/produto/${obterSlugProduto(produto)}`;

  return (
    <article className="card produto-card h-100">
      <Link to={urlProduto} className="produto-card__imagem" aria-label={`Ver detalhes de ${produto.nome}`}>
        <ProdutoImagem imagem={produto.imagem} emoji={produto.emoji} nome={produto.nome} />
        {emPromocao && <span className="produto-card__selo-promo">Oferta</span>}
        {!produto.disponivel && <span className="produto-card__selo-indisponivel">Indisponível</span>}
      </Link>
      <div className="card-body produto-card__corpo">
        <span className="produto-card__categoria">{produto.categoria}</span>
        <h3 className="card-title produto-card__nome">
          <Link to={urlProduto} className="produto-card__nome-link">{produto.nome}</Link>
        </h3>
        <p className="card-text produto-card__descricao">{produto.descricao}</p>

        {emPromocao ? (
          <p className="produto-card__preco produto-card__preco--promo">
            <span className="produto-card__preco-riscado">{formatarPreco(produto.preco)}</span>
            {formatarPreco(produto.precoPromocional)} <small>/ à vista</small>
          </p>
        ) : (
          <p className="produto-card__preco">
            {formatarPreco(produto.preco)} <small>/ à vista</small>
          </p>
        )}

        <div className="produto-card__acoes">
          <button
            className="btn btn-primary btn-sm btn-sm--comprar"
            type="button"
            onClick={() => onComprar({ ...produto, preco: precoFinal(produto) })}
            disabled={!produto.disponivel}
          >
            {produto.disponivel ? 'Comprar' : 'Indisponível'}
          </button>
          <button
            className="btn btn-outline-secondary btn-sm btn-sm--detalhes"
            type="button"
            onClick={() => onAbrirDetalhes(produto)}
          >
            Especificações
          </button>
        </div>
      </div>
    </article>
  );
}
