"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";
import { brand, locations, products } from "@/lib/content";

// Products: filter chips over one grid, instead of the long stacked lists on the old site.
export function ProductExplorer() {
  const [tab, setTab] = useState("All");
  const shown = products.filter((p) => tab === "All" || p.title === tab);
  return (
    <section className="explorer section-padding">
      <div className="container">
        <div className="chips mb-80" role="group" aria-label="Filter products">
          {["All", ...products.map((p) => p.title)].map((t) => (
            <button type="button" key={t} className={`chip${tab === t ? " on" : ""}`} aria-pressed={tab === t} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
        {shown.map((p) => (
          <div className="explorer-group" key={p.title}>
            <div className="row mb-40">
              <div className="col-lg-5">
                <h3>{p.title}</h3>
              </div>
              <div className="col-lg-7">
                <p>{p.body}</p>
                <Link href={`/divisions/${p.slug}`} className="underline main-color mt-15">
                  <span className="text">About this division <i className="ti-arrow-top-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="row">
              {p.items.map((it) => (
                <div className="col-lg-4 col-md-6" key={it.title}>
                  <article className="product-card">
                    <div className="img">
                      <img src={it.image} alt={it.title} loading="lazy" />
                    </div>
                    <h5>{it.title}</h5>
                    <p>{it.body}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Locations: hovering or focusing a row swaps the photo beside the list.
export function LocationsList() {
  const [i, setI] = useState(0);
  return (
    <section className="places section-padding">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-7">
            <ol className="places-list">
              {locations.map((l, n) => (
                <li key={l.place} className={n === i ? "on" : ""} onMouseEnter={() => setI(n)}>
                  <Link href={l.href} onFocus={() => setI(n)}>
                    <span className="num">0{n + 1}</span>
                    <span className="body">
                      <span className="place">{l.place}</span>
                      <span className="role main-color sub-title">{l.role}</span>
                      <span className="desc">{l.body}</span>
                      <img className="inline-img" src={l.image} alt="" loading="lazy" />
                    </span>
                    <i className="ti-arrow-top-right"></i>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="places-photo">
              {locations.map((l, n) => (
                <img key={l.place} src={l.image} alt={`${l.role}, ${l.place}`} className={n === i ? "on" : ""} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// No backend yet: the form composes an email in the visitor's mail app.
export function ContactForm() {
  function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n${f.get("name")}\n${f.get("email")}`;
    location.href = `mailto:${brand.email}?subject=${encodeURIComponent(String(f.get("subject") || "Website enquiry"))}&body=${encodeURIComponent(body)}`;
  }
  return (
    <form className="form2" onSubmit={send}>
      <div className="controls row">
        <div className="col-lg-6">
          <div className="form-group mb-30">
            <label className="sr" htmlFor="f-name">Name</label>
            <input id="f-name" type="text" name="name" placeholder="Name" autoComplete="name" required />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group mb-30">
            <label className="sr" htmlFor="f-email">Email</label>
            <input id="f-email" type="email" name="email" placeholder="Email" autoComplete="email" required />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group mb-30">
            <label className="sr" htmlFor="f-subject">Subject</label>
            <input id="f-subject" type="text" name="subject" placeholder="Subject" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="sr" htmlFor="f-message">Message</label>
            <textarea id="f-message" name="message" placeholder="Message" rows={4} required></textarea>
          </div>
          <div className="mt-30">
            <button type="submit" className="butn butn-full butn-bord radius-30">
              <span className="text">Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
