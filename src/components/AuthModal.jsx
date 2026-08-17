import { useEffect, useState } from 'react';
import { avaliarSenha, normalizarEmail, validarEmail } from '../utils/validadores.js';

const CHAVE_USUARIOS = 'techstore-usuarios';

function lerUsuarios() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_USUARIOS) || '[]');
  } catch (erro) {
    console.error('Não foi possível ler os usuários salvos:', erro);
    return [];
  }
}

function salvarUsuarios(usuarios) {
  localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios));
}

const REQUISITOS_SENHA = [
  { chave: 'tamanho', texto: 'Pelo menos 12 caracteres' },
  { chave: 'maiuscula', texto: 'Letra maiúscula' },
  { chave: 'minuscula', texto: 'Letra minúscula' },
  { chave: 'numero', texto: 'Número' },
  { chave: 'simbolo', texto: 'Símbolo especial' },
];

const FORM_VAZIO = {
  nome: '',
  emailCadastro: '',
  senha: '',
  confirmarSenha: '',
  emailLogin: '',
  senhaLogin: '',
  emailRecuperar: '',
};

export default function AuthModal({ aberto, onFechar, onAutenticado }) {
  const [modo, setModo] = useState('login');
  const [form, setForm] = useState(FORM_VAZIO);
  const [enviado, setEnviado] = useState(false);
  const [erroLogin, setErroLogin] = useState('');
  const [mensagemRecuperar, setMensagemRecuperar] = useState({ texto: '', tipo: '' });
  const [cadastroConcluido, setCadastroConcluido] = useState(false);

  useEffect(() => {
    if (!aberto) return undefined;

    function aoTeclar(evento) {
      if (evento.key === 'Escape') {
        fecharTudo();
      }
    }

    document.addEventListener('keydown', aoTeclar);
    return () => document.removeEventListener('keydown', aoTeclar);
  }, [aberto]);

  if (!aberto) return null;

  function atualizarCampo(campo, valor) {
    setForm((atual) => ({ ...atual, [campo]: valor }));
  }

  function fecharTudo() {
    setModo('login');
    setForm(FORM_VAZIO);
    setEnviado(false);
    setErroLogin('');
    setMensagemRecuperar({ texto: '', tipo: '' });
    setCadastroConcluido(false);
    onFechar();
  }

  function trocarModo(novoModo) {
    setModo(novoModo);
    setEnviado(false);
    setErroLogin('');
    setMensagemRecuperar({ texto: '', tipo: '' });
  }

  const emailCadastroInvalido = form.emailCadastro.length > 0 && !validarEmail(form.emailCadastro);
  const { criterios: criteriosSenha, forte: senhaForte } = avaliarSenha(form.senha);
  const confirmarSenhaInvalida = form.confirmarSenha.length > 0 && form.confirmarSenha !== form.senha;
  const nomeInvalido = enviado && form.nome.trim() === '';

  const usuarios = lerUsuarios();
  const emailJaCadastrado =
    form.emailCadastro.length > 0 &&
    !emailCadastroInvalido &&
    usuarios.some((usuario) => usuario.email === normalizarEmail(form.emailCadastro));

  function aoEnviarCadastro(evento) {
    evento.preventDefault();
    setEnviado(true);

    const nomeValido = form.nome.trim() !== '';
    if (!nomeValido || emailCadastroInvalido || emailJaCadastrado || !senhaForte || confirmarSenhaInvalida) {
      return;
    }

    const novoUsuario = {
      nome: form.nome.trim(),
      email: normalizarEmail(form.emailCadastro),
      senha: form.senha,
    };

    const listaAtualizada = [...usuarios, novoUsuario];
    salvarUsuarios(listaAtualizada);

    setCadastroConcluido(true);
    onAutenticado({ nome: novoUsuario.nome, email: novoUsuario.email });
  }

  function aoEnviarLogin(evento) {
    evento.preventDefault();
    setErroLogin('');

    const emailNormalizado = normalizarEmail(form.emailLogin);
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === emailNormalizado && usuario.senha === form.senhaLogin
    );

    if (!usuarioEncontrado) {
      setErroLogin('E-mail ou senha incorretos.');
      return;
    }

    onAutenticado({ nome: usuarioEncontrado.nome, email: usuarioEncontrado.email });
    fecharTudo();
  }

  function aoEnviarRecuperar(evento) {
    evento.preventDefault();

    if (!validarEmail(form.emailRecuperar)) {
      setMensagemRecuperar({ texto: 'Digite um e-mail válido.', tipo: 'erro' });
      return;
    }

    const emailNormalizado = normalizarEmail(form.emailRecuperar);
    const existe = usuarios.some((usuario) => usuario.email === emailNormalizado);

    if (existe) {
      setMensagemRecuperar({
        texto: 'Encontramos uma conta com esse e-mail. O processo de recuperação foi iniciado.',
        tipo: 'sucesso',
      });
    } else {
      setMensagemRecuperar({
        texto: 'Não encontramos uma conta cadastrada com esse e-mail.',
        tipo: 'erro',
      });
    }
  }

  return (
    <>
      <div className="modal fade show auth-modal" style={{ display: 'block' }} tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content auth-modal__conteudo">
            <div className="modal-header auth-modal__topo">
              <h3 className="modal-title auth-modal__titulo">
                {modo === 'login' && 'Entrar na sua conta'}
                {modo === 'cadastro' && 'Criar conta'}
                {modo === 'esqueci' && 'Recuperar senha'}
              </h3>
              <button type="button" className="btn-close" aria-label="Fechar" onClick={fecharTudo} />
            </div>

            <div className="modal-body">
              {modo === 'login' && (
                <form onSubmit={aoEnviarLogin} noValidate>
                  <div className="auth-modal__campo">
                    <label htmlFor="login-email" className="form-label">E-mail</label>
                    <input
                      id="login-email"
                      type="email"
                      className="form-control auth-modal__input"
                      value={form.emailLogin}
                      onChange={(evento) => atualizarCampo('emailLogin', evento.target.value)}
                      required
                    />
                  </div>

                  <div className="auth-modal__campo">
                    <label htmlFor="login-senha" className="form-label">Senha</label>
                    <input
                      id="login-senha"
                      type="password"
                      className="form-control auth-modal__input"
                      value={form.senhaLogin}
                      onChange={(evento) => atualizarCampo('senhaLogin', evento.target.value)}
                      required
                    />
                  </div>

                  {erroLogin && <p className="auth-modal__mensagem auth-modal__mensagem--erro">{erroLogin}</p>}

                  <div className="auth-modal__acoes">
                    <button type="submit" className="btn btn-primary w-100">Entrar</button>
                  </div>

                  <div className="auth-modal__links">
                    <button type="button" className="auth-modal__link" onClick={() => trocarModo('esqueci')}>
                      Esqueci minha senha
                    </button>
                    <button type="button" className="auth-modal__link" onClick={() => trocarModo('cadastro')}>
                      Criar uma conta
                    </button>
                  </div>
                </form>
              )}

              {modo === 'cadastro' && !cadastroConcluido && (
                <form onSubmit={aoEnviarCadastro} noValidate>
                  <div className="auth-modal__campo">
                    <label htmlFor="cadastro-nome" className="form-label">Nome completo</label>
                    <input
                      id="cadastro-nome"
                      type="text"
                      className={`form-control auth-modal__input ${nomeInvalido ? 'is-invalid auth-modal__input--erro' : ''}`}
                      value={form.nome}
                      onChange={(evento) => atualizarCampo('nome', evento.target.value)}
                      required
                    />
                    {nomeInvalido && <span className="auth-modal__mensagem auth-modal__mensagem--erro">Digite seu nome completo.</span>}
                  </div>

                  <div className="auth-modal__campo">
                    <label htmlFor="cadastro-email" className="form-label">E-mail</label>
                    <input
                      id="cadastro-email"
                      type="email"
                      className={`form-control auth-modal__input ${emailCadastroInvalido ? 'is-invalid auth-modal__input--erro' : ''}`}
                      value={form.emailCadastro}
                      onChange={(evento) => atualizarCampo('emailCadastro', evento.target.value)}
                      required
                    />
                    {emailCadastroInvalido && (
                      <span className="auth-modal__mensagem auth-modal__mensagem--erro">Digite um e-mail válido.</span>
                    )}
                    {emailJaCadastrado && (
                      <span className="auth-modal__mensagem auth-modal__mensagem--erro">Esse e-mail já está cadastrado.</span>
                    )}
                  </div>

                  <div className="auth-modal__campo">
                    <label htmlFor="cadastro-senha" className="form-label">Senha</label>
                    <input
                      id="cadastro-senha"
                      type="password"
                      className="form-control auth-modal__input"
                      value={form.senha}
                      onChange={(evento) => atualizarCampo('senha', evento.target.value)}
                      required
                    />
                    <ul className="auth-modal__requisitos">
                      {REQUISITOS_SENHA.map((requisito) => (
                        <li
                          key={requisito.chave}
                          className={criteriosSenha[requisito.chave] ? 'auth-modal__requisito--ok' : 'auth-modal__requisito--pendente'}
                        >
                          {criteriosSenha[requisito.chave] ? '✓' : '✕'} {requisito.texto}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="auth-modal__campo">
                    <label htmlFor="cadastro-confirmar" className="form-label">Confirmar senha</label>
                    <input
                      id="cadastro-confirmar"
                      type="password"
                      className={`form-control auth-modal__input ${confirmarSenhaInvalida ? 'is-invalid auth-modal__input--erro' : ''}`}
                      value={form.confirmarSenha}
                      onChange={(evento) => atualizarCampo('confirmarSenha', evento.target.value)}
                      required
                    />
                    {confirmarSenhaInvalida && (
                      <span className="auth-modal__mensagem auth-modal__mensagem--erro">As senhas não coincidem.</span>
                    )}
                    {!confirmarSenhaInvalida && form.confirmarSenha.length > 0 && (
                      <span className="auth-modal__mensagem auth-modal__mensagem--sucesso">As senhas coincidem.</span>
                    )}
                  </div>

                  <div className="auth-modal__acoes">
                    <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
                  </div>

                  <div className="auth-modal__links">
                    <button type="button" className="auth-modal__link" onClick={() => trocarModo('login')}>
                      Já tenho uma conta
                    </button>
                  </div>
                </form>
              )}

              {modo === 'cadastro' && cadastroConcluido && (
                <div className="auth-modal__sucesso">
                  <span className="auth-modal__sucesso-icone" aria-hidden="true">🎉</span>
                  <p className="auth-modal__sucesso-texto">Você foi cadastrado com sucesso. Aproveite as ofertas.</p>
                  <button type="button" className="btn btn-primary" onClick={fecharTudo}>
                    Continuar comprando
                  </button>
                </div>
              )}

              {modo === 'esqueci' && (
                <form onSubmit={aoEnviarRecuperar} noValidate>
                  <div className="auth-modal__campo">
                    <label htmlFor="recuperar-email" className="form-label">Informe seu e-mail cadastrado</label>
                    <input
                      id="recuperar-email"
                      type="email"
                      className="form-control auth-modal__input"
                      value={form.emailRecuperar}
                      onChange={(evento) => atualizarCampo('emailRecuperar', evento.target.value)}
                      required
                    />
                  </div>

                  {mensagemRecuperar.texto && (
                    <p className={`auth-modal__mensagem auth-modal__mensagem--${mensagemRecuperar.tipo}`}>
                      {mensagemRecuperar.texto}
                    </p>
                  )}

                  <div className="auth-modal__acoes">
                    <button type="submit" className="btn btn-primary w-100">Enviar</button>
                  </div>

                  <div className="auth-modal__links">
                    <button type="button" className="auth-modal__link" onClick={() => trocarModo('login')}>
                      Voltar para o login
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="modal-footer auth-modal__rodape">
              <button type="button" className="btn btn-outline-secondary" onClick={fecharTudo}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show" onClick={fecharTudo} />
    </>
  );
}
