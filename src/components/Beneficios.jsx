import { beneficios } from '../data/beneficios.js';
import BeneficioCard from './BeneficioCard.jsx';

export default function Beneficios() {
  return (
    <section className="secao secao--alt" id="beneficios">
      <div className="container">

        <div className="secao-titulo">
          <h2>Por que comprar na DTech Solutions</h2>
          <p>Benefícios pensados para a sua tranquilidade.</p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {beneficios.map((beneficio) => (
            <div className="col" key={beneficio.id}>
              <BeneficioCard icone={beneficio.icone} titulo={beneficio.titulo} texto={beneficio.texto} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
