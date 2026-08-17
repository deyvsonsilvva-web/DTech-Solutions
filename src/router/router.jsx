import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const RouterContext = createContext(null);

export function RouterProvider({ children }) {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    function aoMudarHistorico() {
      setPath(window.location.pathname);
    }
    window.addEventListener('popstate', aoMudarHistorico);
    return () => window.removeEventListener('popstate', aoMudarHistorico);
  }, []);

  const navigate = useCallback((destino, opcoes = {}) => {
    const { hash = '', mantendoScroll = false } = opcoes;
    const [novoPath] = destino.split('#');

    if (novoPath !== window.location.pathname) {
      window.history.pushState({}, '', hash ? `${novoPath}${hash}` : novoPath);
      setPath(novoPath);
    } else if (hash) {
      window.history.replaceState({}, '', `${novoPath}${hash}`);
    }

    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else if (!mantendoScroll) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const contexto = useContext(RouterContext);
  if (!contexto) {
    throw new Error('useRouter precisa ser usado dentro de <RouterProvider>.');
  }
  return contexto;
}

export function Link({ to, hash, mantendoScroll, children, className, ...props }) {
  const { navigate } = useRouter();

  function aoClicar(evento) {
    const abrindoEmNovaAba = evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey || evento.button !== 0;
    if (abrindoEmNovaAba) return;
    evento.preventDefault();
    navigate(to, { hash, mantendoScroll });
  }

  return (
    <a href={hash ? `${to}${hash}` : to} className={className} onClick={aoClicar} {...props}>
      {children}
    </a>
  );
}
