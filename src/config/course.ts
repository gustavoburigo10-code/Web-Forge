/**
 * Configuração central do produto e do checkout (Kiwify).
 * Preencha `checkoutUrl` com o link oficial quando ele for disponibilizado.
 * Enquanto estiver vazio, a página exibe o estado "inscrições em preparação".
 */
export interface CourseConfig {
  courseName: string;
  shortName: string;
  /** Preço inicial configurável, formatado. */
  price: string;
  /** Link oficial do checkout (Kiwify). Deixar vazio até ser publicado. */
  checkoutUrl: string;
  supportEmail: string;
  termsUrl: string;
  privacyUrl: string;
}

export const course: CourseConfig = {
  courseName: "WebForge — Formação em Criação e Venda de Sites",
  shortName: "WebForge",
  price: "R$ 49,90",
  checkoutUrl: "",
  supportEmail: "contato@webforge.com.br",
  termsUrl: "",
  privacyUrl: "",
};

/** Informações da oferta — apenas dados verificáveis e configuráveis. */
export const offerDetails: Array<{ label: string; value: string }> = [
  { label: "Formato das aulas", value: "Videoaulas organizadas por módulos, no ritmo do aluno." },
  { label: "Materiais inclusos", value: "E-book de apoio, biblioteca de prompts e checklists." },
  { label: "Forma de acesso", value: "Área de membros, após a confirmação do pagamento." },
  { label: "Suporte", value: "Canal de dúvidas informado após a compra, na área de membros." },
  { label: "Pagamento", value: "Processado integralmente pela Kiwify, com os meios informados no checkout." },
  { label: "Reembolso", value: "Condições exibidas na página oficial do checkout da Kiwify." },
];

/** Indica se o checkout já está ativo. */
export const isCheckoutLive = course.checkoutUrl.trim().length > 0;
