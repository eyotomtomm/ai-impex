"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// One place for every template behaviour the original loaded through jQuery plugins / wow.js:
// page loader, smooth scroll, stacked divisions cards, reveal-on-scroll, custom cursor,
// scroll progress button and the sticky navbar state.
export function Effects() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    // Next keeps the previous page mounted but hidden, so every lookup is scoped to this page's shell.
    const shell = ref.current!.closest<HTMLElement>(".shell")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let smoother: ScrollSmoother | null = null;

    // gsap.context lets cleanup revert every tween/trigger (dev StrictMode runs effects twice).
    const ctx = gsap.context(() => {
      if (!reduce) smoother = ScrollSmoother.create({ wrapper: shell.querySelector<HTMLElement>(".smooth-wrapper")!, content: shell.querySelector<HTMLElement>(".smooth-content")!, smooth: 1.5, effects: true });

      // Count-up: any [data-count] number rolls up from zero when it scrolls into view.
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        // Keep the real value on the element: dev StrictMode runs this effect twice.
        el.dataset.count ||= el.textContent ?? "";
        const m = el.dataset.count.match(/^([\d,]+)(.*)$/);
        if (!m || reduce) return;
        const end = +m[1].replace(/,/g, "");
        const o = { v: 0 };
        gsap.to(o, {
          v: end,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = (m[1].includes(",") ? Math.round(o.v).toLocaleString("en-US") : Math.round(o.v)) + m[2];
          },
        });
      });

      // Farm-to-market line draws itself as the section scrolls through.
      if (!reduce && shell.querySelector(".chain-steps")) {
        gsap.fromTo(".chain-fill", { "--p": 0 }, { "--p": 1, ease: "none", scrollTrigger: { trigger: ".chain-steps", start: "top 75%", end: "bottom 60%", scrub: true } });
        gsap.from(".chain-step", { opacity: 0.25, stagger: 0.2, ease: "none", scrollTrigger: { trigger: ".chain-steps", start: "top 75%", end: "bottom 60%", scrub: true } });
      }

      // Page-header photos drift slower than the page (parallax).
      if (!reduce && shell.querySelector(".page-header")) gsap.to(".page-header", { backgroundPositionY: "80%", ease: "none", scrollTrigger: { trigger: ".page-header", start: "top top", end: "bottom top", scrub: true } });

      // Loader plays once per visit; in-site navigation skips it (html.loaded hides it in CSS).
      const root = document.documentElement;
      if (root.classList.contains("loaded")) {
        scrollTo(0, 0);
        gsap.from("header .container", { y: 30, opacity: 0, duration: 0.6 });
        return;
      }
      // Loader: curtain wipes up, then the hero rises in.
      gsap
        .timeline({ onComplete: () => root.classList.add("loaded") })
        .to(".loader-wrap-heading .load-text", { delay: reduce ? 0 : 1.2, y: -100, opacity: 0 })
        .to("#svg", { duration: 0.5, attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" }, ease: "power2.in" })
        .to("#svg", { duration: 0.5, attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" }, ease: "power2.out" })
        .to(".loader-wrap", { y: -1500 })
        .set(".loader-wrap", { display: "none" })
        .from("header .container", { y: 40, opacity: 0 }, "-=1");
    }, shell);

    const ctx2 = gsap.context(() => {
      // Locations photo follows the list (CSS sticky cannot work inside the smooth-scroll transform).
      const photo = shell.querySelector<HTMLElement>(".places-photo");
      if (photo && !reduce && innerWidth > 991) {
        ScrollTrigger.create({ trigger: photo, start: "top 120", endTrigger: ".places-list", end: () => `bottom ${120 + photo.offsetHeight}`, pin: true, pinSpacing: false });
      }

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
    }, shell);

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
    shell.querySelectorAll(".wow").forEach((el) => io.observe(el));

    // Cursor
    const cursor = shell.querySelector<HTMLElement>(".cursor");
    const onMove = (e: MouseEvent) => {
      if (!cursor) return;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      const hot = (e.target as Element).closest?.("a, button, .cursor-pointer");
      cursor.classList.toggle("cursor-active", !!hot);
    };

    // Progress ring, back-to-top and navbar background
    const nav = shell.querySelector(".navbar");
    const wrap = shell.querySelector(".progress-wrap");
    const path = shell.querySelector<SVGPathElement>(".progress-wrap path");
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
      const target = a && a.hash.length > 1 ? shell.querySelector(a.hash) : null;
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
      ctx2.revert();
    };
  }, []);

  return <span ref={ref} hidden />;
}
