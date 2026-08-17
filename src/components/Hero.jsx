export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero__conteudo">
          <span className="badge hero__eyebrow">Loja oficial DTech Solutions</span>
          <h1 className="hero__titulo">
            Tecnologia que <span>acompanha sua evolução.</span>
          </h1>
          <p className="hero__subtitulo">
            Encontre notebooks, desktops, peças e acessórios com os melhores preços.
          </p>
          <div className="hero__acoes">
            <a href="#produtos" className="btn btn-primary btn-lg btn--primario">Comprar Agora</a>
            <a href="#promocoes" className="btn btn-outline-light btn-lg btn--secundario">Ver Promoções</a>
          </div>
        </div>
      </div>
    </section>
  );
}
