import { formatarPreco, calcularDesconto } from '../utils/formatters.js';
import { obterSlugProduto } from '../data/produtos.js';
import { Link } from '../router/router.jsx';
import ProdutoImagem from './ProdutoImagem.jsx';

export default function PromotionCard({ produto, onComprar, onAbrirDetalhes }) {
  const desconto = calcularDesconto(produto);
  const urlProduto = `/produto/${obterSlugProduto(produto)}`;

  return (
    <article className="card produto-card promocao-card h-100">
      <Link to={urlProduto} className="produto-card__imagem" aria-label={`Ver detalhes de ${produto.nome}`}>
        <ProdutoImagem imagem={produto.imagem} emoji={produto.emoji} nome={produto.nome} />
        <span className="promocao-card__selo">{desconto}% OFF</span>
        {!produto.disponivel && <span className="produto-card__selo-indisponivel">Indisponível</span>}
      </Link>

      <div className="card-body produto-card__corpo">
        <span className="produto-card__categoria">{produto.categoria}</span>
        <h3 className="card-title produto-card__nome">
          <Link to={urlProduto} className="produto-card__nome-link">{produto.nome}</Link>
        </h3>
        <p className="card-text produto-card__descricao">{produto.descricao}</p>

        <div className="promocao-card__precos">
          <span className="promocao-card__preco-original">{formatarPreco(produto.preco)}</span>
          <span className="promocao-card__preco-promocional">{formatarPreco(produto.precoPromocional)}</span>
        </div>

        <div className="produto-card__acoes">
          <button
            className="btn btn-primary btn-sm btn-sm--comprar"
            type="button"
            onClick={() => onComprar({ ...produto, preco: produto.precoPromocional })}
            disabled={!produto.disponivel}
          >
            {produto.disponivel ? 'Comprar' : 'Indisponível'}
          </button>
          <button
            className="btn btn-outline-secondary btn-sm btn-sm--detalhes"
            type="button"
            onClick={() => onAbrirDetalhes(produto)}
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </article>
  );
}
