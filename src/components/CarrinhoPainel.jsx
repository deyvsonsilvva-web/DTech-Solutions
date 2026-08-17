import { formatarPreco } from '../utils/formatters.js';

export default function CarrinhoPainel({ aberto, itens, onFechar, onAumentar, onDiminuir, onRemover }) {
  const total = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

  return (
    <>
      <div
        className={`offcanvas offcanvas-end carrinho-painel ${aberto ? 'show' : ''}`}
        tabIndex={-1}
      >
        <div className="offcanvas-header carrinho-painel__topo">
          <h3 className="offcanvas-title mb-0">Seu carrinho</h3>
          <button type="button" className="btn-close" aria-label="Fechar carrinho" onClick={onFechar} />
        </div>

        <div className="offcanvas-body d-flex flex-column p-0">
          <div className="carrinho-painel__lista">
            {itens.length === 0 ? (
              <p className="carrinho-painel__vazio">Seu carrinho está vazio.</p>
            ) : (
              itens.map((item) => (
                <div className="carrinho-item" key={item.id}>
                  <div className="carrinho-item__info">
                    <p className="carrinho-item__nome">{item.nome}</p>
                    <p className="carrinho-item__preco">{formatarPreco(item.preco)}</p>
                    <div className="carrinho-item__qtd">
                      <button type="button" aria-label="Diminuir quantidade" onClick={() => onDiminuir(item.id)}>−</button>
                      <span>{item.quantidade}</span>
                      <button type="button" aria-label="Aumentar quantidade" onClick={() => onAumentar(item.id)}>+</button>
                    </div>
                  </div>
                  <span
                    className="carrinho-item__remover"
                    role="button"
                    tabIndex={0}
                    aria-label="Remover item"
                    onClick={() => onRemover(item.id)}
                  >
                    🗑️
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="carrinho-painel__rodape mt-auto">
            <div className="carrinho-painel__total">
              <span>Total</span>
              <strong>{formatarPreco(total)}</strong>
            </div>
            <button className="btn btn-primary w-100 carrinho-painel__finalizar" type="button">
              Finalizar compra
            </button>
          </div>
        </div>
      </div>

      {aberto && <div className="offcanvas-backdrop fade show" onClick={onFechar} />}
    </>
  );
}
