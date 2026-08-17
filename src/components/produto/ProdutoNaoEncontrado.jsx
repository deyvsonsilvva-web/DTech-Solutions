import { Link } from '../../router/router.jsx';

export default function ProdutoNaoEncontrado() {
  return (
    <section className="produto-nao-encontrado">
      <div className="container produto-nao-encontrado__conteudo">
        <span aria-hidden="true">🔎</span>
        <h1>Produto não encontrado</h1>
        <p>O produto que você está procurando não existe ou não está mais disponível.</p>
        <div className="produto-nao-encontrado__acoes">
          <Link to="/" className="btn btn-primary">Voltar para a loja</Link>
          <Link to="/" hash="#categorias" className="btn btn-outline-secondary">Ver categorias</Link>
        </div>
      </div>
    </section>
  );
}
