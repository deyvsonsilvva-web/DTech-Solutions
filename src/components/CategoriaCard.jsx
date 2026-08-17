export default function CategoriaCard({ icone, nome, ativo, onSelecionar }) {
  function aoTeclar(evento) {
    if (evento.key === 'Enter' || evento.key === ' ') {
      evento.preventDefault();
      onSelecionar();
    }
  }

  return (
    <div
      className={`card categoria-card h-100 ${ativo ? 'categoria-card--ativa' : ''}`}
      tabIndex={0}
      role="button"
      aria-pressed={ativo}
      onClick={onSelecionar}
      onKeyDown={aoTeclar}
    >
      <div className="card-body text-center">
        <span className="categoria-card__icone d-block">{icone}</span>
        <span className="categoria-card__nome">{nome}</span>
      </div>
    </div>
  );
}
