/**
 * Conteúdo editorial da landing page.
 * Dados separados dos componentes para facilitar atualizações.
 */

export const aboutCards = [
  {
    id: "01",
    title: "APRENDA",
    text: "Entenda as ferramentas, os fundamentos e o processo de desenvolvimento.",
  },
  {
    id: "02",
    title: "CONSTRUA",
    text: "Crie sites modernos, responsivos e personalizados utilizando inteligência artificial.",
  },
  {
    id: "03",
    title: "COMERCIALIZE",
    text: "Aprenda a identificar oportunidades, apresentar projetos e negociar serviços de criação de sites.",
  },
] as const;

export type ProjectVariant = "arquitetura" | "clinica" | "tecnologia";

export const projects = [
  {
    id: "01",
    name: "Estúdio de Arquitetura",
    category: "Institucional · Portfólio",
    description:
      "Site sofisticado para escritório de arquitetura, com imagens em destaque e transições suaves.",
    variant: "arquitetura" as ProjectVariant,
    /** Configure o link de visualização quando o projeto estiver publicado. */
    url: "",
  },
  {
    id: "02",
    name: "Clínica de Estética",
    category: "Landing page · Serviços",
    description:
      "Landing page elegante, com apresentação de serviços e canal de contato direto.",
    variant: "clinica" as ProjectVariant,
    url: "",
  },
  {
    id: "03",
    name: "Empresa de Tecnologia",
    category: "Corporativo · Componentes",
    description:
      "Site corporativo moderno, com componentes interativos e layout modular.",
    variant: "tecnologia" as ProjectVariant,
    url: "",
  },
] as const;

export const modules = [
  {
    id: "01",
    title: "FUNDAMENTOS",
    summary: "Introdução ao mercado, ferramentas e oportunidades.",
    topics: [
      "Panorama do mercado de criação de sites",
      "Ferramentas essenciais do processo",
      "Como identificar oportunidades de serviço",
      "Definição do primeiro projeto",
    ],
  },
  {
    id: "02",
    title: "CRIAÇÃO COM IA",
    summary: "Open Code, prompts, layouts, componentes, personalização e responsividade.",
    topics: [
      "Trabalhando com Open Code e assistentes de IA",
      "Estruturando prompts eficientes",
      "Layouts, hierarquia e componentes",
      "Personalização visual e responsividade",
    ],
  },
  {
    id: "03",
    title: "PUBLICAÇÃO",
    summary: "GitHub, Netlify, domínio próprio e atualização de projetos.",
    topics: [
      "Versionamento com GitHub",
      "Publicação gratuita com Netlify",
      "Domínio próprio e configurações",
      "Como manter o projeto atualizado",
    ],
  },
  {
    id: "04",
    title: "PROSPECÇÃO",
    summary: "Como pesquisar empresas, identificar necessidades e organizar potenciais clientes.",
    topics: [
      "Pesquisa e mapeamento de empresas",
      "Leitura de necessidades reais",
      "Organização de uma lista de potenciais clientes",
      "Preparação de abordagem inicial",
    ],
  },
  {
    id: "05",
    title: "VENDAS",
    summary: "Abordagem, apresentação, negociação e precificação.",
    topics: [
      "Primeiro contato sem pressão",
      "Apresentação de projetos e propostas",
      "Negociação e escopo do serviço",
      "Critérios de precificação",
    ],
  },
  {
    id: "06",
    title: "ENTREGA",
    summary: "Revisão, publicação final, entrega e manutenção.",
    topics: [
      "Checklist de revisão antes da entrega",
      "Publicação final e transferência",
      "Apresentação ao cliente",
      "Manutenção e próximos passos",
    ],
  },
] as const;

