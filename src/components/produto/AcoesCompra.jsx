import { useEffect, useRef, useState } from 'react';
import { formatarPreco, calcularDesconto, precoFinal } from '../../utils/formatters.js';
import { beneficios } from '../../data/beneficios.js';

export default function AcoesCompra({ produto, onComprar }) {
  const [quantidade, setQuantidade] = useState(1);
  const [confirmacao, setConfirmacao] = useState(false);
  const timeoutConfirmacao = useRef(null);

  const emPromocao = produto.promocao && produto.precoPromocional;
  const desconto = emPromocao ? calcularDesconto(produto) : 0;

  useEffect(() => () => window.clearTimeout(timeoutConfirmacao.current), []);

  function alterarQuantidade(delta) {
    setQuantidade((atual) => Math.min(99, Math.max(1, atual + delta)));
  }

  function comprar() {
    onComprar({ ...produto, preco: precoFinal(produto) }, quantidade);
    setConfirmacao(true);
    window.clearTimeout(timeoutConfirmacao.current);
    timeoutConfirmacao.current = window.setTimeout(() => setConfirmacao(false), 2200);
  }

  return (
    <div className="acoes-compra">

      {produto.variacoes?.cores && (
        <div className="acoes-compra__variacao">
          <span className="acoes-compra__variacao-label">Cor:</span>
          <div className="acoes-compra__opcoes">
            {produto.variacoes.cores.map((cor) => (
              <button key={cor} type="button" className="acoes-compra__opcao">{cor}</button>
            ))}
          </div>
        </div>
      )}
      {produto.variacoes?.armazenamento && (
        <div className="acoes-compra__variacao">
          <span className="acoes-compra__variacao-label">Armazenamento:</span>
          <div className="acoes-compra__opcoes">
            {produto.variacoes.armazenamento.map((opcao) => (
              <button key={opcao} type="button" className="acoes-compra__opcao">{opcao}</button>
            ))}
          </div>
        </div>
      )}

      <div className="acoes-compra__preco">
        {emPromocao ? (
          <>
            <span className="acoes-compra__preco-riscado">De: {formatarPreco(produto.preco)}</span>
            <p className="acoes-compra__preco-atual">
              {formatarPreco(produto.precoPromocional)}
              {desconto > 0 && <span className="acoes-compra__selo-desconto">{desconto}% OFF</span>}
            </p>
          </>
        ) : (
          <p className="acoes-compra__preco-atual">{formatarPreco(produto.preco)}</p>
        )}
        <p className="acoes-compra__parcelas">
          ou 10x de {formatarPreco(precoFinal(produto) / 10)} sem juros
        </p>
      </div>

      <p className={`acoes-compra__estoque ${produto.disponivel ? 'acoes-compra__estoque--ok' : 'acoes-compra__estoque--indisponivel'}`}>
        {produto.disponivel ? '✓ Em estoque' : 'Produto indisponível no momento'}
      </p>

      <div className="acoes-compra__quantidade">
        <span id="rotulo-quantidade">Quantidade</span>
        <div className="acoes-compra__stepper" role="group" aria-labelledby="rotulo-quantidade">
          <button type="button" onClick={() => alterarQuantidade(-1)} disabled={quantidade <= 1} aria-label="Diminuir quantidade">−</button>
          <span aria-live="polite">{quantidade}</span>
          <button type="button" onClick={() => alterarQuantidade(1)} disabled={!produto.disponivel} aria-label="Aumentar quantidade">+</button>
        </div>
      </div>

      <div className="acoes-compra__ctas">
        <button
          type="button"
          className="btn btn-primary acoes-compra__btn-principal"
          onClick={comprar}
          disabled={!produto.disponivel}
        >
          Comprar agora
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary acoes-compra__btn-secundario"
          onClick={comprar}
          disabled={!produto.disponivel}
        >
          Adicionar ao carrinho
        </button>
        <p className={`acoes-compra__confirmacao ${confirmacao ? 'acoes-compra__confirmacao--visivel' : ''}`} role="status">
          ✓ Adicionado ao carrinho
        </p>
      </div>

      <ul className="acoes-compra__confianca">
        {beneficios.map((beneficio) => (
          <li key={beneficio.id}>
            <span aria-hidden="true">{beneficio.icone}</span> {beneficio.titulo}
          </li>
        ))}
      </ul>
    </div>
  );
}
