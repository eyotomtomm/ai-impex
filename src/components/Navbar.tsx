"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

// Leaf mark from the Al-Impex logo + live text (the source logo PNG is too small to stay legible).
export function Logo() {
  return (
    <span className="brand-logo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/leaf.png" alt="" />
      <span>
        Al-Impex<small>26 years young</small>
      </span>
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState<string | null>(null);
  const path = usePathname();
  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href.split("/").slice(0, 2).join("/")));

  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container">
        <Link className="logo" href="/" aria-label="Al-Impex home">
          <Logo />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className={`collapse navbar-collapse justify-content-center${open ? " show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav">
            {nav.map((l) =>
              l.children ? (
                <li
                  className="nav-item dropdown"
                  key={l.label}
                  onMouseEnter={() => setDrop(l.label)}
                  onMouseLeave={() => setDrop(null)}
                >
                  <button
                    type="button"
                    className={`nav-link dropdown-toggle${active(l.href) ? " is-active" : ""}`}
                    aria-expanded={drop === l.label}
                    onClick={() => setDrop(drop === l.label ? null : l.label)}
                  >
                    <span className="rolling-text">{l.label}</span>
                  </button>
                  <div className={`dropdown-menu${drop === l.label ? " show" : ""}`}>
                    {l.children.map((c) => (
                      <Link className="dropdown-item" href={c.href} key={c.href} onClick={() => (setOpen(false), setDrop(null))}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li className="nav-item" key={l.href}>
                  <Link
                    className={`nav-link${active(l.href) ? " is-active" : ""}`}
                    href={l.href}
                    aria-current={active(l.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="rolling-text">{l.label}</span>
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="contact-button">
          <Link href="/contact" className="butn butn-sm butn-bg main-colorbg radius-5">
            <span className="text">Get In Touch</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
