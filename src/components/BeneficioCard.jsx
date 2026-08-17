export default function BeneficioCard({ icone, titulo, texto }) {
  return (
    <div className="card beneficio-card h-100" tabIndex={0}>
      <div className="card-body d-flex align-items-center gap-3">
        <span className="beneficio-card__icone">{icone}</span>
        <div>
          <p className="beneficio-card__titulo mb-1">{titulo}</p>
          <p className="beneficio-card__texto mb-0">{texto}</p>
        </div>
      </div>
    </div>
  );
}
