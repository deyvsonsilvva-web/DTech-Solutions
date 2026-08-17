import { Link } from '../../router/router.jsx';

export default function Breadcrumb({ produto, categoria }) {
  return (
    <nav className="breadcrumb-produto" aria-label="Trilha de navegação">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {categoria && (
          <li>
            <Link to="/" hash="#categorias">{categoria.nome}</Link>
          </li>
        )}
        <li aria-current="page">{produto.nome}</li>
      </ol>
    </nav>
  );
}
