import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Inicializa as animações de scroll da página.
 * Prioriza transform e opacity; respeita prefers-reduced-motion.
 */
export function initScrollAnimations(): (() => void) | undefined {
  if (typeof window === "undefined") return;
  if (prefersReducedMotion()) return;

  const ctx = gsap.context(() => {
    /* ---- Reveal genérico ---- */
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      const delay = Number(el.dataset.delay ?? 0);
      gsap.fromTo(
        el,
        { y: Number(el.dataset.revealY ?? 36), opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: false },
        },
      );
    });

    /* ---- Grupos com stagger ---- */
    gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
      const items = Array.from(group.children);
      if (!items.length) return;
      gsap.fromTo(
        items,
        { y: Number(group.dataset.staggerY ?? 40), opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 85%", once: false },
        },
      );
    });

    /* ---- Títulos com linhas mascaradas ---- */
    gsap.utils.toArray<HTMLElement>("[data-title-lines]").forEach((block) => {
      const lines = block.querySelectorAll("[data-title-line] > span");
      if (!lines.length) return;
      gsap.fromTo(
        lines,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: { trigger: block, start: "top 85%", once: false },
        },
      );
    });

    /* ---- Parallax discreto ---- */
    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const amount = Number(el.dataset.parallax ?? 8);
      const trigger = el.closest("section") ?? el;
      gsap.to(el, {
        yPercent: amount,
        ease: "none",
        scrollTrigger: {
          trigger,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    /* ---- Linha de progresso da metodologia ---- */
    const progress = document.querySelector<HTMLElement>("[data-method-progress]");
    if (progress) {
      gsap.fromTo(
        progress,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: progress.closest("section"),
            start: "top 70%",
            end: "bottom 75%",
            scrub: 0.6,
          },
        },
      );
    }

    /* ---- Número de destaque na oferta ---- */
    const price = document.querySelector<HTMLElement>("[data-price-reveal]");
    if (price) {
      gsap.fromTo(
        price,
        { yPercent: 60, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: { trigger: price, start: "top 90%", once: false },
        },
      );
    }
  });

  ScrollTrigger.refresh();

  return () => ctx.revert();
}

export { gsap, ScrollTrigger };
