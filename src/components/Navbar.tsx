"use client";

import { useState } from "react";
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
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo" href="#top">
          <Logo />
        </a>

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

        <div
          className={`collapse navbar-collapse justify-content-center${open ? " show" : ""}`}
          id="navbarSupportedContent"
          onClick={() => setOpen(false)}
        >
          <ul className="navbar-nav">
            {nav.map((l) => (
              <li className="nav-item" key={l.href}>
                <a className="nav-link" href={l.href}>
                  <span className="rolling-text">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-button">
          <a href="#contact" className="butn butn-sm butn-bg main-colorbg radius-5">
            <span className="text">Get In Touch</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
