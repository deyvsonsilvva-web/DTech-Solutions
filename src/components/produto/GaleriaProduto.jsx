import { useEffect, useState } from 'react';

export default function GaleriaProduto({ imagens, nome, indisponivel }) {
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const [lightboxAberto, setLightboxAberto] = useState(false);
  const [imagemComErro, setImagemComErro] = useState({});

  const temMultiplasImagens = imagens.length > 1;
  const imagemAtual = imagens[indiceAtivo];

  function marcarErro(indice) {
    setImagemComErro((atual) => ({ ...atual, [indice]: true }));
  }

  function irPara(indice) {
    setIndiceAtivo((indice + imagens.length) % imagens.length);
  }

  return (
    <div className="galeria-produto">
      <button
        type="button"
        className="galeria-produto__principal"
        onClick={() => setLightboxAberto(true)}
        aria-label={`Ampliar imagem ${indiceAtivo + 1} de ${nome}`}
      >
        {imagemComErro[indiceAtivo] || !imagemAtual ? (
          <span className="galeria-produto__placeholder" aria-hidden="true">🖼️</span>
        ) : (
          <img
            src={`/${imagemAtual}`}
            alt={`${nome} — imagem ${indiceAtivo + 1} de ${imagens.length}`}
            onError={() => marcarErro(indiceAtivo)}
          />
        )}
        {indisponivel && <span className="galeria-produto__selo-indisponivel">Indisponível</span>}
        <span className="galeria-produto__lupa" aria-hidden="true">🔍</span>
      </button>

      {temMultiplasImagens && (
        <div className="galeria-produto__thumbs">
          {imagens.map((imagem, indice) => (
            <button
              key={imagem + indice}
              type="button"
              className={`galeria-produto__thumb ${indice === indiceAtivo ? 'galeria-produto__thumb--ativo' : ''}`}
              onClick={() => setIndiceAtivo(indice)}
              aria-label={`Ver imagem ${indice + 1} de ${nome}`}
              aria-current={indice === indiceAtivo}
            >
              {imagemComErro[indice] ? (
                <span aria-hidden="true">🖼️</span>
              ) : (
                <img src={`/${imagem}`} alt="" onError={() => marcarErro(indice)} loading="lazy" />
              )}
            </button>
          ))}
        </div>
      )}

      {lightboxAberto && (
        <Lightbox
          imagens={imagens}
          nome={nome}
          indiceAtivo={indiceAtivo}
          imagemComErro={imagemComErro}
          onErro={marcarErro}
          onIrPara={irPara}
          onFechar={() => setLightboxAberto(false)}
        />
      )}
    </div>
  );
}

function Lightbox({ imagens, nome, indiceAtivo, imagemComErro, onErro, onIrPara, onFechar }) {
  const temMultiplasImagens = imagens.length > 1;
  const imagemAtual = imagens[indiceAtivo];

  useEffect(() => {
    function aoTeclar(evento) {
      if (evento.key === 'Escape') onFechar();
      if (evento.key === 'ArrowRight' && temMultiplasImagens) onIrPara(indiceAtivo + 1);
      if (evento.key === 'ArrowLeft' && temMultiplasImagens) onIrPara(indiceAtivo - 1);
    }
    document.addEventListener('keydown', aoTeclar);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', aoTeclar);
      document.body.style.overflow = '';
    };
  }, [indiceAtivo, onFechar, onIrPara, temMultiplasImagens]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Imagem ampliada de ${nome}`}
      onClick={onFechar}
    >
      <button type="button" className="lightbox__fechar" onClick={onFechar} aria-label="Fechar visualização ampliada">
        ✕
      </button>

      {temMultiplasImagens && (
        <button
          type="button"
          className="lightbox__seta lightbox__seta--esquerda"
          aria-label="Imagem anterior"
          onClick={(evento) => {
            evento.stopPropagation();
            onIrPara(indiceAtivo - 1);
          }}
        >
          ‹
        </button>
      )}

      <div className="lightbox__conteudo" onClick={(evento) => evento.stopPropagation()}>
        {imagemComErro[indiceAtivo] || !imagemAtual ? (
          <span className="galeria-produto__placeholder" aria-hidden="true">🖼️</span>
        ) : (
          <img src={`/${imagemAtual}`} alt={`${nome} — imagem ${indiceAtivo + 1} de ${imagens.length}`} onError={() => onErro(indiceAtivo)} />
        )}
      </div>

      {temMultiplasImagens && (
        <button
          type="button"
          className="lightbox__seta lightbox__seta--direita"
          aria-label="Próxima imagem"
          onClick={(evento) => {
            evento.stopPropagation();
            onIrPara(indiceAtivo + 1);
          }}
        >
          ›
        </button>
      )}

      {temMultiplasImagens && (
        <p className="lightbox__contador">{indiceAtivo + 1} / {imagens.length}</p>
      )}
    </div>
  );
}
