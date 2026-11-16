import { gsap, prefersReducedMotion } from "./anim";

const HERO_TARGETS = "[data-hero-tag], [data-hero-line] > span, [data-hero-sub], [data-hero-cta], [data-hero-device], [data-hero-meta]";
const SCROLL_TARGETS =
  "[data-reveal], [data-price-reveal], [data-stagger] > *, [data-title-line] > span";

const NORMAL_TIMEOUT = 2000;
const HERO_TIMEOUT = 3800;

interface Candidate {
  el: HTMLElement;
  enteredAt: number | null;
  hero: boolean;
}

/**
 * Rede de segurança da experiência de conteúdo.
 *
 * As animações do GSAP deixam os elementos ocultos até dispararem. Este módulo
 * monitora cada alvo e, se ele entrar em cena e continuar invisível por mais de
 * alguns segundos (ticker do navegador adormecido, aba em segundo plano etc.),
 * força o estado final visível. O conteúdo nunca fica preso atrás de uma
 * animação que não rodou.
 */
export function initRevealSafety(): (() => void) | undefined {
  if (typeof window === "undefined" || prefersReducedMotion()) return;

  const heroSelector = new Set(
    Array.from(document.querySelectorAll<HTMLElement>(HERO_TARGETS)),
  );
  const candidates: Candidate[] = Array.from(
    document.querySelectorAll<HTMLElement>(`${SCROLL_TARGETS}, ${HERO_TARGETS}`),
  ).map((el) => ({ el, enteredAt: null, hero: heroSelector.has(el) }));

  const force = (item: Candidate) => {
    const { el } = item;
    if (el.dataset.wfVisible === "1") return;
    const cs = getComputedStyle(el);
    const stillHidden =
      parseFloat(cs.opacity) < 0.05 ||
      Math.abs(new DOMMatrix(cs.transform).m42) > 30 ||
      Math.abs(new DOMMatrix(cs.transform).m41) > 30;
    if (!stillHidden) {
      el.dataset.wfVisible = "1";
      return;
    }
    el.dataset.wfVisible = "1";
    gsap.killTweensOf(el);
    el.style.setProperty("opacity", "1", "important");
    el.style.setProperty("transform", "none", "important");
  };

  const check = () => {
    const now = performance.now();
    const limit = window.innerHeight * 0.98;
    for (const item of candidates) {
      if (item.el.dataset.wfVisible === "1") continue;
      const rect = item.el.getBoundingClientRect();
      const aboveViewport = rect.bottom < 0;
      const insideViewport = rect.top <= limit;
      // Elementos abaixo da dobra ainda não entram em cena.
      if (!aboveViewport && !insideViewport) continue;
      if (item.enteredAt === null) {
        item.enteredAt = now;
        continue;
      }
      const timeout = item.hero ? HERO_TIMEOUT : NORMAL_TIMEOUT;
      if (now - item.enteredAt > timeout) force(item);
    }
  };

  const interval = window.setInterval(check, 600);
  window.addEventListener("scroll", check, { passive: true });
  window.addEventListener("resize", check);
  window.addEventListener("load", check);
  check();

  return () => {
    window.clearInterval(interval);
    window.removeEventListener("scroll", check);
    window.removeEventListener("resize", check);
    window.removeEventListener("load", check);
  };
}