export const tools = [
  { name: "Open Code", description: "Ambiente de trabalho com assistentes de IA para gerar e editar código.", icon: "terminal" },
  { name: "GitHub", description: "Versionamento e organização dos seus projetos de desenvolvimento.", icon: "git" },
  { name: "Netlify", description: "Publicação rápida de sites com endereço próprio e atualizações simples.", icon: "rocket" },
  { name: "IA Generativa", description: "Modelos de linguagem e imagem para acelerar ideias, textos e visuais.", icon: "sparkles" },
  { name: "Ferramentas de Design", description: "Referências, paletas e composição visual para direcionar cada projeto.", icon: "pen" },
  { name: "Edição e Publicação", description: "Ajustes finos de conteúdo, mídia e configuração antes de colocar no ar.", icon: "upload" },
] as const;

export const methodology = [
  {
    id: "01",
    title: "DESCUBRA",
    text: "Entenda como funciona a criação de sites.",
  },
  {
    id: "02",
    title: "DESENVOLVA",
    text: "Transforme ideias e prompts em projetos funcionais.",
  },
  {
    id: "03",
    title: "PUBLIQUE",
    text: "Coloque seus sites no ar utilizando ferramentas profissionais.",
  },
  {
    id: "04",
    title: "APRESENTE",
    text: "Aprenda a oferecer seus serviços a potenciais clientes.",
  },
] as const;

export const materials = [
  { title: "Videoaulas organizadas", description: "Conteúdo dividido em módulos, na sequência do processo.", icon: "play" },
  { title: "E-book de apoio", description: "Material de leitura para acompanhar e revisar cada etapa.", icon: "book" },
  { title: "Biblioteca de prompts", description: "Modelos de instrução para acelerar a criação dos projetos.", icon: "layers" },
  { title: "Modelos de mensagens comerciais", description: "Textos de abordagem e apresentação para adaptar ao seu contato.", icon: "message" },
  { title: "Checklists de publicação", description: "Lista de verificação para revisar e colocar cada site no ar.", icon: "check" },
  { title: "Projetos demonstrativos", description: "Exemplos de referência para estudar estrutura e apresentação.", icon: "layout" },
] as const;

export const faq = [
  {
    q: "Preciso saber programar?",
    a: "Não. O curso foi pensado para quem está começando. O processo apresentado usa inteligência artificial como apoio na criação, e os conceitos são explicados de forma prática, sem exigir experiência anterior em programação.",
  },
  {
    q: "Quais ferramentas vou utilizar?",
    a: "As principais ferramentas apresentadas são Open Code, GitHub e Netlify, além de ferramentas de design e de inteligência artificial generativa. Todas são apresentadas ao longo dos módulos.",
  },
  {
    q: "Preciso pagar pelas ferramentas?",
    a: "Não é obrigatório. As ferramentas centrais do processo possuem planos gratuitos suficientes para criar e publicar os projetos do curso. Caso você opte por recursos pagos, eles são opcionais e de sua responsabilidade.",
  },
  {
    q: "Como recebo acesso ao curso?",
    a: "Após a confirmação do pagamento, o acesso é liberado na área de membros da Kiwify, plataforma responsável pela venda e pela entrega das aulas. As instruções são enviadas para o e-mail utilizado na compra.",
  },
  {
    q: "Posso assistir pelo celular?",
    a: "Sim. As aulas podem ser assistidas pelo celular, tablet ou computador, conectando-se à área de membros com o mesmo acesso da compra.",
  },
  {
    q: "O curso ensina a encontrar clientes?",
    a: "Sim. Os módulos de prospecção e vendas abordam como pesquisar empresas, identificar necessidades, organizar potenciais clientes, apresentar projetos e negociar serviços.",
  },
  {
    q: "O curso garante que vou conseguir vender sites?",
    a: "Não. A WebForge não promete resultados financeiros ou de vendas. Os resultados dependem da sua prática, do seu desenvolvimento pessoal, da qualidade dos seus projetos e das condições de cada mercado.",
  },
  {
    q: "Como funciona o suporte?",
    a: "O canal de suporte é informado após a compra, na área de membros. Dúvidas também podem ser encaminhadas para o e-mail de contato indicado no rodapé desta página.",
  },
] as const;
