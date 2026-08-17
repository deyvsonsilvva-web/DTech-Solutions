export const produtos = [
  {
    id: 'notebook-basico',
    categoria: 'Notebook',
    nome: 'Notebook Ultra Essential',
      descricao: 'O Notebook Ultra Essential combina mobilidade e versatilidade em um design conversível com tela touchscreen de 360°, sendo a escolha prática e leve para estudar, trabalhar e se entreter em qualquer lugar.',

  descricaoCompleta: {
    introducao: 'O Notebook Ultra Essential foi desenvolvido para oferecer o equilíbrio ideal entre praticidade, mobilidade e flexibilidade na sua rotina diária. Seu grande destaque é a tela sensível ao toque que gira completando até 360°, permitindo transformar o notebook em tablet de forma simples e rápida. Leve e fácil de transportar, ele é a solução perfeita para quem precisa de um dispositivo versátil para estudos, tarefas de trabalho e navegação no dia a dia.',

    destaques: [
      {
        titulo: 'Design Conversível e Versátil',
        descricao: 'Tela de 14" HD sensível ao toque com abertura em 360°, adaptando-se como notebook ou tablet conforme a sua necessidade.'
      },
      {
        titulo: 'Desempenho Eficiente',
        descricao: 'Processador Intel Celeron N4020 e 4GB de memória RAM, ideais para navegação na internet, consumo de mídias e tarefas do cotidiano.'
      },
      {
        titulo: 'Agilidade no Armazenamento',
        descricao: 'SSD de 128GB que garante inicialização rápida do sistema e respostas ágeis ao abrir arquivos e aplicativos.'
      },
      {
        titulo: 'Ultraportátil e Leve',
        descricao: 'Pesa apenas 1,27 kg, facilitando o transporte dentro da mochila para a faculdade ou trabalho sem esforço.'
      },
    ]
  },
    preco: 1899,
    promocao: false,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/notebook-essential.png',
    emoji: '💻',
    specs: [
      { label: 'Processador', valor: 'Intel Celeron N4020' },
      { label: 'Memória RAM', valor: '4GB' },
      { label: 'Armazenamento', valor: 'SSD 128GB' },
      { label: 'Tela', valor: '14" HD' },
      { label: 'Peso', valor: '1,27Kg' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'notebook-estudos',
    categoria: 'Notebook',
    nome: 'Notebook Lenovo IdeaPad',
     descricao: 'O Notebook Lenovo IdeaPad une design fino e elegante a um desempenho ágil para otimizar sua rotina de estudos, trabalho e entretenimento. Com tela de 15,6" Full HD com tratamento antirreflexo, abertura de 180° e bateria de longa duração, ele garante produtividade confortável e excelente qualidade visual em qualquer lugar.',

  descricaoCompleta: {
    introducao: 'O Notebook Lenovo IdeaPad foi desenvolvido para oferecer o equilíbrio perfeito entre mobilidade, praticidade e eficiência para o dia a dia. Seu design leve e moderno vem acompanhado de uma tela Full HD vibrante e um conjunto de hardware otimizado para rodar suas tarefas de trabalho, estudos e lazer com extrema fluidez. Além disso, a linha IdeaPad conta com diferenciais focados em privacidade, ergonomia e durabilidade, garantindo conforto prolongado e liberdade para produzir sem dependência constante da tomada.',

    destaques: [
      {
        titulo: 'Desempenho Eficiente',
        descricao: 'Processador Intel Core i3 de 12ª geração, com arquitetura híbrida de núcleos para alta eficiência, que executa aplicações do cotidiano e multitarefas sem interrupções.'
      },
      {
        titulo: 'Navegação Ágil',
        descricao: '8GB de memória RAM DDR4 combinados a um SSD de 256GB NVMe, proporcionando inicialização do Windows em poucos segundos e abertura rápida de programas.'
      },
      {
        titulo: 'Tela Ampla com Conforto Visual',
        descricao: 'Display de 15,6" Full HD com painel antirreflexo que evita incômodos sob luz forte, acompanhado da dobradiça com abertura de 180° para ajustes de ângulo fáceis.'
      },
      {
        titulo: 'Bateria de Longa Duração e Carga Rápida',
        descricao: 'Autonomia de até 10 horas de uso contínuo, além do suporte ao carregamento rápido Rapid Charge, oferecendo horas adicionais de uso com poucos minutos na tomada.'
      },
      {
        titulo: 'Recursos de Privacidade e Áudio',
        descricao: 'Possui obturador físico na webcam Privacy Shutter para bloquear a câmera quando não estiver em uso e alto-falantes otimizados com tecnologia Dolby Audio para chamadas e áudio mais nítidos.'
      },
    ]
  },
    preco: 2399,
    precoPromocional: 2099,
    promocao: true,
    destaque: true,
    disponivel: true,
    imagem: 'imagens/notebook-study.png',
    emoji: '💻',
    specs: [
      { label: 'Processador', valor: 'Intel Core i3 12ª Gen' },
      { label: 'Memória RAM', valor: '8GB DDR4' },
      { label: 'Armazenamento', valor: 'SSD 256GB' },
      { label: 'Tela', valor: '15,6" Full HD' },
      { label: 'Bateria', valor: 'Até 10 horas de uso' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'notebook',
    categoria: 'Notebook',
    nome: 'Notebook Acer V15',
    descricao: 'O Notebook Acer Nitro V15 une o poder do processador Intel Core i7 de 13ª geração à placa dedicada NVIDIA GeForce RTX 4050, entregando o equilíbrio ideal entre alta performance e gráficos avançados para jogos modernos e criação de conteúdo.',
    descricaoCompleta: {
      introducao: "O Notebook Acer Nitro V15 foi projetado para elevar o patamar de performance de gamers e criadores de conteúdo que buscam velocidade, gráficos de ponta e fluidez em qualquer tarefa. Equipado com o processador Intel Core i7 de 13ª geração e a potente placa de vídeo dedicada NVIDIA GeForce RTX 4050, este notebook executa jogos modernos com folga, acelera renderizações e edições de vídeo complexas e garante uma navegação multitarefa impecável.",

      destaques: [
        {
          titulo: "Desempenho de Alta Velocidade",
          descricao: "Processador Intel Core i7 de 13ª geração para execução fluida de jogos pesados e softwares profissionais exigentes."
        },
        {
          titulo: "Gráficos Next-Gen",
          descricao: "Placa dedicada NVIDIA GeForce RTX 4050 (GDDR6) com suporte a Ray Tracing e DLSS, oferecendo visual realista e altas taxas de quadros."
        },
        {
          titulo: "Memória DDR5 de Última Geração",
          descricao: "16 GB de RAM DDR5 para agilidade no uso diário, com suporte para expansão de até 32 GB."
        },
        {
          titulo: "Armazenamento Ultra-Rápido",
          descricao: "SSD NVMe 4.0 de 1 TB que garante inicialização rápida do sistema operacional e carregamento ágil de jogos e arquivos pesados."
        }
      ]
    },
    preco: 3299,
    precoPromocional: 2799,
    promocao: true,
    destaque: true,
    disponivel: true,
    imagem: 'imagens/notebook-v15.png',
    emoji: '💻',
    specs: [
      { label: 'Processador', valor: 'Intel Core i7 13ª Gen' },
      { label: 'Placa de vídeo', valor: 'Nvidia® GeForce® RTX 4050 GDDR6' },
      { label: 'Memória RAM', valor: '16GB DDR5 - Expansível até 32GB' },
      { label: 'Armazenamento', valor: 'SSD 1TB NVMe 4.0' },
      { label: 'Tela', valor: '15.6" Full HD 165Hz' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'notebook-gamer',
    categoria: 'Notebook',
    nome: 'Notebook Predator X',
    descricao: 'O Notebook Gamer Predator X combina a potência extrema do processador Intel Core i9 de 13ª geração à placa de vídeo NVIDIA GeForce RTX 4070 para oferecer a máxima performance em jogos AAA e criação de conteúdo avançada. Equipado com tela QHD de 165Hz, 32GB de RAM DDR5 e resfriamento de ponta, ele é a máquina definitiva para quem não aceita limitações.',

  descricaoCompleta: {
    introducao: 'O Notebook Gamer Predator X é uma máquina de altíssimo desempenho desenvolvida para jogadores entusiastas, streamers e profissionais que exigem o topo da performance em gráficos e velocidade. Projetado para rodar os títulos mais pesados com Ray Tracing no máximo e altíssimas taxas de quadros, ele também se destaca como uma workstation portátil de elite para renderizações 3D, edição de vídeo em 4K/8K e desenvolvimento pesado.',

    destaques: [
      {
        titulo: 'Desempenho Bruto de Elite',
        descricao: 'Processador Intel Core i9 de 13ª geração, com arquitetura híbrida de múltiplos núcleos de alta performance e eficiência, ideal para overclocking e processamento sem gargalos.'
      },
      {
        titulo: 'Gráficos de Última Geração',
        descricao: 'Placa dedicada NVIDIA GeForce RTX 4070 com 8GB GDDR6, aproveitando recursos avançados de Inteligência Artificial como o DLSS 3 (Frame Generation) e suporte a Ray Tracing realista.'
      },
      {
        titulo: 'Tela Gamer Imersiva e Fluida',
        descricao: 'Display de 16 polegadas com resolução QHD (2560x1600), proporção 16:10, oferecendo maior área útil vertical e taxa de atualização de 165Hz para imagens ultra-detalhadas e jogabilidade fluida.'
      },
      {
        titulo: 'Memória DDR5 e SSD NVMe de Alta Velocidade',
        descricao: '32GB de RAM DDR5 para multitarefas extremas sem engasgos e SSD NVMe de 1TB que proporciona tempos de carregamento muito rápidos e alta velocidade na transferência de dados.'
      },
      {
        titulo: 'Chassi e Refrigeração Avançada',
        descricao: 'Construção robusta com sistema térmico de ponta, incluindo ventoinhas de metal AeroBlade 3D de alta eficiência e pasta térmica de metal líquido, mantendo o sistema frio e estável mesmo em sessões prolongadas de uso intenso.'
      },
      {
        titulo: 'Recursos de Conectividade e Controle',
        descricao: 'Teclado gamer retroiluminado RGB por tecla (Per-Key RGB), suporte a conexões de alta velocidade como Wi-Fi 6E e portas Thunderbolt 4 para múltiplos monitores externos e periféricos de alta velocidade.'
      }
    ]
  },
    preco: 6999,
    promocao: false,
    destaque: true,
    disponivel: true,
    imagem: 'imagens/notebook-predator.png',
    emoji: '💻',
    specs: [
      { label: 'Processador', valor: 'Intel Core i9 13ª Gen' },
      { label: 'Placa de vídeo', valor: 'Nvidia® GeForce® RTX 4070 8GB GDDR6' },
      { label: 'Memória RAM', valor: '32GB DDR5' },
      { label: 'Armazenamento', valor: 'SSD 1TB NVMe' },
      { label: 'Tela', valor: '16" QHD 165Hz' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'notebook-premium',
    categoria: 'Notebook',
    nome: 'Notebook Dell Alienware 16 Área 51',
    descricao: 'O Notebook Dell Alienware 16 Área-51 une o processador Intel Core Ultra 9 de altíssimo desempenho à inovadora GPU NVIDIA GeForce RTX 5070 com memória GDDR7. Projetado para gamers entusiastas e criadores exigentes, ele entrega gráficos de nova geração com IA avançada e Ray Tracing em uma tela imersiva de 16 polegadas.',

  descricaoCompleta: {
    introducao: 'O Notebook Gamer Dell Alienware 16 Área-51 representa a união perfeita entre potência computacional bruta, tecnologia gráfica de ponta e o visual icônico da linha Alienware. Construído para servir como uma verdadeira desktop replacement de alta performance, ele é impulsionado pelo poderoso processador Intel Core Ultra 9 275HX e pela nova geração de placas gráficas NVIDIA GeForce RTX 5070. O sistema garante excelente desempenho em jogos pesados com qualidade máxima, renderizações rápidas e tarefas complexas aceleradas por Inteligência Artificial.',

    destaques: [
      {
        titulo: 'Processamento Extremo',
        descricao: 'Equipado com o Intel Core Ultra 9 275HX, otimizado para lidar com cargas de trabalho intensas, multitarefas pesadas e alta demanda em jogos competitivos.'
      },
      {
        titulo: 'Gráficos da Série RTX 50 (GDDR7)',
        descricao: 'Placa dedicada NVIDIA GeForce RTX 5070 com 8GB de memória GDDR7 ultra-rápida, contando com núcleos Tensor de 5ª geração para IA avançada e suporte a Ray Tracing de alta fidelidade.'
      },
      {
        titulo: 'Tela Ampla e Detalhada',
        descricao: 'Display de 16 polegadas com resolução QHD+ (2560x1600) em proporção 16:10, oferecendo excelente densidade de pixels e fidelidade de cores para jogos e edição.'
      },
      {
        titulo: 'Memória e Armazenamento Ultra-Rápidos',
        descricao: '32GB de RAM DDR5 para agilidade máxima no sistema e SSD NVMe de 1TB com tempos de carregamento extremamente rápidos.'
      },
      {
        titulo: 'Construção e Refrigeração Alienware',
        descricao: 'Chassi robusto com engenharia térmica avançada e iluminação AlienFX personalizável, mantendo o sistema estável mesmo durante longas sessões de uso intenso.'
      },
      {
        titulo: 'Nota sobre Portabilidade',
        descricao: 'Projetado com foco em refrigeração de ponta e desempenho sem gargalos, a linha Área-51 possui construção sólida e peso aproximado de 3,15 kg a 3,4 kg, sendo ideal para quem busca substituir um PC de mesa por uma máquina portátil robusta.'
      }
    ]
  },
    preco: 8499,
    precoPromocional: 7299,
    promocao: true,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/notebook-aurora.png',
    emoji: '💻',
    specs: [
      { label: 'Processador', valor: 'Intel Core Ultra 9 275HX' },
      { label: 'Placa de vídeo', valor: ' NVIDIA® GeForce RTX™ 5070, GDDR7 de 8GB' },
      { label: 'Memória RAM', valor: '32GB DDR5' },
      { label: 'Armazenamento', valor: 'SSD 1TB NVMe' },
      { label: 'Tela', valor: '16" QHD 4K' },
      { label: 'Peso', valor: '1.2kg' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },

  {
    id: 'pc-entrada',
    categoria: 'PC Gamer',
    nome: 'PC Gamer Starter',
    descricao: 'O PC Gamer Starter é a porta de entrada ideal para o universo dos jogos de PC, combinando o processador AMD Ryzen 5 5500 à placa NVIDIA GeForce GTX 1650. Projetado com excelente custo-benefício, ele entrega ótima estabilidade em eSports populares e agilidade para o trabalho e uso diário.',

  descricaoCompleta: {
    introducao: 'O PC Gamer Starter foi projetado para quem busca dar os primeiros passos no ecossistema de jogos para PC com um investimento acessível e seguro. Impulsionado pelo versátil processador AMD Ryzen 5 5500 e pela placa dedicada GTX 1650, este setup entrega desempenho consistente nos títulos competitivos mais jogados da atualidade, como Valorant, CS2, League of Legends e Fortnite, garantindo também fluidez completa para navegação, estudos e tarefas diárias.',

    destaques: [
      {
        titulo: 'Processador de Alta Eficiência',
        descricao: 'AMD Ryzen 5 5500 com 6 núcleos e 12 threads, oferecendo excelente capacidade de processamento para jogos e multitarefa.'
      },
      {
        titulo: 'Gráficos Dedicados para eSports',
        descricao: 'Placa de vídeo NVIDIA GeForce GTX 1650 de 4GB, garantindo fluidez e boa taxa de quadros nos principais eSports em resolução Full HD (1080p).'
      },
      {
        titulo: 'Armazenamento e Boot Rápido',
        descricao: 'SSD de 480GB que proporciona inicialização do Windows em poucos segundos e tempos de carregamento reduzidos para jogos e programas.'
      },
      {
        titulo: 'Energia Confiável e Eficiente',
        descricao: 'Fonte de 500W com certificação 80 Plus, garantindo entrega de energia estável e margem de segurança para o sistema.'
      },
      {
        titulo: 'Margem para Upgrades',
        descricao: 'Plataforma sólida que permite futuras expansões, como a adição de um segundo pente de memória RAM para ativar o modo Dual Channel e placas de vídeo mais potentes.'
      }
    ]
  },

    preco: 2799,
    precoPromocional: 2399,
    promocao: true,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/pc-starter.png',
    emoji: '🖥️',
    specs: [
      { label: 'Processador', valor: 'AMD Ryzen 5 5500' },
      { label: 'Placa de vídeo', valor: 'GTX 1650 4GB' },
      { label: 'Memória RAM', valor: '8GB DDR4' },
      { label: 'Armazenamento', valor: 'SSD 480GB' },
      { label: 'Fonte', valor: '500W 80 Plus' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'desktop',
    categoria: 'PC Gamer',
    nome: 'Desktop Vortex Gamer',
    descricao: 'O Desktop Vortex Gamer traz uma configuração equilibrada e potente, combinando o processador AMD Ryzen 7 com 16GB de RAM e armazenamento SSD. Equipado com a renomada fonte Corsair RM850x (850W 80 Plus Gold), ele entrega alta estabilidade para jogos e criação de conteúdo, oferecendo uma margem excepcional para futuros upgrades.',

  descricaoCompleta: {
    introducao: 'O Desktop Vortex Gamer foi projetado para quem busca uma máquina pronta para jogos modernos, edições de mídia e multitarefa intensa sem abrir mão de segurança e longevidade. Impulsionado pela arquitetura multithread do processador AMD Ryzen 7 e suportado por 16GB de RAM, este setup entrega ótima fluidez no dia a dia. Seu grande destaque de infraestrutura é a fonte de alimentação de altíssimo padrão, que garante entrega de energia limpa e eficiência máxima para o sistema.',

    destaques: [
      {
        titulo: 'Processamento Potente',
        descricao: 'Processador AMD Ryzen 7 com 8 núcleos e 16 threads, ideal para extrair altas taxas de quadros em jogos e agilizar renderizações de vídeo e projetos pesados.'
      },
      {
        titulo: 'Desempenho Gráfico Dedicado',
        descricao: 'Placa de vídeo dedicada com 6GB de VRAM, garantindo estabilidade e boa qualidade gráfica em títulos Full HD.'
      },
      {
        titulo: 'Multitarefa e Agilidade',
        descricao: '16GB de memória RAM DDR4 para executar múltiplos programas simultaneamente, combinados com um SSD de 512GB para inicialização rápida do Windows e carregamentos ágeis.'
      },
      {
        titulo: 'Fonte Topo de Linha (Corsair RM850x)',
        descricao: 'Alimentação de 850W com certificação 80 Plus Gold e cabeamento totalmente modular, oferecendo eficiência energética superior, silêncio operacional e ampla margem de segurança para instalar placas de vídeo topo de linha no futuro.'
      },
      {
        titulo: 'Construção e Expansibilidade',
        descricao: 'Gabinete com bom fluxo de ar e placa-mãe preparada para suportar expansões de memória, mais armazenamento e novos componentes.'
      }
    ]
  },
    preco: 3799,
    promocao: false,
    destaque: true,
    disponivel: true,
    imagem: 'imagens/Desktop.png',
    emoji: '🖥️',
    specs: [
      { label: 'Processador', valor: 'AMD Ryzen 7' },
      { label: 'Placa de vídeo', valor: 'Dedicada, 6GB RAM DDR4' },
      { label: 'Memória RAM', valor: '16GB DDR4' },
      { label: 'Armazenamento', valor: 'SSD 512GB' },
      { label: 'Fonte', valor: 'RM850x - 850W 80 Plus Gold' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'pc-avancado',
    categoria: 'PC Gamer',
    nome: 'PC Gamer Titan',
descricao: 'O PC Gamer Titan é uma máquina de alta performance projetada para gamers entusiastas e profissionais exigentes, combinando o processador AMD Ryzen 9 7900X à potente NVIDIA GeForce RTX 4080 de 16GB. Com 64GB de RAM DDR5, SSD de 2TB e fonte de 1000W, ele entrega fluidez extrema em jogos 4K, Ray Tracing avançado e edições/renderizações pesadas.',

  descricaoCompleta: {
    introducao: 'O PC Gamer Titan foi desenvolvido para quem não aceita limitações e busca a máxima experiência em jogos AAA de última geração, livestreams e criação de conteúdo profissional. Impulsionado pela arquitetura de ponta do processador AMD Ryzen 9 7900X e pela incrível capacidade gráfica da NVIDIA GeForce RTX 4080, este setup executa jogos em 4K com taxas de quadros altíssimas, oferece suporte total a Ray Tracing e acelera significativamente fluxos de trabalho em renderização 3D, IA e edição de vídeo em 8K.',

    destaques: [
      {
        titulo: 'Processamento de Topo de Linha',
        descricao: 'AMD Ryzen 9 7900X com 12 núcleos e 24 threads, clock de até 5.4GHz e soquete moderno AM5, oferecendo poder de processamento para jogos exigentes e multitarefas extremas.'
      },
      {
        titulo: 'Gráficos de Elite com RTX 4080 (16GB)',
        descricao: 'Desempenho gráfico de alto nível com suporte a tecnologias avançadas como DLSS 3 (Frame Generation) e Ray Tracing de última geração em resolução 4K nativa ou upscaled.'
      },
      {
        titulo: 'Capacidade Massiva de RAM DDR5 (64GB)',
        descricao: '64GB de memória RAM DDR5, oferecendo capacidade e velocidade para renderizações pesadas, criação de conteúdo simultânea, máquinas virtuais e jogos modernos.'
      },
      {
        titulo: 'Armazenamento Extremo',
        descricao: 'SSD NVMe de 2TB que proporciona espaço de sobra para uma ampla biblioteca de jogos e arquivos pesados, além de velocidades elevadas de leitura e gravação.'
      },
      {
        titulo: 'Alimentação e Energia Robusta',
        descricao: 'Fonte de 1000W com certificação 80 Plus Gold, garantindo eficiência energética, estabilidade contínua e ampla margem de energia para os picos de consumo do sistema.'
      },
      {
        titulo: 'Placa-Mãe',
        descricao: 'O setup utiliza a Asus TUF Gaming A620M-PLUS, equipada com chipset de entrada da plataforma AM5. Embora ofereça a confiabilidade e construção da linha TUF, possui recursos mais enxutos de conexões, VRM e opções de overclock quando comparada a placas com chipsets B650 ou X670, que são mais adequadas para extrair o máximo potencial do Ryzen 9 em cargas de trabalho contínuas e prolongadas.'
      }
    ]
  },
    preco: 8999,
    promocao: false,
    destaque: true,
    disponivel: true,
    imagem: 'imagens/pc-titan.png',
    emoji: '🖥️',
    specs: [
      { label: 'Processador', valor: 'AMD Ryzen 9 7900X 5.4GHz' },
      { label: 'Placa de vídeo', valor: 'RTX 4080 16GB' },
      { label: 'Placa Mãe', valor: 'Asus TUF Gaming A620AM-PLUS' },
      { label: 'Memória RAM', valor: '64GB DDR5' },
      { label: 'Armazenamento', valor: 'SSD 2TB NVMe' },
      { label: 'Fonte', valor: '1000W 80 Plus Gold' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'pc-escritorio',
    categoria: 'Desktop',
    nome: 'Computador Office Compact',
  descricao: 'O Computador Office Compact é a solução prática, compacta e silenciosa para quem busca eficiência em home office, estudos e rotinas administrativas. Equipado com processador Intel Core i3 de 12ª geração e SSD de 256GB, ele garante respostas ágeis e navegação fluida ocupando mínimo espaço na mesa.',

  descricaoCompleta: {
    introducao: 'O Computador Office Compact foi projetado para oferecer o equilíbrio perfeito entre funcionalidade, consumo consciente e otimização de espaço em ambientes corporativos ou domésticos. Seu gabinete compacto abriga o moderno processador Intel Core i3 de 12ª geração, entregando o desempenho necessário para executar softwares de escritório, videoconferências, reprodução de mídias e navegação multi-abas sem travamentos.',

    destaques: [
      {
        titulo: 'Processamento Eficiente',
        descricao: 'Processador Intel Core i3 de 12ª geração, oferecendo arquitetura moderna com ótimo desempenho por núcleo para tarefas diárias e multitarefas do escritório.'
      },
      {
        titulo: 'Respostas Ágeis',
        descricao: '8GB de memória RAM DDR4 combinados a um SSD de 256GB, proporcionando inicialização rápida do Windows e abertura ágil de planilhas, documentos e navegadores.'
      },
      {
        titulo: 'Gráficos Integrados e Conectividade',
        descricao: 'Processador gráfico integrado Intel UHD Graphics, suficiente para suporte a múltiplos monitores HD/Full HD e reprodução fluida de vídeos.'
      },
      {
        titulo: 'Design Compacto e Silencioso',
        descricao: 'Estrutura menor que a de gabinetes tradicionais, facilitando a organização do setup de trabalho e mantendo baixos níveis de ruído e consumo de energia.'
      },
    ]
  },
    preco: 1699,
    promocao: false,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/pc-office.png',
    emoji: '🖥️',
    specs: [
      { label: 'Processador', valor: 'Intel Core i3 12ª Gen' },
      { label: 'Memória RAM', valor: '8GB DDR4' },
      { label: 'Armazenamento', valor: 'SSD 256GB' },
      { label: 'Placa de vídeo', valor: 'Integrada' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'workstation',
    categoria: 'Desktop',
    nome: 'Dell Precision 5860',
descricao: 'A Workstation Dell Precision 5860 é uma torre de altíssimo desempenho desenvolvida para engenharia de dados, inteligência artificial e renderização 3D complexa. Com suporte a processadores Intel Xeon, memórias DDR5 ECC de até 2TB e capacidade para múltiplas GPUs, ela garante máxima estabilidade e escalabilidade para fluxos de trabalho profissionais exigentes.',

  descricaoCompleta: {
    introducao: 'A Dell Precision 5860 é uma workstation em formato torre projetada para atender profissionais de arquitetura, engenharia, desenvolvimento de IA, efeitos visuais e análise de dados massivos. Construída com foco em confiabilidade contínua e escalabilidade, sua arquitetura conta com suporte a memórias ECC, que detectam e corrigem erros de dados, e certificações ISV (Independent Software Vendor), garantindo execução estável e otimizada nos principais softwares profissionais do mercado, como CAD, Revit, Maya e ambientes de Machine Learning.',

    destaques: [
      {
        titulo: 'Processamento Profissional Contínuo',
        descricao: 'Suporte a processadores Intel Xeon de até 200W e até 20 núcleos, oferecendo alto poder computacional para renderizações contínuas e simulações pesadas sem comprometer a estabilidade térmica.'
      },
      {
        titulo: 'Capacidade Gráfica Dual de Alta Performance',
        descricao: 'Espaço e alimentação projetados para até duas placas de vídeo profissionais AMD Radeon Pro ou NVIDIA RTX, com até 300W por GPU, acelerando o treinamento de modelos de IA e tarefas de computação paralela.'
      },
      {
        titulo: 'Memória DDR5 ECC Massiva',
        descricao: 'Suporte a até 2TB de memória RAM DDR5 a 4800MHz em quad-channel com tecnologia ECC (Error-Correcting Code), fundamental para detectar e corrigir erros de memória e aumentar a confiabilidade em tarefas críticas de longa duração.'
      },
      {
        titulo: 'Armazenamento Híbrido de Grande Porte',
        descricao: 'Combinação de SSD NVMe de alta velocidade, com capacidade de até 20TB, para carregamento rápido de projetos e datasets, com HDs de grande capacidade de até 15TB para arquivamento de grandes volumes de dados.'
      },
      {
        titulo: 'Gabinete Modular e Térmica Avançada',
        descricao: 'Design em torre com baias de acesso frontal, facilitando upgrades e manutenção sem ferramentas, além de fluxo de ar otimizado para operação silenciosa e contínua em regime de 24/7.'
      }
    ]
  },
    preco: 12999,
    precoPromocional: 11499,
    promocao: true,
    destaque: false,
    disponivel: false,
    imagem: 'imagens/pc-workstation.png',
    emoji: '🖥️',
    specs: [
      { label: 'Processador', valor: 'Intel® Xeon® de até 200 W, até 20 núcleos.' },
      { label: 'Placa de vídeo', valor: '2 placas gráficas AMD ou NVIDIA de 300 W.' },
      { label: 'Memória RAM', valor: 'DDR5 com quatro canais de até 2 TB a 4.800 MHz.' },
      { label: 'Armazenamento', valor: 'SSD 20TB NVMe + HD 15TB' },
      { label: 'Garantia', valor: '24 meses do fabricante' },
    ],
  },

  {
    id: 'memoria-ddr4-8gb',
    categoria: 'Memória RAM',
    nome: 'Memória RAM Crucial 8GB',
 descricao: 'A Memória RAM 8GB DDR4 2666MHz é a solução perfeita para otimizar o desempenho do seu notebook de forma simples e econômica. Com módulo único de 8GB, frequência de 2666MHz e latência CL19, ela reduz travamentos, acelera a inicialização e melhora a fluidez na execução de múltiplos aplicativos e abas do navegador.',

  descricaoCompleta: {
    introducao: 'A Memória RAM 8GB DDR4 2666MHz foi projetada para quem busca turbinar a velocidade do notebook no uso diário, estudos e trabalho sem complicações. Ideal tanto para substituir um módulo antigo quanto para ser adicionada em um slot livre para ativar o modo Dual Channel, esta memória oferece a estabilidade e a agilidade necessárias para lidar com multitarefas sem que o sistema perca o fôlego.',

    destaques: [
      {
        titulo: 'Capacidade Prática de 8GB',
        descricao: 'Módulo único ideal para expansão de memória, permitindo rodar softwares do dia a dia, programas de escritório e navegação intensa com mais folga.'
      },
      {
        titulo: 'Frequência de 2666MHz',
        descricao: 'Velocidade estável e compatível com a grande maioria dos notebooks das gerações DDR4 recentes, garantindo rápidas transferências de dados.'
      },
      {
        titulo: 'Formato para Notebooks (SO-DIMM)',
        descricao: 'Projetada em formato compacto específico para garantir fácil instalação em notebooks e computadores de formato ultrarreduzido.'
      },
      {
        titulo: 'Melhoria do Desempenho em Multitarefas',
        descricao: 'Permite abrir dezenas de abas no navegador, editar documentos pesados e alternar entre aplicativos com maior fluidez, reduzindo lentidão e congelamentos.'
      },
      {
        titulo: 'Eficiência e Baixo Consumo',
        descricao: 'Tecnologia DDR4 que opera em tensões reduzidas, ajudando a manter a eficiência energética e a menor geração de calor dentro do dispositivo.'
      }
    ]
  },    preco: 179,
    promocao: false,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/memoria-ddr4-8gb.png',
    emoji: '🧠',
    specs: [
      { label: 'Capacidade', valor: '8GB - módulo único' },
      { label: 'Tipo', valor: 'DDR4' },
      { label: 'Frequência', valor: '2666MHz' },
      { label: 'Latência', valor: 'CL19' },
      { label: 'Garantia', valor: 'Vitalícia do fabricante' },
    ],
  },
  {
    id: 'memoria',
    categoria: 'Memória RAM',
    nome: 'Memória RAM Kingston Fury Beast 16GB',
descricao: 'A Memória RAM Kingston Fury Beast 16GB (2x8GB) é a escolha ideal para quem busca otimizar o desempenho do sistema com alta velocidade e máxima estabilidade. Projetada em kit dual-channel, com frequência de 3200MHz e baixa latência CL16, ela maximiza a largura de banda da memória, garantindo alta fluidez em jogos competitivos, edições de vídeo e multitarefas intensas.',

  descricaoCompleta: {
    introducao: 'A Memória RAM Kingston Fury Beast 16GB foi desenvolvida para gamers, criadores de conteúdo e entusiastas que exigem performance superior e confiabilidade no setup. Composta por dois módulos de 8GB configurados para operar nativamente em dual-channel, ela aumenta a largura de banda disponível entre a memória e o processador, reduzindo gargalos e proporcionando maior fluidez em jogos, aplicações pesadas e multitarefas.',

    destaques: [
      {
        titulo: 'Kit Dual-Channel de 16GB (2x8GB)',
        descricao: 'Configuração otimizada com dois módulos de 8GB para trabalhar em conjunto, aumentando a largura de banda da memória em comparação com um único módulo de mesma capacidade.'
      },
      {
        titulo: 'Frequência de 3200MHz com Latência CL16',
        descricao: 'Velocidade elevada combinada a tempos de resposta reduzidos, proporcionando respostas rápidas do sistema e carregamento ágil de programas e aplicações exigentes.'
      },
      {
        titulo: 'Suporte a Perfis Intel XMP e AMD Ryzen',
        descricao: 'Compatibilidade com perfis de alto desempenho que facilitam a configuração da memória pela BIOS, permitindo atingir as frequências e temporizações nominais de forma prática.'
      },
      {
        titulo: 'Dissipador de Calor Elegante',
        descricao: 'Construção robusta com dissipador de calor de perfil baixo na cor preta, contribuindo para a dissipação térmica e oferecendo boa compatibilidade com diferentes coolers de CPU.'
      },
      {
        titulo: 'Confiabilidade Kingston Fury',
        descricao: 'Projetada e testada sob rigorosos padrões de qualidade para oferecer estabilidade e desempenho consistente durante longas sessões de uso intenso.'
      }
    ]
  },
    preco: 379,
    promocao: false,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/memoria-ram.png',
    emoji: '🧠',
    specs: [
      { label: 'Capacidade', valor: '16GB - Kit 2x8GB' },
      { label: 'Tipo', valor: 'DDR4' },
      { label: 'Frequência', valor: '3200MHz' },
      { label: 'Canal', valor: 'Específico para dual channel' },
      { label: 'Latência', valor: 'CL16' },
      { label: 'Garantia', valor: 'Vitalícia do fabricante' },
    ],
  },
  {
    id: 'memoria-ddr4-32gb',
    categoria: 'Memória RAM',
    nome: 'Memória Kingston Fury Beast 32GB',
descricao: 'A Memória Kingston Fury Beast 32GB (2x16GB) DDR4 oferece alto desempenho e ampla capacidade para setups exigentes que trabalham com multitarefas intensas, edições de vídeo em alta resolução e jogos pesados. Configurada em kit dual-channel com frequência de 3600MHz e latência CL18, ela garante alta taxa de transferência e estabilidade para extrair todo o potencial do seu sistema.',

  descricaoCompleta: {
    introducao: 'A Memória Kingston Fury Beast 32GB foi desenvolvida para atender entusiastas, criadores de conteúdo e gamers profissionais que necessitam de ampla capacidade de memória e velocidades elevadas. Composta por dois módulos de 16GB projetados para operar em dual-channel, ela otimiza o fluxo de dados entre a memória e o processador, reduzindo gargalos em renderizações pesadas, modelagem 3D, transmissões ao vivo e gameplay em alta resolução.',

    destaques: [
      {
        titulo: 'Kit Dual-Channel de 32GB (2x16GB)',
        descricao: 'Ampla capacidade para executar múltiplos softwares pesados simultaneamente, com maior largura de banda de memória para proporcionar respostas rápidas e maior fluidez do sistema.'
      },
      {
        titulo: 'Frequência de 3600MHz',
        descricao: 'Velocidade elevada que aumenta a taxa de transferência de dados e contribui para maior desempenho em jogos e tarefas de computação de alta intensidade.'
      },
      {
        titulo: 'Suporte a Intel XMP e AMD Ryzen',
        descricao: 'Perfis otimizados que facilitam a configuração da memória e permitem alcançar frequências e temporizações de alto desempenho diretamente pela BIOS da placa-mãe.'
      },
      {
        titulo: 'Dissipador de Calor de Perfil Baixo',
        descricao: 'Dissipação térmica eficiente na cor preta, ajudando a manter os módulos em temperaturas adequadas mesmo sob cargas elevadas e oferecendo ampla compatibilidade com diferentes coolers de CPU.'
      },
      {
        titulo: 'Confiabilidade e Qualidade Kingston Fury',
        descricao: 'Módulos testados em fábrica para assegurar estabilidade, longa vida útil e desempenho consistente em rotinas de trabalho, criação de conteúdo e jogos exigentes.'
      }
    ]
  },
    preco: 699,
    precoPromocional: 599,
    promocao: true,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/memoria-ddr4-32gb.png',
    emoji: '🧠',
    specs: [
      { label: 'Capacidade', valor: '32GB - Kit 2x16GB' },
      { label: 'Tipo', valor: 'DDR4' },
      { label: 'Frequência', valor: '3600MHz' },
      { label: 'Canal', valor: 'Dual channel' },
      { label: 'Latência', valor: 'CL18' },
      { label: 'Garantia', valor: 'Vitalícia do fabricante' },
    ],
  },
  {
    id: 'memoria-ddr5-16gb',
    categoria: 'Memória RAM',
    nome: 'Memória Adata XPG Lancer Blade 16GB',
descricao: 'A Memória Adata XPG Lancer Blade 16GB DDR5 eleva o desempenho do seu setup à última geração com alta velocidade e design compacto. Equipada com frequência de 5600MHz e dissipador de calor de alumínio de perfil baixo, ela garante respostas ultrarrápidas, estabilidade e ampla compatibilidade com diversos coolers de CPU.',

  descricaoCompleta: {
    introducao: 'A Memória Adata XPG Lancer Blade 16GB DDR5 foi desenvolvida para gamers e entusiastas que buscam migrar para a arquitetura DDR5 sem se preocupar com espaço físico no gabinete. Seu dissipador de calor em alumínio de perfil baixo dissipa o calor de forma eficiente e permite a instalação sem interferência em coolers grandes de CPU. Além da alta velocidade de transferência de dados, a tecnologia DDR5 oferece maior eficiência energética, gerenciamento de energia integrado e recursos de correção de erros para proporcionar maior estabilidade ao sistema.',

    destaques: [
      {
        titulo: 'Tecnologia DDR5 de Última Geração',
        descricao: 'Oferece maior eficiência energética e largura de banda superior ao DDR4, além da tecnologia On-Die ECC (ODECC), responsável pela correção interna de erros e pelo aumento da estabilidade do sistema.'
      },
      {
        titulo: 'Frequência de 5600MHz',
        descricao: 'Alta velocidade de transferência de dados que contribui para reduzir tempos de carregamento, acelerar a execução de softwares e melhorar a fluidez em jogos modernos.'
      },
      {
        titulo: 'Dissipador de Alumínio de Perfil Baixo',
        descricao: 'Estrutura compacta com visual moderno que proporciona dissipação térmica eficiente e facilita a instalação em gabinetes menores ou sistemas equipados com coolers de CPU volumosos.'
      },
      {
        titulo: 'Módulo Único de 16GB',
        descricao: 'Capacidade de 16GB adequada para montar um sistema moderno, mantendo espaço para futuras expansões com outro módulo e configuração em dual-channel.'
      },
      {
        titulo: 'Suporte a Intel XMP 3.0 e AMD EXPO',
        descricao: 'Permite utilizar perfis de desempenho compatíveis para facilitar a configuração da memória diretamente pela BIOS da placa-mãe.'
      }
    ]
  },
    preco: 549,
    promocao: false,
    destaque: true,
    disponivel: true,
    imagem: 'imagens/memoria-ddr5-16gb.png',
    emoji: '🧠',
    specs: [
      { label: 'Capacidade', valor: '16GB - módulo único' },
      { label: 'Tipo', valor: 'DDR5' },
      { label: 'Frequência', valor: '5600MHz' },
      { label: 'Dissipador', valor: 'Perfil baixo' },
      { label: 'Garantia', valor: 'Vitalícia do fabricante' },
    ],
  },
  {
    id: 'memoria-ddr5-32gb',
    categoria: 'Memória RAM',
    nome: 'Memória Vegeance 32GB',
descricao: 'A Memória Corsair Vengeance 32GB DDR5 combina desempenho de ponta, baixa latência e estilo para setups de altíssima performance. Com frequência de 5600MHz, latência CL30 e iluminação RGB customizável, ela oferece resposta ultrarrápida, estabilidade superior e suporte nativo a AMD EXPO para otimização e overclocking sem esforço.',

  descricaoCompleta: {
    introducao: 'A Memória Corsair Vengeance 32GB DDR5 foi projetada para entusiastas, gamers e criadores de conteúdo que exigem a máxima velocidade da tecnologia DDR5 sem abrir mão do estilo. Desenvolvida para integrar plataformas modernas AMD e Intel, ela oferece respostas rápidas sob cargas intensas de trabalho e permite personalização estética por meio de seu sistema de iluminação RGB.',

    destaques: [
      {
        titulo: 'Tecnologia DDR5 de Alta Velocidade (5600MHz)',
        descricao: 'Entrega altas taxas de transferência de dados e maior largura de banda para multitarefas pesadas, edições em alta resolução e jogos de última geração.'
      },
      {
        titulo: 'Baixíssima Latência (CL30)',
        descricao: 'Tempos de resposta otimizados que reduzem a espera entre as solicitações do processador e a resposta da memória, contribuindo para maior fluidez do sistema.'
      },
      {
        titulo: 'Suporte a AMD EXPO',
        descricao: 'Permite ativar perfis de desempenho diretamente pela BIOS de placas-mãe compatíveis com processadores AMD Ryzen, facilitando a configuração de frequências e temporizações otimizadas.'
      },
      {
        titulo: 'Iluminação RGB Customizável',
        descricao: 'LEDs integrados com cores vibrantes e efeitos personalizáveis por software, permitindo combinar a iluminação dos módulos com o restante do setup.'
      },
      {
        titulo: 'Gerenciamento de Energia e Confiabilidade Corsair',
        descricao: 'A tecnologia DDR5 utiliza um circuito de gerenciamento de energia integrado ao próprio módulo (PMIC), contribuindo para maior eficiência energética e estabilidade durante operações de alto desempenho.'
      }
    ]
  },
    preco: 999,
    precoPromocional: 849,
    promocao: true,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/memoria-ddr5-32gb.png',
    emoji: '🧠',
    specs: [
      { label: 'Capacidade', valor: '32GB' },
      { label: 'Tipo', valor: 'DDR5' },
      { label: 'Frequência', valor: '5600MHz' },
      { label: 'Marca', valor: 'Corsair' },
      { label: 'Latência', valor: 'CL30' },
      { label: 'Garantia', valor: 'Vitalícia do fabricante' },
    ],
  },

  {
    id: 'headset',
    categoria: 'Áudio',
    nome: 'Headset Wireless Orver',
descricao: 'O Headset Wireless Orver entrega áudio imersivo, liberdade de movimentos e comunicação cristalina para jogos competitivos e entretenimento. Com som Surround 7.1, conexão sem fio de baixa latência via 2.4GHz e ampla compatibilidade multiplataforma, ele é a escolha ideal para longas maratonas de gameplay com total conforto.',

  descricaoCompleta: {
    introducao: 'O Headset Wireless Orver foi projetado para oferecer percepção espacial precisa e imersão sonora total durante suas partidas de jogos e momentos de lazer. Livre da limitação de cabos, ele opera com transmissão sem fio de alta velocidade para garantir áudio sincronizado sem atrasos. Seu microfone com cancelamento de ruído e sua construção ergonômica proporcionam clareza na comunicação e conforto prolongado, tornando-o um acessório versátil para diversos consoles e computadores.',

    destaques: [
      {
        titulo: 'Áudio Imersivo Surround 7.1',
        descricao: 'Proporciona percepção espacial tridimensional precisa, permitindo identificar a direção de passos, disparos e efeitos sonoros com clareza em jogos competitivos.'
      },
      {
        titulo: 'Conexão Sem Fio de Baixa Latência (2.4GHz)',
        descricao: 'Transmissão estável via receptor sem fio de 2.4GHz, garantindo excelente sincronia entre imagem e som sem os atrasos comuns de conexões Bluetooth tradicionais.'
      },
      {
        titulo: 'Microfone Destacável com Cancelamento de Ruído',
        descricao: 'Captação de voz limpa e com redução de ruídos de fundo para comunicação clara com sua equipe. O microfone pode ser removido facilmente quando você preferir utilizar o headset apenas para ouvir músicas, assistir a filmes ou jogar.'
      },
      {
        titulo: 'Autonomia de Bateria para Longas Maratonas',
        descricao: 'Duração de até 20 horas de uso contínuo com uma única carga, acompanhando do início ao fim sessões extensas de gameplay e entretenimento.'
      },
      {
        titulo: 'Compatibilidade Multiplataforma',
        descricao: 'Versátil e compatível com diferentes plataformas, incluindo PC, PlayStation 5, Xbox e Nintendo Switch.'
      }
    ]
  },
    preco: 149.9,
    precoPromocional: 119.9,
    promocao: true,
    destaque: true,
    disponivel: true,
    imagem: 'imagens/Headset.png',
    emoji: '🎧',
    specs: [
      { label: 'Som', valor: 'Surround 7.1' },
      { label: 'Conexão', valor: 'Wireless 2.4GHz' },
      { label: 'Microfone', valor: 'Destacável, cancelamento de ruído' },
      { label: 'Bateria', valor: 'Até 20 horas de uso' },
      { label: 'Compatibilidade', valor: 'PC, PS5, XBOX, Switch' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'headphone-com-fio',
    categoria: 'Áudio',
    nome: 'Headphone Studio Wired',
 descricao: 'O Headphone Studio Wired foi desenvolvido para oferecer fidelidade sonora e isolamento acústico em trabalhos de monitoramento, mixagem e audição crítica. Equipado com drivers dinâmicos, ampla resposta de frequência e almofadas em espuma de memória, ele garante conforto prolongado e reprodução precisa para produtores, DJs e entusiastas de áudio.',

  descricaoCompleta: {
    introducao: 'O Headphone Studio Wired é a ferramenta ideal para quem busca precisão sonora e conforto durante longas sessões de gravação, mixagem e monitoramento. Projetado para entregar reprodução fiel do espectro sonoro, ele permite identificar nuances detalhadas no áudio — desde graves bem definidos até médios e agudos equilibrados. Suas almofadas ergonômicas com isolamento passivo de ruído e a conexão com fio sem latência garantem uma experiência estável e sem interferências em estúdios de produção ou no uso diário.',

    destaques: [
      {
        titulo: 'Fidelidade Sonora Ampla',
        descricao: 'Resposta de frequência de 20Hz a 20kHz, cobrindo com clareza as principais faixas do espectro audível para monitoramento e audição detalhada.'
      },
      {
        titulo: 'Conforto Prolongado',
        descricao: 'Almofadas revestidas com espuma de memória (memory foam) que se adaptam ao formato das orelhas, proporcionando excelente isolamento acústico passivo e conforto durante longas sessões de uso.'
      },
      {
        titulo: 'Conexão Universal sem Latência',
        descricao: 'Conector P2/P3 de alta condutividade com fio, garantindo transmissão de áudio analógico sem os atrasos associados a conexões sem fio.'
      },
      {
        titulo: 'Uso Multidisciplinar',
        descricao: 'Ideal para mixagem de DJ, produção em estúdios de áudio, podcasts, gravações e audição em alta fidelidade.'
      },
      {
        titulo: 'Nota sobre as Especificações',
        descricao: 'Enquanto o descritivo de recursos menciona drivers de 50mm para um impacto sonoro mais acentuado, as especificações técnicas da ficha indicam drivers de 40mm. Essa configuração mantém um bom equilíbrio entre reprodução sonora, pressão acústica e portabilidade.'
      }
    ]
  },
    preco: 249.9,
    promocao: false,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/headphone-studio.png',
    emoji: '🎧',
    specs: [
      { label: 'Drivers', valor: '40mm' },
      { label: 'Conexão', valor: 'P2/P3 com fio' },
      { label: 'Resposta de frequência', valor: '20Hz - 20kHz' },
      { label: 'Almofadas', valor: 'Espuma de memória' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'headphone-sem-fio',
    categoria: 'Áudio',
    nome: 'Headphone Air P9 Max',
descricao: 'O Headphone Air P9 Max oferece som imersivo, estilo moderno e total liberdade para a sua rotina. Equipado com Cancelamento Ativo de Ruído (ANC), conexão Bluetooth 5.1 e bateria de longa duração com carregamento rápido via USB-C, ele é a escolha ideal para focar em suas músicas, podcasts e chamadas sem distrações externas.',

  descricaoCompleta: {
    introducao: 'O Headphone Air P9 Max foi desenvolvido para proporcionar uma experiência sonora envolvente e livre de fios no dia a dia, seja no trabalho, em viagens ou nos momentos de lazer. Combinando um design elegante a recursos de áudio avançados, seu principal destaque é o isolamento acústico eficiente, que reduz o barulho do ambiente para você aproveitar seu conteúdo com maior clareza e conforto prolongado.',

    destaques: [
      {
        titulo: 'Cancelamento Ativo de Ruído (ANC)',
        descricao: 'Tecnologia que reduz significativamente o ruído externo de motores, trânsito e escritórios, permitindo maior imersão na sua playlist, podcast ou chamada.'
      },
      {
        titulo: 'Conexão Bluetooth 5.1',
        descricao: 'Transmissão sem fio estável, com baixo consumo de energia e pareamento rápido com smartphones, tablets e notebooks.'
      },
      {
        titulo: 'Bateria de Altíssima Autonomia',
        descricao: 'Até 30 horas de reprodução contínua com uma única carga, acompanhando sua rotina diária sem a necessidade de recargas frequentes.'
      },
      {
        titulo: 'Carregamento Rápido via USB-C',
        descricao: 'Porta USB-C moderna que facilita o carregamento e permite recuperar a autonomia do headphone rapidamente.'
      },
      {
        titulo: 'Ergonomia e Estilo',
        descricao: 'Construção leve com almofadas macias que envolvem as orelhas, proporcionando encaixe confortável durante várias horas seguidas de uso.'
      }
    ]
  },
    preco: 399.9,
    precoPromocional: 329.9,
    promocao: true,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/headphone-air.png',
    emoji: '🎧',
    specs: [
      { label: 'Conexão', valor: 'Bluetooth 5.1' },
      { label: 'Cancelamento de ruído', valor: 'Ativo (ANC)' },
      { label: 'Bateria', valor: 'Até 30 horas' },
      { label: 'Carregamento', valor: 'Rápido, via USB-C' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'headset-gamer-mic',
    categoria: 'Áudio',
    nome: 'Headset Gamer Warlord',
descricao: 'O Headset Gamer Warlord entrega áudio imersivo, comunicação cristalina e estilo marcante para suas partidas. Com som Surround 7.1 virtual, conexão USB estável sem atrasos, microfone destacável com cancelamento de ruído e iluminação RGB, ele garante excelente percepção espacial e conforto para longas maratonas no setup.',

  descricaoCompleta: {
    introducao: 'O Headset Gamer Warlord foi projetado para oferecer alta performance e imersão em jogos competitivos e casuais. Sua arquitetura de áudio proporciona uma percepção espacial precisa, permitindo identificar com clareza a direção de passos e disparos durante a partida. Com conexão USB digital de alta estabilidade e iluminação RGB que destaca seu estilo gamer, ele combina ergonomia e funcionalidades avançadas para maximizar sua experiência.',

    destaques: [
      {
        titulo: 'Som Surround 7.1 Virtual',
        descricao: 'Proporciona um palco sonoro tridimensional imersivo, ideal para localização tática de inimigos e maior realismo em efeitos sonoros.'
      },
      {
        titulo: 'Microfone Destacável com Cancelamento de Ruído',
        descricao: 'Captação de voz limpa e sem interferências do ambiente para uma comunicação clara com a equipe, com a praticidade de poder ser removido para ouvir músicas ou assistir a vídeos.'
      },
      {
        titulo: 'Conexão USB Digital',
        descricao: 'Conectividade Plug and Play estável que garante transmissão de áudio com baixa latência, reduzindo interferências e perdas de sinal em computadores e notebooks.'
      },
      {
        titulo: 'Iluminação RGB',
        descricao: 'Efeitos de luzes vibrantes que agregam estilo e personalização ao visual do seu setup.'
      },
      {
        titulo: 'Conforto para Longas Sessões',
        descricao: 'Estrutura ergonômica com almofadas macias que ajudam a reduzir a pressão na cabeça e nas orelhas durante longas sessões de jogo.'
      }
    ]
  },
    preco: 229.9,
    promocao: false,
    destaque: true,
    disponivel: true,
    imagem: 'imagens/headset-warlord.png',
    emoji: '🎧',
    specs: [
      { label: 'Som', valor: 'Surround 7.1 virtual' },
      { label: 'Microfone', valor: 'Destacável, cancelamento de ruído' },
      { label: 'Conexão', valor: 'USB' },
      { label: 'Iluminação', valor: 'RGB' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'headphone-premium',
    categoria: 'Áudio',
    nome: 'Headphone Signature Master Pro',
 descricao: 'O Headphone Signature Master Pro foi desenvolvido para audiófilos e profissionais que exigem máxima fidelidade sonora e versatilidade. Equipado com drivers planares de 50mm, ele entrega graves profundos, médios claros e agudos extremamente detalhados, unindo conexão balanceada com fio e praticidade Bluetooth em um acabamento premium.',

  descricaoCompleta: {
    introducao: 'O Headphone Signature Master Pro traz o equilíbrio definitivo entre performance sonora de estúdio e conveniência portátil. Projetado para proporcionar uma reprodução de áudio precisa e transparente, ele permite que você aproveite a máxima qualidade sonora tanto em sistemas de alta fidelidade quanto na rotina do dia a dia. Seu acabamento de alto padrão e acessórios inclusos garantem proteção, elegância e durabilidade para acompanhar audiófilos e produtores onde quer que estejam.',

    destaques: [
      {
        titulo: 'Drivers Planares Magnéticos de 50mm',
        descricao: 'Oferecem resposta transitória ultra-rápida e baixíssima distorção, resultando em palco sonoro amplo, graves bem estendidos e clareza excepcional em todas as frequências.'
      },
      {
        titulo: 'Conectividade Versátil (Com Fio Balanceado + Bluetooth)',
        descricao: 'Permite áudio analógico de alta fidelidade via cabo balanceado para amplificadores e equipamentos de estúdio, além da praticidade da transmissão sem fio para dispositivos móveis.'
      },
      {
        titulo: 'Cabo Destacável',
        descricao: 'Proporciona praticidade para substituição, transporte seguro e compatibilidade com diferentes tipos de cabos e conectores de áudio.'
      },
      {
        titulo: 'Estojo em Couro Incluso',
        descricao: 'Acompanha estojo de proteção premium em couro para armazenar e transportar o headphone com segurança, ajudando a protegê-lo contra impactos e arranhões.'
      },
      {
        titulo: 'Construção e Acabamento Premium',
        descricao: 'Ergonomia planejada para longas sessões de audição, combinando materiais duráveis, conforto e acabamento sofisticado.'
      }
    ]
  },
    preco: 1299,
    precoPromocional: 999,
    promocao: true,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/headphone-signature.png',
    emoji: '🎧',
    specs: [
      { label: 'Drivers', valor: 'Planares 50mm' },
      { label: 'Conexão', valor: 'Com fio balanceada + Bluetooth' },
      { label: 'Estojo', valor: 'Couro, incluso' },
      { label: 'Cabo', valor: 'Destacável' },
      { label: 'Garantia', valor: '24 meses do fabricante' },
    ],
  },

  {
    id: 'mouse',
    categoria: 'Mouse',
    nome: 'Mouse GoldenTec Pro',
  descricao: 'O Mouse GoldenTec Pro foi desenvolvido para entregar alta precisão, leveza e agilidade em jogos competitivos e no uso diário. Com sensor óptico de até 16.000 DPI, estrutura ultraleve de 80g, 6 botões programáveis e iluminação RGB, ele garante movimentos rápidos e respostas instantâneas no seu setup.',

  descricaoCompleta: {
    introducao: 'O Mouse GoldenTec Pro traz o equilíbrio ideal entre ergonomia, alta sensibilidade e velocidade para quem busca performance máxima em partidas dinâmicas e tarefas cotidianas. Sua estrutura leve de apenas 80g reduz a fadiga em longas sessões de uso e permite deslizes ultrarrápidos e precisos, enquanto a personalização de botões e iluminação adapta o periférico ao seu estilo de jogo.',

    destaques: [
      {
        titulo: 'Sensor Óptico de Alta Precisão',
        descricao: 'Ajuste de sensibilidade de até 16.000 DPI, oferecendo rastreamento preciso e respostas rápidas tanto em movimentos curtos quanto em arrastos rápidos.'
      },
      {
        titulo: 'Estrutura Ultraleve (80g)',
        descricao: 'Design leve que melhora o tempo de reação, reduz a tensão no pulso e proporciona um deslize suave pelo mousepad.'
      },
      {
        titulo: '6 Botões Programáveis',
        descricao: 'Permite mapear atalhos, macros e comandos específicos diretamente no mouse para maior agilidade durante o jogo ou trabalho.'
      },
      {
        titulo: 'Cabo USB Destacável',
        descricao: 'Praticidade para transporte, maior durabilidade e facilidade para substituição, garantindo um manuseio mais organizado e sem emaranhados.'
      },
      {
        titulo: 'Iluminação RGB e Ergonomia',
        descricao: 'Visual moderno com efeitos de cores ajustáveis e formato projetado para proporcionar uma pegada confortável e firme durante longas sessões de uso.'
      }
    ]
  },    preco: 49.9,
    promocao: false,
    destaque: true,
    disponivel: true,
    imagem: 'imagens/Mouse.png',
    emoji: '🖱️',
    specs: [
      { label: 'Sensor', valor: 'Óptico, até 16000 DPI' },
      { label: 'Botões', valor: '6 programáveis' },
      { label: 'Conexão', valor: 'USB com cabo destacável' },
      { label: 'Iluminação', valor: 'RGB' },
      { label: 'Peso', valor: '80g' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'mouse-com-fio',
    categoria: 'Mouse',
    nome: 'Mouse Office Wired',
descricao: 'O Mouse Office Wired é a escolha prática e confiável para quem busca conforto e produtividade na rotina de trabalho ou estudos. Com design anatômico que reduz a fadiga, sensor óptico de 1200 DPI e 5 botões funcionais, ele oferece navegação precisa e uso sem complicações em desktops e notebooks.',

  descricaoCompleta: {
    introducao: 'O Mouse Office Wired foi desenvolvido para proporcionar conforto prolongado e eficiência no dia a dia, seja no ambiente corporativo, em home office ou nos estudos. Seu formato ergonômico se adapta naturalmente ao encaixe da mão, distribuindo a pressão de forma uniforme para evitar o cansaço após horas contínuas de uso. Com conexão USB Plug and Play, basta conectá-lo para começar a usar imediatamente, sem necessidade de pilhas ou drivers adicionais.',

    destaques: [
      {
        titulo: 'Design Anatômico e Ergonômico',
        descricao: 'Formato projetado para se ajustar à curvatura da mão, garantindo uma pegada confortável e ajudando a reduzir a fadiga durante longas jornadas na mesa de trabalho.'
      },
      {
        titulo: 'Navegação Eficiente com 5 Botões',
        descricao: 'Além dos botões padrão de clique e rolagem, conta com botões laterais adicionais para agilizar a navegação em páginas da web, pastas do sistema e documentos.'
      },
      {
        titulo: 'Sensor Óptico Preciso (1200 DPI)',
        descricao: 'Sensibilidade equilibrada para respostas ágeis e rastreamento fluido em tarefas administrativas, planilhas e navegação diária.'
      },
      {
        titulo: 'Conexão USB Prática (Com Fio)',
        descricao: 'Funcionamento estável via cabo USB, sem atrasos e sem a preocupação de recarregar baterias ou trocar pilhas.'
      },
      {
        titulo: 'Uso Versátil',
        descricao: 'Leve e portátil, é ideal tanto para uso fixo em computadores de mesa quanto para acompanhar notebooks em movimento.'
      }
    ]
  },
    preco: 39.9,
    promocao: false,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/mouse-office.png',
    emoji: '🖱️',
    specs: [
      { label: 'Sensor', valor: 'Óptico, 1200 DPI' },
      { label: 'Conexão', valor: 'USB com fio' },
      { label: 'Botões', valor: '5' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'mouse-sem-fio',
    categoria: 'Mouse',
    nome: 'Mouse Wireless Silent',
descricao: 'O Mouse Wireless Silent é a escolha ideal para quem busca praticidade, conforto e um ambiente livre de ruídos. Com tecnologia de cliques silenciosos, conexão sem fio 2.4GHz e bateria com autonomia de até 12 meses, ele oferece navegação fluida e contínua no escritório, em casa ou durante viagens.',

  descricaoCompleta: {
    introducao: 'O Mouse Wireless Silent foi desenvolvido para otimizar a produtividade e garantir discrição em qualquer ambiente de trabalho ou estudo. Sua tecnologia de acionamento reduz drasticamente o barulho dos cliques, tornando-o perfeito para uso em bibliotecas, escritórios abertos, reuniões online e ambientes noturnos. Além da operação silenciosa, sua conexão sem fio confiável e a longa duração da bateria garantem praticidade total sem o incômodo de fios na mesa.',

    destaques: [
      {
        titulo: 'Cliques Silenciosos',
        descricao: 'Redução significativa do ruído de acionamento dos botões, permitindo focar nas tarefas sem distrações ao redor ou incômodo durante videochamadas.'
      },
      {
        titulo: 'Conexão Sem Fio Estável (2.4GHz)',
        descricao: 'Acompanha nano receptor USB para oferecer conexão estável e sem atrasos, mantendo a mesa organizada e livre de cabos.'
      },
      {
        titulo: 'Sensor Óptico de 1600 DPI',
        descricao: 'Rastreamento fluido, ágil e preciso em diversas superfícies, ideal para navegação na web, edição de documentos e utilização de planilhas.'
      },
      {
        titulo: 'Excelente Eficiência Energética',
        descricao: 'Autonomia de bateria de até 12 meses, garantindo uso prolongado com trocas ou recargas mínimas ao longo do ano.'
      },
      {
        titulo: 'Design Compacto e Ergonômico',
        descricao: 'Formato leve e fácil de transportar na mochila, oferecendo encaixe confortável na mão para acompanhar notebooks em movimento.'
      }
    ]
  },
    preco: 89.9,
    precoPromocional: 59.9,
    promocao: true,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/mouse-silent.png',
    emoji: '🖱️',
    specs: [
      { label: 'Sensor', valor: 'Óptico, 1600 DPI' },
      { label: 'Conexão', valor: 'Wireless 2.4GHz' },
      { label: 'Cliques', valor: 'Silenciosos' },
      { label: 'Bateria', valor: 'Até 12 meses de duração' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'teclado',
    categoria: 'Teclado',
    nome: 'Teclado Mecânico Centauri',
descricao: 'O Teclado Mecânico Centauri combina precisão, ergonomia e estilo no padrão brasileiro ABNT2. Equipado com switches mecânicos azuis de alto retorno tátil e som marcante, iluminação RGB customizável, cabo USB destacável e suporte para celular integrado, ele é a escolha ideal para quem busca performance em jogos e praticidade no setup.',

  descricaoCompleta: {
    introducao: 'O Teclado Mecânico Centauri foi desenvolvido para elevar a experiência de digitação e a performance em jogos, unindo respostas rápidas, durabilidade e recursos convenientes para a organização do seu setup. Construído no padrão brasileiro ABNT2, com a tecla "Ç", ele conta com iluminação RGB personalizável para criar a atmosfera perfeita na sua mesa, além de recursos práticos como cabo removível para transporte fácil e um suporte integrado para smartphone.',

    destaques: [
      {
        titulo: 'Switches Mecânicos Azuis',
        descricao: 'Entrega feedback tátil bem definido e o clássico clique audível marcante (clicky), perfeito para quem gosta de sentir e ouvir cada acionamento preciso em partidas rápidas ou digitação.'
      },
      {
        titulo: 'Layout ABNT2 Brasil',
        descricao: 'Configuração nativa em português do Brasil com a tecla "Ç", garantindo total praticidade sem a necessidade de adaptações no sistema operacional.'
      },
      {
        titulo: 'Iluminação RGB Customizável',
        descricao: 'Diversos efeitos e cores ajustáveis para personalizar o visual da sua mesa e facilitar o uso em ambientes com pouca luz.'
      },
      {
        titulo: 'Cabo USB Destacável',
        descricao: 'Conexão com cabo removível que facilita o transporte, protege contra danos nos conectores e ajuda no gerenciamento de cabos da mesa.'
      },
      {
        titulo: 'Suporte para Celular Integrado',
        descricao: 'Encaixe prático na estrutura superior do teclado para manter o smartphone no seu campo de visão durante o trabalho ou gameplay, acompanhando notificações e chamadas sem interromper sua rotina.'
      }
    ]
  },
    preco: 100,
    promocao: false,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/Teclado.png',
    emoji: '⌨️',
    specs: [
      { label: 'Switches', valor: 'Mecânicos azuis' },
      { label: 'Iluminação', valor: 'RGB customizável' },
      { label: 'Conexão', valor: 'USB com cabo destacável' },
      { label: 'Layout', valor: 'ABNT2' },
      { label: 'Extra', valor: 'Suporte para celular integrado' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'teclado-sem-fio',
    categoria: 'Teclado',
    nome: 'Teclado Wireless Compact',
descricao: 'O Teclado Wireless Compact é a escolha ideal para quem busca um ambiente de trabalho limpo, silencioso e organizado. Com conectividade dupla (Wireless 2.4GHz e Bluetooth), layout ABNT2 e bateria recarregável via USB-C, ele garante digitação confortável e fácil alternância entre múltiplos dispositivos.',

  descricaoCompleta: {
    introducao: 'O Teclado Wireless Compact foi projetado para otimizar a produtividade e a organização em escritórios, estudos e rotinas de home office. Seu perfil fino e portátil elimina a bagunça de fios na mesa, enquanto a digitação de baixo ruído proporciona um ambiente de trabalho tranquilo e sem distrações. A versatilidade de conexão permite parear e alternar com facilidade entre computadores, notebooks, tablets e smartphones.',

    destaques: [
      {
        titulo: 'Conectividade Dupla (2.4GHz + Bluetooth)',
        descricao: 'Conexão sem fio estável via receptor USB 2.4GHz ou Bluetooth, permitindo o uso simultâneo com múltiplos dispositivos como PCs, notebooks e tablets.'
      },
      {
        titulo: 'Digitação Silenciosa e Confortável',
        descricao: 'Teclas de perfil baixo com acionamento suave e ruído reduzido, ideais para digitação rápida em ambientes compartilhados ou reuniões online.'
      },
      {
        titulo: 'Layout ABNT2',
        descricao: 'Padrão brasileiro nativo com a tecla "Ç", oferecendo praticidade para redação sem necessidade de reconfigurações no sistema.'
      },
      {
        titulo: 'Bateria Recarregável via USB-C',
        descricao: 'Bateria interna integrada de longa duração, dispensando o uso de pilhas descartáveis e facilitando o carregamento diretamente pelo cabo USB-C.'
      },
      {
        titulo: 'Design Ultraportátil',
        descricao: 'Estrutura leve e compacta que economiza espaço na mesa e cabe facilmente na mochila para transporte no dia a dia.'
      }
    ]
  },
    preco: 129.9,
    promocao: false,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/teclado-compact.png',
    emoji: '⌨️',
    specs: [
      { label: 'Conexão', valor: 'Wireless 2.4GHz + Bluetooth' },
      { label: 'Layout', valor: 'ABNT2' },
      { label: 'Bateria', valor: 'Recarregável via USB-C' },
      { label: 'Ruído', valor: 'Teclas de baixo ruído' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'teclado-gamer',
    categoria: 'Teclado',
    nome: 'Teclado Gamer Vortex',
 descricao: 'O Teclado Gamer Vortex combina o acionamento suave e silencioso dos switches mecânicos Red a um design compacto e elegante, perfeito para maximizar o espaço da mesa. Com iluminação Rainbow marcante, layout ABNT2 e tecnologia Full Anti-Ghosting (NKRO), ele garante respostas instantâneas e sem bloqueios nas partidas mais intensas.',

  descricaoCompleta: {
    introducao: 'O Teclado Gamer Vortex foi projetado para jogadores que buscam alta precisão, agilidade e um visual impressionante no seu setup. Seu formato inovador e compacto otimiza o espaço da mesa para movimentos mais amplos do mouse, sem sacrificar o desempenho. Equipado com switches mecânicos lineares e iluminação vibrante que se destaca tanto nas teclas quanto nos espaçamentos, ele une estilo e eficiência para suas partidas e uso diário.',

    destaques: [
      {
        titulo: 'Switches Mecânicos Red (Lineares)',
        descricao: 'Acionamento rápido, leve e silencioso, sem clique tátil marcante, ideal para comandos repetitivos e respostas instantâneas em jogos de ritmo veloz.'
      },
      {
        titulo: 'Tecnologia Anti-Ghosting Total (NKRO)',
        descricao: 'O recurso N-Key Rollover garante que todas as teclas pressionadas simultaneamente sejam registradas com precisão, evitando travamentos em combos complexos.'
      },
      {
        titulo: 'Iluminação Rainbow com Keycaps Brilhantes',
        descricao: 'Sistema de iluminação que destaca os caracteres das teclas e os vãos da estrutura, proporcionando um visual gamer moderno e facilitando o uso no escuro.'
      },
      {
        titulo: 'Layout ABNT2',
        descricao: 'Padrão brasileiro nativo com a tecla "Ç", oferecendo praticidade tanto para os momentos de gameplay quanto para digitação no dia a dia.'
      },
      {
        titulo: 'Design Compacto e Robusto',
        descricao: 'Estrutura elegante que economiza espaço na mesa, ideal para quem busca uma estética minimalista ou precisa de mais área para o mousepad.'
      }
    ]
  },
    preco: 349.9,
    precoPromocional: 279.9,
    promocao: true,
    destaque: true,
    disponivel: true,
    imagem: 'imagens/teclado-vortex.png',
    emoji: '⌨️',
    specs: [
      { label: 'Switches', valor: 'Mecânicos red' },
      { label: 'Retroiluminado', valor: 'keycap brilhante + iluminação de lacuna, arco-íris retroiluminado' },
      { label: 'Layout', valor: 'ABNT2' },
      { label: 'Anti-ghosting', valor: 'Total (NKRO)' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'mousepad',
    categoria: 'Periféricos',
    nome: 'Mousepad Gamer Battleground XL',
descricao: 'O Mousepad Gamer Battleground XL combina espaço amplo, durabilidade extrema e controle preciso no setup. Feito com tecido CORDURA® de baixo atrito, ele proporciona deslizes rápidos e suaves em qualquer estilo de jogo. Sua base de borracha antiderrapante e bordas costuradas garantem firmeza e vida útil prolongada para longas sessões de gameplay.',

  descricaoCompleta: {
    introducao: 'O Mousepad Gamer Battleground XL foi desenvolvido para jogadores que exigem máxima estabilidade, área de movimento estendida e alta resistência ao desgaste. Com formato extra grande de 90cm x 40cm, ele acomoda teclado e mouse confortavelmente, criando um espaço de trabalho e jogo unificado. Seu grande diferencial é a construção em tecido CORDURA®, reconhecido pela resistência à fricção, rasgos e umidade, garantindo um deslize consistente ao longo do tempo.',

    destaques: [
      {
        titulo: 'Tecido CORDURA® de Baixo Atrito',
        descricao: 'Superfície premium de alta durabilidade que reduz o arrasto do mouse, permitindo movimentos rápidos, suaves e precisos tanto para baixas quanto para altas sensibilidades de DPI.'
      },
      {
        titulo: 'Tamanho XL (90cm x 40cm)',
        descricao: 'Dimensão estendida que cobre grande parte da mesa, acomodando teclado, mouse e outros periféricos com espaço suficiente para movimentos amplos.'
      },
      {
        titulo: 'Base Emborrachada Antiderrapante',
        descricao: 'Base desenvolvida para manter o mousepad firmemente posicionado sobre a mesa, evitando deslocamentos indesejados durante movimentos rápidos e intensos.'
      },
      {
        titulo: 'Bordas Costuradas Reforçadas',
        descricao: 'Acabamento com costura reforçada em todo o contorno, ajudando a prevenir o desfiamento do tecido e aumentando a durabilidade do produto.'
      },
      {
        titulo: 'Conforto Prolongado',
        descricao: 'Superfície macia e confortável ao toque, proporcionando maior comodidade para o pulso e o braço durante longas sessões de jogos, trabalho ou estudos.'
      }
    ]
  },
    preco: 59.9,
    promocao: false,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/mousepad-xl.png',
    emoji: '🟦',
    specs: [
      { label: 'Dimensões', valor: '90cm x 40cm' },
      { label: 'Superfície', valor: 'Tecido de baixo atrito' },
      { label: 'Base', valor: 'Emborrachada antiderrapante' },
      { label: 'Bordas', valor: 'Costuradas' },
      { label: 'Garantia', valor: '3 meses do fabricante' },
    ],
  },
  {
    id: 'webcam',
    categoria: 'Periféricos',
    nome: 'Webcam Full HD Logitech StreamCam',
descricao: 'A Webcam Full HD Logitech StreamCam é a escolha perfeita para criadores de conteúdo e streamers que buscam máxima qualidade de vídeo na Twitch, YouTube, Instagram e outras redes. Com gravação em 1080p a 60 fps, suporte a vídeo vertical, foco e exposição inteligentes via IA, ela garante imagens fluidas, nítidas e no enquadramento ideal.',

  descricaoCompleta: {
    introducao: 'A Webcam Full HD Logitech StreamCam foi projetada para elevar o nível das suas transmissões ao vivo, chamadas de vídeo e criação de conteúdo. Oferecendo imagens extremamente fluidas com taxa de 60 quadros por segundo, ela se destaca pelas suas funções inteligentes acionadas por IA, que ajustam automaticamente a iluminação e o foco para manter seu rosto nítido mesmo em condições de luz variáveis. Sua versatilidade de montagem permite alternar facilmente entre o modo paisagem tradicional e o modo retrato vertical, perfeito para redes sociais como Instagram e TikTok.',

    destaques: [
      {
        titulo: 'Qualidade Full HD a 60 FPS',
        descricao: 'Transmissão e gravação de vídeo suave, nítida e sem rastros em resolução 1080p a 60 quadros por segundo, proporcionando maior fluidez para transmissões, chamadas e criação de conteúdo.'
      },
      {
        titulo: 'Foco e Exposição Inteligentes por IA',
        descricao: 'Sistema inteligente de rastreamento facial que ajusta automaticamente o foco e a exposição em tempo real, mantendo seu rosto nítido e bem iluminado mesmo diante de variações nas condições de iluminação.'
      },
      {
        titulo: 'Modo de Captura Vertical Nativo',
        descricao: 'Permite girar a câmera facilmente para o formato vertical 9:16, sendo ideal para criação de Stories, Reels, Shorts e outros conteúdos voltados para redes sociais.'
      },
      {
        titulo: 'Microfones Estéreo Integrados',
        descricao: 'Microfones estéreo integrados para captação de voz clara, acompanhados de recursos de redução de ruído ambiente para melhorar a qualidade do áudio em chamadas e transmissões.'
      },
      {
        titulo: 'Conexão USB Plug and Play',
        descricao: 'Conectividade USB para instalação rápida e utilização prática, sem necessidade de configurações complexas ou instalação manual de drivers.'
      }
    ]
  },
    preco: 199.9,
    precoPromocional: 159.9,
    promocao: true,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/webcam-stream.png',
    emoji: '📷',
    specs: [
      { label: 'Resolução', valor: '1080p a 60fps' },
      { label: 'Foco', valor: 'Automático e exposição de rastreamento facial' },
      { label: 'Microfone', valor: 'Integrado' },
      { label: 'Conexão', valor: 'USB plug and play' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'microfone',
    categoria: 'Periféricos',
    nome: 'Microfone para Podcast MTPHOEY',
descricao: 'O Microfone para Podcast MTPHOEY oferece qualidade de áudio profissional e extrema praticidade para gravações, jogos e transmissões ao vivo. Com processador DSP integrado para redução de ruídos, padrão polar cardioide e conexão USB Plug and Play, ele garante captação de voz clara e cristalina, sem a necessidade de instalação de drivers.',

  descricaoCompleta: {
    introducao: 'O Microfone para Podcast MTPHOEY foi projetado para elevar o nível das suas produções de áudio com simplicidade e eficiência. Ideal para podcasters, streamers e criadores de conteúdo, ele combina a alta sensibilidade de uma cápsula condensadora ao processamento de áudio digital, reduzindo ruídos indesejados do ambiente. Acompanhado de um suporte antivibração (shock mount), ele ajuda a isolar o microfone de impactos mecânicos e trepidações da mesa, proporcionando uma captação de voz mais limpa e profissional.',

    destaques: [
      {
        titulo: 'Processador DSP com Cancelamento de Ruído',
        descricao: 'Chip de processamento digital de áudio de alta velocidade que filtra ruídos de fundo indesejados, como ventiladores, teclados e digitação, proporcionando uma captação mais limpa.'
      },
      {
        titulo: 'Padrão Polar Cardioide',
        descricao: 'Focado na captação do som frontal enquanto reduz a captação de ruídos laterais e traseiros, proporcionando maior isolamento para a voz.'
      },
      {
        titulo: 'Conexão USB Plug and Play',
        descricao: 'Instalação simples e imediata em computadores e notebooks, sem necessidade de interface de áudio dedicada ou instalação manual de drivers.'
      },
      {
        titulo: 'Cápsula Condensadora',
        descricao: 'Alta sensibilidade para capturar detalhes da voz com clareza, brilho e boa fidelidade sonora, sendo adequada para podcasts, transmissões e gravações.'
      },
      {
        titulo: 'Suporte Anti-Vibração Incluso',
        descricao: 'Acompanha estrutura no estilo shock mount que ajuda a absorver impactos mecânicos, toques acidentais e vibrações transmitidas pela superfície de trabalho.'
      }
    ]
  },
    preco: 349.9,
    promocao: false,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/microfone-podcast.png',
    emoji: '🎙️',
    specs: [
      { label: 'Tipo', valor: 'Condensador USB' },
      { label: 'Padrão polar', valor: 'Cardioide' },
      { label: 'Conexão', valor: 'USB plug and play' },
      { label: 'Suporte', valor: 'Anti-vibração incluso' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'controle',
    categoria: 'Periféricos',
    nome: 'Controle Gamer Wireless',
descricao: 'O Controle Gamer Wireless entrega alta precisão, versatilidade e durabilidade superior em múltiplas plataformas. Equipado com analógicos com tecnologia Hall Effect que eliminam o risco de drift, gatilhos lineares ajustáveis e motores duplos de vibração, ele oferece autonomia de até 20 horas para partidas imersivas no PC, consoles e Android.',

  descricaoCompleta: {
    introducao: 'O Controle Gamer Wireless foi projetado para jogadores que exigem máxima performance e resposta imediata em qualquer plataforma. Seu principal destaque é a construção com sensores magnéticos Hall Effect nos analógicos, tecnologia que reduz significativamente o desgaste físico dos componentes e proporciona maior precisão e durabilidade ao longo do tempo. Com conectividade híbrida, motores vibratórios e bateria recarregável de longa duração, ele se adapta perfeitamente ao seu estilo de jogo, seja no desktop, smartphone ou TV.',

    destaques: [
      {
        titulo: 'Analógicos com Tecnologia Hall Effect',
        descricao: 'Sensores magnéticos que eliminam o contato físico tradicional nos mecanismos dos analógicos, reduzindo significativamente o desgaste e o risco de drift ao longo do tempo.'
      },
      {
        titulo: 'Gatilhos Lineares Precisos',
        descricao: 'Sensibilidade proporcional ao acionamento que proporciona controle gradual de aceleração e frenagem em jogos de corrida, além de maior precisão em títulos de ação e tiro.'
      },
      {
        titulo: 'Conectividade Híbrida (Bluetooth e USB com Fio)',
        descricao: 'Oferece liberdade sem fio via Bluetooth e a opção de conexão USB para jogabilidade com baixa latência, além de permitir o carregamento simultâneo da bateria.'
      },
      {
        titulo: 'Vibração com Duplo Motor',
        descricao: 'Motores independentes de vibração nas empunhaduras proporcionam feedback tátil mais intenso e maior imersão durante momentos de impacto e ação.'
      },
      {
        titulo: 'Bateria Recarregável de até 20 horas',
        descricao: 'Autonomia estendida para suportar longas sessões de gameplay sem a necessidade de recargas frequentes.'
      },
      {
        titulo: 'Ampla Compatibilidade Multiplataforma',
        descricao: 'Compatível com computadores, consoles e dispositivos móveis Android, oferecendo versatilidade para jogar em diferentes plataformas.'
      }
    ]
  },
    preco: 249.9,
    precoPromocional: 199.9,
    promocao: true,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/controle-play.png',
    emoji: '🎮',
    specs: [
      { label: 'Conexão', valor: 'Bluetooth e USB com fio' },
      { label: 'Vibração', valor: 'Dupla motor' },
      { label: 'Bateria', valor: 'Recarregável, até 20h' },
      { label: 'Compatibilidade', valor: 'PC e Android' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },
  {
    id: 'adaptador-usbc',
    categoria: 'Periféricos',
    nome: 'Adaptador USB-C Hub 7 em 1',
 descricao: 'O Adaptador USB-C Hub 7 em 1 é a solução perfeita para expandir a conectividade do seu notebook ou tablet com praticidade e elegância. Fabricado em alumínio resistente, ele transforma uma única porta USB-C em 7 conexões essenciais, incluindo HDMI 4K, portas USB 3.0, leitor de cartões SD/TF e entrada de energia Power Delivery (PD) de até 100W.',

  descricaoCompleta: {
    introducao: 'O Adaptador USB-C Hub 7 em 1 foi desenvolvido para resolver as limitações de conexões de notebooks ultrafinos e tablets modernos, reunindo as principais portas necessárias em um único dispositivo compacto e portátil. Seu corpo em alumínio anodizado, além de proporcionar um acabamento premium, contribui para uma dissipação térmica eficiente durante usos intensos. Com suporte a carregamento pass-through de alta potência, ele permite recarregar o dispositivo enquanto monitores externos e periféricos permanecem conectados simultaneamente.',

    destaques: [
      {
        titulo: 'Saída de Vídeo HDMI 4K',
        descricao: 'Permite espelhar ou estender a tela para monitores, TVs e projetores em alta resolução, sendo ideal para apresentações, edição de vídeo e consumo de mídia.'
      },
      {
        titulo: '3 Portas USB 3.0 de Alta Velocidade',
        descricao: 'Oferecem transferência rápida de dados para conectar mouses, teclados, pendrives, HDs externos e outros periféricos compatíveis.'
      },
      {
        titulo: 'Leitor de Cartões SD / TF',
        descricao: 'Facilita o acesso e a transferência de fotos, vídeos e outros arquivos diretamente de cartões de memória utilizados em câmeras, drones e dispositivos compatíveis.'
      },
      {
        titulo: 'Carregamento Power Delivery (PD) de até 100W',
        descricao: 'A entrada de energia permite carregar o notebook ou tablet enquanto outras portas do hub estão sendo utilizadas simultaneamente.'
      },
      {
        titulo: 'Construção Premium em Alumínio',
        descricao: 'Corpo leve e resistente com acabamento moderno e boa dissipação térmica, ideal para transporte em viagens, uso profissional e organização do setup.'
      }
    ]
  },
    preco: 149.9,
    promocao: false,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/adaptador-hub.png',
    emoji: '🔌',
    specs: [
      { label: 'Saídas de vídeo', valor: 'HDMI 4K' },
      { label: 'Portas USB', valor: 'USB 3.0 x3' },
      { label: 'Leitor de cartão', valor: 'SD / TF' },
      { label: 'Entrada de energia', valor: 'PD até 100W' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },

  {
    id: 'monitor',
    categoria: 'Monitores',
    nome: 'Monitor UltraWide 27"',
descricao: 'O Monitor UltraWide 27" é a escolha ideal para quem busca versatilidade, qualidade de imagem e fluidez. Equipado com painel IPS 2K (2560x1440) de alta fidelidade de cores e taxa de atualização de 144Hz, ele atende com excelência tanto produções corporativas e de criação quanto partidas de jogos dinâmicos, contando ainda com conectividade HDMI e sem fio.',

  descricaoCompleta: {
    introducao: 'O Monitor UltraWide 27" foi projetado para oferecer uma experiência visual imersiva e completa, unindo alto desempenho para jogos e ampla área de trabalho para multitarefas e edição de conteúdo. A combinação do painel IPS com a resolução 2K garante cores vibrantes, ângulos de visão amplos e imagens ultra-definidas, enquanto a alta taxa de atualização entrega movimentos extremamente suaves na tela.',

    destaques: [
      {
        titulo: 'Painel IPS 2K (2560x1440)',
        descricao: 'Fidelidade de cores superior, amplos ângulos de visão e alta densidade de pixels para textos nítidos e imagens detalhadas.'
      },
      {
        titulo: 'Taxa de Atualização de 144Hz',
        descricao: 'Transição de quadros ultra-suave que reduz o desfoque de movimento (motion blur), sendo ideal para jogos rápidos e proporcionando uma experiência de navegação mais fluida.'
      },
      {
        titulo: 'Proporção e Imersão',
        descricao: 'Oferece uma experiência visual ampla para trabalhar com múltiplas janelas lado a lado e proporciona maior percepção do ambiente durante partidas de jogos.'
      },
      {
        titulo: 'Conectividade Versátil (HDMI + Wireless)',
        descricao: 'Entradas HDMI de alta velocidade combinadas a recursos de conexão sem fio para espelhamento e transmissão de conteúdo sem a necessidade de cabos adicionais.'
      },
      {
        titulo: 'Proporção',
        descricao: 'Embora comercializado sob a nomenclatura UltraWide, a resolução de 2560x1440 corresponde à proporção nativa 16:9 (Quad HD). Monitores ultrawide tradicionais utilizam proporções mais amplas, como 21:9, com resoluções como 2560x1080 ou 3440x1440.'
      }
    ]
  },
    preco: 1899,
    promocao: false,
    destaque: true,
    disponivel: true,
    imagem: 'imagens/Monitor.png',
    emoji: '🖥️',
    specs: [
      { label: 'Tamanho', valor: '27 polegadas' },
      { label: 'Resolução', valor: '2K (2560x1440)' },
      { label: 'Taxa de atualização', valor: '144Hz' },
      { label: 'Painel', valor: 'IPS' },
      { label: 'Conexões', valor: 'HDMI, Wireless' },
      { label: 'Garantia', valor: '12 meses do fabricante' },
    ],
  },

  {
    id: 'ssd',
    categoria: 'Armazenamento',
    nome: 'SSD Kingston NVMe 1TB Turbo',
descricao: 'O SSD NVMe 1TB Turbo é a escolha ideal para quem busca velocidade, capacidade e resposta instantânea no sistema. No formato compacto M.2 2280 com interface PCIe Gen3 x4, ele entrega velocidades de leitura de até 3500MB/s e gravação de até 3000MB/s, reduzindo drasticamente os tempos de carregamento de jogos e aplicativos pesados.',

  descricaoCompleta: {
    introducao: 'O SSD NVMe 1TB Turbo foi projetado para elevar a performance do seu computador ou notebook, eliminando gargalos de armazenamento e acelerando as tarefas do dia a dia. Com barramento PCIe Gen3 x4 e protocolo NVMe, ele oferece uma experiência significativamente mais rápida que os SSDs SATA tradicionais, garantindo inicialização ágil do sistema operacional e maior fluidez no carregamento de grandes volumes de dados.',

    destaques: [
      {
        titulo: 'Altas Velocidades de Transferência',
        descricao: 'Alcance taxas de leitura sequencial de até 3500MB/s e gravação de até 3000MB/s, agilizando a cópia de arquivos grandes e a inicialização de softwares.'
      },
      {
        titulo: 'Capacidade Massiva de 1TB',
        descricao: 'Espaço de sobra para instalar múltiplos jogos de última geração, sistemas operacionais, aplicativos de edição e armazenar arquivos pessoais de grande porte.'
      },
      {
        titulo: 'Formato M.2 2280 Compacto',
        descricao: 'Design ultrafino e sem cabos que se conecta diretamente à placa-mãe de desktops e notebooks compatíveis, contribuindo também para uma organização mais limpa e melhor fluxo de ar no gabinete.'
      },
      {
        titulo: 'Tecnologia NVMe PCIe Gen3 x4',
        descricao: 'Aproveita quatro vias de comunicação PCI Express de alta velocidade para proporcionar baixa latência e respostas rápidas durante tarefas de uso intenso.'
      },
      {
        titulo: 'Eficiência e Confiabilidade',
        descricao: 'Construção em estado sólido, sem partes móveis, oferecendo maior resistência a impactos, funcionamento silencioso e baixo consumo de energia.'
      }
    ]
  },
    preco: 459,
    precoPromocional: 379,
    promocao: true,
    destaque: false,
    disponivel: true,
    imagem: 'imagens/ssd-turbo.png',
    emoji: '💾',
    specs: [
      { label: 'Capacidade', valor: '1TB' },
      { label: 'Interface', valor: 'NVMe PCIe Gen3 x4' },
      { label: 'Velocidade de leitura', valor: 'até 3500MB/s' },
      { label: 'Velocidade de gravação', valor: 'até 3000MB/s' },
      { label: 'Formato', valor: 'M.2 2280' },
      { label: 'Garantia', valor: '5 anos do fabricante' },
    ],
  },
];

export function obterProdutoPorSlug(slug) {
  return produtos.find((produto) => (produto.slug || produto.id) === slug) || null;
}

export function obterSlugProduto(produto) {
  return produto.slug || produto.id;
}

export function produtosRelacionados(produtoAtual, limite = 4) {
  return produtos
    .filter((produto) => produto.id !== produtoAtual.id && produto.categoria === produtoAtual.categoria)
    .slice(0, limite);
}
