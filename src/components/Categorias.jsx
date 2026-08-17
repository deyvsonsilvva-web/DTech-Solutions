import { categorias } from '../data/categorias.js';
import CategoriaCard from './CategoriaCard.jsx';

export default function Categorias({ categoriaSelecionada, onSelecionarCategoria }) {
  return (
    <section className="secao" id="categorias">
      <div className="container">

        <div className="secao-titulo">
          <h2>Compre por categoria</h2>
          <p>Tudo o que você precisa, organizado para facilitar sua busca.</p>
        </div>

        <div className="row row-cols-2 row-cols-md-4 g-3">
          {categorias.map((categoria) => (
            <div className="col" key={categoria.id}>
              <CategoriaCard
                icone={categoria.icone}
                nome={categoria.nome}
                ativo={categoriaSelecionada === categoria.id}
                onSelecionar={() => onSelecionarCategoria(categoria.id)}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
