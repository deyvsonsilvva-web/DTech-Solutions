import { useState } from 'react';
import { useRouter } from '../router/router.jsx';

export default function Header({
  temaEscuro,
  onAlternarTema,
  totalItensCarrinho,
  onAbrirCarrinho,
  usuarioLogado,
  onAbrirAuth,
  onSair,
}) {
  const [menuAberto, setMenuAberto] = useState(false);
  const { navigate } = useRouter();

  function irParaAncora(hash) {
    return (evento) => {
      evento.preventDefault();
      setMenuAberto(false);
      navigate('/', { hash });
    };
  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container header__inner">

          <a
            href="/#inicio"
            className="navbar-brand logo"
            aria-label="DTech Solutions - Página inicial"
            onClick={irParaAncora('#inicio')}
          >
            <img className="logo__mark" src="/imagens/Logo.jpg" alt="Logo DTech Solutions" width="38" height="38" />
            DTech Solutions
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Abrir menu de navegação"
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto((atual) => !atual)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse nav-wrapper ${menuAberto ? 'show' : ''}`}>
            <ul className="navbar-nav nav__lista mx-auto">
              <li className="nav-item"><a className="nav-link nav__link" href="/#inicio" onClick={irParaAncora('#inicio')}>Início</a></li>
              <li className="nav-item"><a className="nav-link nav__link" href="/#produtos" onClick={irParaAncora('#produtos')}>Produtos</a></li>
              <li className="nav-item"><a className="nav-link nav__link" href="/#promocoes" onClick={irParaAncora('#promocoes')}>Promoções</a></li>
              <li className="nav-item"><a className="nav-link nav__link" href="/#categorias" onClick={irParaAncora('#categorias')}>Categorias</a></li>
              <li className="nav-item"><a className="nav-link nav__link" href="/#contato" onClick={irParaAncora('#contato')}>Contato</a></li>
            </ul>

            <div className="header__acoes">
              <button
                className="btn btn-tema"
                type="button"
                aria-label="Alternar tema claro/escuro"
                onClick={onAlternarTema}
              >
                {temaEscuro ? '☀️' : '🌙'}
              </button>

              {usuarioLogado ? (
                <div className="header__usuario">
                  <span className="header__usuario-nome">Olá, {usuarioLogado.nome.split(' ')[0]}</span>
                  <button className="btn btn-outline-light btn-entrar" type="button" onClick={onSair}>
                    Sair
                  </button>
                </div>
              ) : (
                <button className="btn btn-outline-light btn-entrar" type="button" onClick={onAbrirAuth}>
                  Entrar
                </button>
              )}

              <button className="btn btn-primary btn-carrinho" type="button" onClick={onAbrirCarrinho}>
                Carrinho
                {totalItensCarrinho > 0 && (
                  <span className="badge rounded-pill carrinho-contador">{totalItensCarrinho}</span>
                )}
              </button>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}
