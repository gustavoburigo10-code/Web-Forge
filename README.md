# WebForge — Landing Page

Landing page premium da **WebForge**, marca educacional de criação e venda de sites com
inteligência artificial.

Stack: **React 19 + TypeScript + Vite + Tailwind CSS v4 + GSAP/ScrollTrigger + Lucide React**.

---

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # gera /dist
npm run preview  # serve o build de produção
```

O projeto compila sem erros (`tsc -b` + `vite build`).

---

## Publicação no Netlify

O repositório já inclui o `netlify.toml` com build command, pasta de publicação e redirects.

### Opção A — arrastar a pasta

1. Rode `npm run build`.
2. Acesse <https://app.netlify.com/drop>.
3. Arraste a pasta `dist` gerada na raiz do projeto.

### Opção B — conectar o repositório (recomendado)

1. Suba o projeto para GitHub.
2. No Netlify: **Add new site → Import an existing project**.
3. Selecione o repositório. As configurações são lidas automaticamente do `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `22`
4. **Deploy site**.

### Depois do deploy

- Atualize a URL canônica e do Open Graph em `index.html` (`https://webforge.netlify.app/`).
- Aponte o domínio personalizado (opcional) em **Domain management**.

---

## Configuração importante antes de publicar

### 1. Checkout da Kiwify — `src/config/course.ts`

```ts
checkoutUrl: ""   // cole o link oficial da Kiwify quando disponível
```

- **Enquanto `checkoutUrl` estiver vazio:** todos os botões de compra exibem o estado
  *"Inscrições em preparação"* e nenhum pagamento é processado na página.
- **Ao preencher `checkoutUrl`:** header, seção de oferta e demais CTAs passam a apontar
  para o checkout oficial (aberta em nova aba).

Também ajuste neste arquivo:

- `price` — preço inicial (padrão `R$ 49,90`)
- `supportEmail`, `termsUrl`, `privacyUrl`

### 2. Identidade do site — `src/config/site.ts`

- `site.email`, `site.producer` (nome, documento, endereço do produtor)
- `site.social` (deixe vazio para não exibir)
- URL canônica do site

### 3. Projetos demonstrativos — `src/data/content.ts`

Cada projeto tem um campo `url`. Mantenha `url: ""` enquanto não houver publicação;
o card exibe a etiqueta **"Em breve"** e a marcação **"Demonstração"** — nenhum projeto
é apresentado como trabalho de cliente real.

### 4. Materiais e conteúdo

Todo o texto (módulos, ferramentas, metodologia, materiais, FAQ) fica centralizado em
`src/data/content.ts`. Confirme a relação de materiais anunciados e as condições de
entrega antes da publicação — o PRD exige que todo material anunciado esteja disponível
ou claramente identificado como conteúdo futuro.

---

## Estrutura

```
src/
├── components/
│   ├── Header.tsx          # nav fixa com blur + menu mobile
│   ├── Hero.tsx            # primeira dobra + mockup cinematográfico
│   ├── About.tsx           # o que é a WebForge + 3 pilares
│   ├── ProjectShowcase.tsx # galeria de projetos demonstrativos
│   ├── CourseModules.tsx   # acordeão dos 6 módulos
│   ├── Tools.tsx           # ferramentas e tecnologias
│   ├── Methodology.tsx     # linha do tempo 4 etapas
│   ├── Materials.tsx       # materiais inclusos
│   ├── Pricing.tsx         # oferta + estado do checkout
│   ├── FAQ.tsx             # 8 perguntas frequentes
│   ├── Footer.tsx          # rodapé editorial
│   └── ui/                 # Container, SectionLabel, TitleLines, mockups
├── config/
│   ├── course.ts           # produto, preço, checkout Kiwify, links legais
│   └── site.ts             # identidade, navegação, produtor
├── data/content.ts         # todo o conteúdo editorial
├── lib/anim.ts             # GSAP + ScrollTrigger (reveals, parallax, progresso)
├── styles/
│   ├── globals.css         # tema Tailwind v4, utilitários, botões metálicos
│   └── animations.css      # keyframes (float, pulse, scroll cue)
├── App.tsx
└── main.tsx
```

---

## Animações

- **GSAP + ScrollTrigger** para: revelação de blocos (`data-reveal`), entrada escalonada
  de cards (`data-stagger`), títulos com linhas mascaradas (`data-title-lines`), parallax
  discreto, linha de progresso da metodologia e preço.
- **Timeline de entrada** do hero roda no mount.
- Prioridade para `transform` e `opacity`; nada de animações pesadas em `filter/layout`.
- `prefers-reduced-motion: reduce` desativa todas as animações (elementos ficam visíveis).
- Microinterações em CSS: brilho metálico nos botões, hover dos cards, sublinhado da nav.

---

## Acessibilidade e SEO

- HTML semântico (`header/main/section/article/footer`), `aria-expanded` nos acordeões,
  `aria-labelledby` nas seções, link "pular para o conteúdo" e foco visível.
- Meta description, Open Graph, Twitter Card, favicon SVG e JSON-LD (`Course`).
- Imagens/mockups são construídos em CSS (sem requisições extras); fontes com
  `preconnect` + `display=swap`.
- Contraste alto: texto `#F0F0F1`/`#9EA0A6` sobre `#17191F`/`#23262E`.

## Responsividade

Breakpoints natios do Tailwind: celulares (base), tablets (`sm`/`md`), notebooks (`lg`)
e monitores grandes (container travado em `1280px`). Títulos usam `clamp()` — sem
rolagem horizontal em nenhuma largura.
