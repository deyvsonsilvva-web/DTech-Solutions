import { Link } from '../router/router.jsx';

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container">

        <div className="row footer__grid gy-4">

          <div className="col-12 col-lg-5 footer__marca">
            <Link to="/" hash="#inicio" className="logo">
              <img className="logo__mark" src="/imagens/Logo.jpg" alt="Logo DTech Solutions" width="38" height="38" />
              DTech Solutions
            </Link>
            <p>
              Sua loja de eletrônicos com os melhores preços em notebooks,
              desktops, peças e acessórios.
            </p>
            <div className="footer__redes">
              <a
                href="https://www.facebook.com/sua-pagina"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src="/imagens/redes/Facebook.png" alt="Facebook" width="18" height="18" />
              </a>

              <a
                href="https://www.instagram.com/dvsnsilva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src="/imagens/redes/Instagram.png" alt="Instagram" width="18" height="18" />
              </a>

              <a
                href="https://x.com/deyvsonandrey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <img src="/imagens/redes/X.png" alt="X" width="18" height="18" />
              </a>

              <a
                href="https://www.youtube.com/@seu-canal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <img src="/imagens/redes/youtube.png" alt="YouTube" width="22" height="15" />
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2 footer__col">
            <h3>Institucional</h3>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li>
                <a 
                  href="https://www.gov.br/mds/pt-br/acesso-a-informacao/governanca/integridade/campanhas/lgpd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lei Geral de Proteção de Dados
                </a>
              </li>
              <li><a href="#">Termos de uso</a></li>
            </ul>
          </div>

          <div className="col-6 col-lg-2 footer__col">
            <h3>Ajuda</h3>
            <ul>
              <li><a href="#">Central de atendimento</a></li>
              <li><a href="#">Trocas e devoluções</a></li>
              <li><a href="#">Formas de pagamento</a></li>
              <li><a href="#">Rastrear pedido</a></li>
            </ul>
          </div>

          <div className="col-12 col-lg-3 footer__col">
            <h3>Contato</h3>
            <ul>
              <li><a href="mailto:contato@dtechsolutions.com.br">contato@dtechsolution.com.br</a></li>
              <li>
                <a 
                  href="https://api.whatsapp.com/send/?phone=%2B5521989868145&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   (21) 98986-8145
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=R.%20Figueiredo%20Camargo%2C%20155%20-%20Rio%20de%20Janeiro%2C%20RJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   R. Figueiredo Camargo, 155 - Bangu, Rio de Janeiro - RJ, 21875-210
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer__base">
          <p>&copy; 2026 DTech Solutions. Todos os direitos reservados.</p>
          <p>Feito com dedicação para quem ama tecnologia.</p>
        </div>

      </div>
    </footer>
  );
}
