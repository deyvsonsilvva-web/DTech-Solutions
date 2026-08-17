export default function EspecificacoesProduto({ specs }) {
  if (!specs?.length) return null;

  return (
    <section className="especificacoes-produto" aria-labelledby="titulo-especificacoes">
      <h2 id="titulo-especificacoes">Especificações técnicas</h2>
      <div className="especificacoes-produto__tabela" role="table">
        {specs.map((spec) => (
          <div className="especificacoes-produto__linha" role="row" key={spec.label}>
            <span role="cell" className="especificacoes-produto__label">{spec.label}</span>
            <span role="cell" className="especificacoes-produto__valor">{spec.valor}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
