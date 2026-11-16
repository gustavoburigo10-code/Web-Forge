/** Informações gerais do site. Tudo configurável. */
export const site = {
  name: "WebForge",
  tagline: "CREATE. BUILD. EVOLVE.",
  url: "https://webforge.netlify.app/",
  email: "contato@webforge.com.br",
  /** Informações do produtor — preencher com dados reais antes da publicação. */
  producer: {
    name: "WebForge Educação",
    document: "",
    address: "",
  },
  social: {
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  copyrightName: "WebForge",
} as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "O Curso", href: "#curso" },
  { label: "O Que Você Aprende", href: "#aprender" },
  { label: "Como Funciona", href: "#metodo" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;
