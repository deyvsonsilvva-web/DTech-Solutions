import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Categorias from './components/Categorias.jsx';
import CategoriaListagem from './components/CategoriaListagem.jsx';
import Produtos from './components/Produtos.jsx';
import Promocoes from './components/Promocoes.jsx';
import Beneficios from './components/Beneficios.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';
import CarrinhoPainel from './components/CarrinhoPainel.jsx';
import AuthModal from './components/AuthModal.jsx';
import ProdutoDetalhes from './pages/ProdutoDetalhes.jsx';
import { useRouter } from './router/router.jsx';

const REGEX_ROTA_PRODUTO = /^\/produto\/([^/]+)\/?$/;

const CHAVE_CARRINHO = 'techstore-carrinho';
const CHAVE_TEMA = 'techstore-tema';
const CHAVE_SESSAO = 'techstore-sessao';

function carregarCarrinhoSalvo() {
  try {
    const dados = localStorage.getItem(CHAVE_CARRINHO);
    return dados ? JSON.parse(dados) : [];
  } catch (erro) {
    console.error('Não foi possível ler o carrinho salvo:', erro);
    return [];
  }
}

function carregarTemaSalvo() {
  return localStorage.getItem(CHAVE_TEMA) === 'escuro';
}

function carregarSessaoSalva() {
  try {
    const dados = localStorage.getItem(CHAVE_SESSAO);
    return dados ? JSON.parse(dados) : null;
  } catch (erro) {
    console.error('Não foi possível ler a sessão salva:', erro);
    return null;
  }
}

export default function App() {
  const { path } = useRouter();
  const [carrinho, setCarrinho] = useState(carregarCarrinhoSalvo);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [temaEscuro, setTemaEscuro] = useState(carregarTemaSalvo);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [usuarioLogado, setUsuarioLogado] = useState(carregarSessaoSalva);
  const [authModalAberto, setAuthModalAberto] = useState(false);

  useEffect(() => {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
  }, [carrinho]);

  useEffect(() => {
    document.body.classList.toggle('tema-escuro', temaEscuro);
    localStorage.setItem(CHAVE_TEMA, temaEscuro ? 'escuro' : 'claro');
  }, [temaEscuro]);

  useEffect(() => {
    if (path !== '/') return;
    const categoriaNaUrl = new URLSearchParams(window.location.search).get('categoria');
    if (categoriaNaUrl) setCategoriaSelecionada(categoriaNaUrl);
  }, [path]);

  function adicionarAoCarrinho(produto, quantidade = 1) {
    setCarrinho((carrinhoAtual) => {
      const itemExistente = carrinhoAtual.find((item) => item.id === produto.id);

      if (itemExistente) {
        return carrinhoAtual.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + quantidade } : item
        );
      }

      return [...carrinhoAtual, { id: produto.id, nome: produto.nome, preco: produto.preco, quantidade }];
    });

    setCarrinhoAberto(true);
  }

  function alterarQuantidade(id, delta) {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual
        .map((item) => (item.id === id ? { ...item, quantidade: item.quantidade + delta } : item))
        .filter((item) => item.quantidade > 0)
    );
  }

  function removerItem(id) {
    setCarrinho((carrinhoAtual) => carrinhoAtual.filter((item) => item.id !== id));
  }

  function selecionarCategoria(categoriaId) {
    setCategoriaSelecionada((atual) => (atual === categoriaId ? null : categoriaId));
  }

  function autenticarUsuario(usuario) {
    setUsuarioLogado(usuario);
    localStorage.setItem(CHAVE_SESSAO, JSON.stringify(usuario));
  }

  function sair() {
    setUsuarioLogado(null);
    localStorage.removeItem(CHAVE_SESSAO);
  }

  const totalItensCarrinho = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

  const matchProduto = path.match(REGEX_ROTA_PRODUTO);
  const slugProduto = matchProduto ? decodeURIComponent(matchProduto[1]) : null;

  const headerComum = (
    <Header
      temaEscuro={temaEscuro}
      onAlternarTema={() => setTemaEscuro((atual) => !atual)}
      totalItensCarrinho={totalItensCarrinho}
      onAbrirCarrinho={() => setCarrinhoAberto(true)}
      usuarioLogado={usuarioLogado}
      onAbrirAuth={() => setAuthModalAberto(true)}
      onSair={sair}
    />
  );

  const painelCarrinhoEModais = (
    <>
      <CarrinhoPainel
        aberto={carrinhoAberto}
        itens={carrinho}
        onFechar={() => setCarrinhoAberto(false)}
        onAumentar={(id) => alterarQuantidade(id, 1)}
        onDiminuir={(id) => alterarQuantidade(id, -1)}
        onRemover={removerItem}
      />

      <AuthModal
        aberto={authModalAberto}
        onFechar={() => setAuthModalAberto(false)}
        onAutenticado={autenticarUsuario}
      />
    </>
  );

  if (slugProduto) {
    return (
      <>
        {headerComum}
        <ProdutoDetalhes key={slugProduto} slug={slugProduto} onComprar={adicionarAoCarrinho} />
        <Footer />
        {painelCarrinhoEModais}
      </>
    );
  }

  return (
    <>
      {headerComum}

      <Hero />
      <Categorias
        categoriaSelecionada={categoriaSelecionada}
        onSelecionarCategoria={selecionarCategoria}
      />

      {categoriaSelecionada && (
        <CategoriaListagem
          categoriaId={categoriaSelecionada}
          onComprar={adicionarAoCarrinho}
          onFechar={() => setCategoriaSelecionada(null)}
        />
      )}

      <Produtos onComprar={adicionarAoCarrinho} />
      <Promocoes onComprar={adicionarAoCarrinho} />
      <Beneficios />
      <Newsletter />
      <Footer />

      {painelCarrinhoEModais}
    </>
  );
}
