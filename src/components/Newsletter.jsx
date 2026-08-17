import { useState } from 'react';
import { validarEmail } from '../utils/validadores.js';

const CHAVE_STORAGE = 'techstore-newsletter';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState({ texto: '', tipo: '' });

  function aoDigitar(evento) {
    setEmail(evento.target.value);
    if (feedback.texto) setFeedback({ texto: '', tipo: '' });
  }

  function aoEnviar(evento) {
    evento.preventDefault();
    const emailLimpo = email.trim();

    if (!validarEmail(emailLimpo)) {
      setFeedback({ texto: 'Digite um e-mail válido, por exemplo: nome@email.com', tipo: 'erro' });
      return;
    }

    const emailsCadastrados = JSON.parse(localStorage.getItem(CHAVE_STORAGE) || '[]');

    if (emailsCadastrados.includes(emailLimpo)) {
      setFeedback({ texto: 'Esse e-mail já está cadastrado na nossa newsletter.', tipo: 'aviso' });
      return;
    }

    emailsCadastrados.push(emailLimpo);
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(emailsCadastrados));

    setFeedback({ texto: 'Cadastro realizado com sucesso! Fique de olho no seu e-mail.', tipo: 'sucesso' });
    setEmail('');
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__caixa">

          <div className="newsletter__texto">
            <h2>Fique por dentro das novidades</h2>
            <p>Cadastre-se e receba ofertas exclusivas, lançamentos e cupons de desconto em primeira mão.</p>
          </div>

          <form className="newsletter__form" onSubmit={aoEnviar} noValidate>
            <label htmlFor="email-newsletter" className="visually-hidden">
              Seu melhor e-mail
            </label>
            <input
              type="email"
              id="email-newsletter"
              className={`form-control newsletter__input ${feedback.tipo === 'erro' ? 'is-invalid newsletter__input--erro' : ''}`}
              placeholder="Digite seu melhor e-mail"
              value={email}
              onChange={aoDigitar}
            />
            <button className="btn btn-cadastrar" type="submit">Cadastrar</button>

            {feedback.texto && (
              <span className={`newsletter__mensagem newsletter__mensagem--${feedback.tipo}`}>
                {feedback.texto}
              </span>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
