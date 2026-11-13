"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// One place for every template behaviour the original loaded through jQuery plugins / wow.js:
// page loader, smooth scroll, stacked divisions cards, reveal-on-scroll, custom cursor,
// scroll progress button and the sticky navbar state.
export function Effects() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let smoother: ScrollSmoother | null = null;

    // gsap.context lets cleanup revert every tween/trigger (dev StrictMode runs effects twice).
    const ctx = gsap.context(() => {
      if (!reduce) smoother = ScrollSmoother.create({ smooth: 1.5, effects: true });

      // Loader: curtain wipes up, then the hero rises in.
      gsap
        .timeline()
        .to(".loader-wrap-heading .load-text", { delay: reduce ? 0 : 1.2, y: -100, opacity: 0 })
        .to("#svg", { duration: 0.5, attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" }, ease: "power2.in" })
        .to("#svg", { duration: 0.5, attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" }, ease: "power2.out" })
        .to(".loader-wrap", { y: -1500 })
        .set(".loader-wrap", { display: "none" })
        .from("header .container", { y: 40, opacity: 0 }, "-=1");

      // Divisions: each card pins and scales down slightly as the next one slides over it.
      const cards = gsap.utils.toArray<HTMLElement>(".cards .card-item");
      if (cards.length && !reduce) {
        const last = ScrollTrigger.create({ trigger: cards[cards.length - 1], start: "bottom bottom" });
        cards.forEach((card, i) => {
          ScrollTrigger.create({
            trigger: card,
            start: "center center",
            end: () => last.start,
            pin: true,
            pinSpacing: false,
            scrub: true,
            animation: gsap.to(card, { scale: 1 - (cards.length - i) * 0.025, ease: "none" }),
          });
        });
      }
    });

    // Reveal: replaces wow.js — the template CSS animates `.wow.animated`.
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animated");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -100px" },
    );
    document.querySelectorAll(".wow").forEach((el) => io.observe(el));

    // Cursor
    const cursor = document.querySelector<HTMLElement>(".cursor");
    const onMove = (e: MouseEvent) => {
      if (!cursor) return;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      const hot = (e.target as Element).closest?.("a, button, .cursor-pointer");
      cursor.classList.toggle("cursor-active", !!hot);
    };

    // Progress ring, back-to-top and navbar background
    const nav = document.querySelector(".navbar");
    const wrap = document.querySelector(".progress-wrap");
    const path = document.querySelector<SVGPathElement>(".progress-wrap path");
    const len = path?.getTotalLength() ?? 0;
    if (path) path.style.strokeDasharray = `${len} ${len}`;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - innerHeight || 1;
      if (path) path.style.strokeDashoffset = `${len - (y * len) / max}`;
      wrap?.classList.toggle("active-progress", y > 150);
      nav?.classList.toggle("nav-scroll", y > 300);
    };
    onScroll();

    // In-page links: ScrollSmoother moves content with transforms, so let it do the scrolling.
    const onClick = (e: MouseEvent) => {
      const el = e.target as Element;
      if (el.closest(".progress-wrap")) {
        e.preventDefault();
        if (smoother) smoother.scrollTo(0, true);
        else scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const a = el.closest<HTMLAnchorElement>('a[href^="#"]');
      const target = a && a.hash.length > 1 ? document.querySelector(a.hash) : null;
      if (!target) return;
      e.preventDefault();
      if (smoother) smoother.scrollTo(target, true, "top 80px");
      else target.scrollIntoView({ behavior: "smooth" });
    };

    addEventListener("mousemove", onMove);
    addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      removeEventListener("mousemove", onMove);
      removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      io.disconnect();
      ctx.revert();
    };
  }, []);

  return null;
}
