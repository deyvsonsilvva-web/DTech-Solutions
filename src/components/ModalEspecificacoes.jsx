import { formatarPreco } from '../utils/formatters.js';

export default function ModalEspecificacoes({ produto, onFechar }) {
  if (!produto) return null;

  const emPromocao = produto.promocao && produto.precoPromocional;

  return (
    <>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modal-especificacoes__conteudo">
            <div className="modal-header">
              <div>
                <span className="modal-especificacoes__categoria">{produto.categoria}</span>
                <h3 className="modal-title modal-especificacoes__titulo">{produto.nome}</h3>
              </div>
              <button type="button" className="btn-close" aria-label="Fechar" onClick={onFechar} />
            </div>

            <div className="modal-body">
              <ul className="modal-especificacoes__lista">
                {produto.specs.map((spec) => (
                  <li key={spec.label}>
                    <strong>{spec.label}:</strong> {spec.valor}
                  </li>
                ))}
              </ul>

              {emPromocao ? (
                <p className="produto-card__preco produto-card__preco--promo mb-0">
                  <span className="produto-card__preco-riscado">{formatarPreco(produto.preco)}</span>
                  {formatarPreco(produto.precoPromocional)} <small>/ à vista</small>
                </p>
              ) : (
                <p className="produto-card__preco mb-0">
                  {formatarPreco(produto.preco)} <small>/ à vista</small>
                </p>
              )}

              {!produto.disponivel && (
                <p className="modal-especificacoes__indisponivel mb-0">
                  Produto temporariamente indisponível.
                </p>
              )}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" onClick={onFechar}>
                Fechar
              </button>
              <a href="#produtos" className="btn btn-primary" onClick={onFechar}>
                Comprar agora
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show" onClick={onFechar} />
    </>
  );
}
