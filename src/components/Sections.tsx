/* eslint-disable @next/next/no-img-element -- template CSS styles raw <img> sizes/object-fit directly */
import Link from "next/link";
import { brand, capacity, chain, divisions, exports, marquee, story } from "@/lib/content";
import { Logo } from "@/components/Navbar";

export function Chrome() {
  return (
    <>
      <div className="loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
        <div className="loader-wrap-heading">
          <div className="load-text">
            {"Al-Impex".split("").map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="cursor"></div>
      <button type="button" className="progress-wrap cursor-pointer" aria-label="Back to top">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </button>
      <div className="lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export function Header() {
  return (
    <header
      id="top"
      className="header-personal valign bg-img"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
      data-overlay-dark="6"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <img src="/images/leaf.png" alt="" />
                </span>{" "}
                26 years young
              </h6>
              <h1 className="fw-700 mb-10">
                We are Al-<span className="main-color">Impex</span>
              </h1>
              <h3>{brand.tagline}</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      A transformative force in Ethiopia&apos;s economy, evolving from a small trading business to a
                      leader in agro-processing, manufacturing and distribution.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <Link href="/contact" className="butn butn-md butn-bord radius-30">
                      <span className="text">Contact Us</span>
                    </Link>
                    <a href="#about" className="icon-img-60 ml-20" aria-label="Scroll to About">
                      <img src="/assets/imgs/icon-img/arrow-down-big.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end flex-wrap mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <a className="p-color" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone :</h6>
            <a className="p-color" href={`tel:${brand.phone}`}>
              {brand.phone}
            </a>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Address :</h6>
            <span className="p-color">{brand.address}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Strip({ items, href }: { items: string[]; href?: string }) {
  const row = (
    <div className="box">
      {items.map((item, i) => (
        <div key={i} className="item">
          <h4 className="d-flex align-items-center">
            <span>{item}</span>
            <span className="icon-img-50 ml-40">
              <img src="/assets/imgs/star.png" alt="" />
            </span>
          </h4>
        </div>
      ))}
    </div>
  );
  return (
    <div className="slide-har st1">
      {row}
      {row}
      {href && <Link href={href} className="overlay-link" aria-label="Contact us"></Link>}
    </div>
  );
}

export function Marq() {
  return (
    <section className="marq">
      <div className="main-marq lrg sub-bg pt-20 pb-20 shadow-off">
        <Strip items={marquee} />
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/images/coffee.jpg" alt="Hands holding freshly picked Ethiopian coffee cherries" />
              </div>
              <span className="icon"><i className="fas fa-seedling"></i></span>
              <span className="icon"><i className="fas fa-coffee"></i></span>
              <span className="icon"><i className="fas fa-truck"></i></span>
              <span className="icon"><i className="fas fa-globe-africa"></i></span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">Our Story</h6>
              <div className="text">
                <h4 className="mb-30">
                  For <span className="fw-200">26 years, AL-IMPEX</span> has been at the forefront of Ethiopia’s
                  economic growth.
                </h4>
                <p>{story.body}</p>
                <Link href="/about" className="underline main-color mt-30">
                  <span className="text">Our full story <i className="ti-arrow-top-right"></i></span>
                </Link>
                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    {story.stats.map((s) => (
                      <div className="col-md-6" key={s.label}>
                        <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                          <div>
                            <h3 className="fw-300 mb-10" data-count>{s.value}</h3>
                            <h6 className="p-color sub-title">{s.label}</h6>
                          </div>
                          <div className="ml-auto">
                            <div className="icon-img-40">
                              <img src="/assets/imgs/arw0.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Divisions() {
  return (
    <section id="divisions" className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Businesses</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Our <span className="fw-200">Divisions.</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="cards">
          {divisions.map((d) => (
            <div className="card-item sub-bg" key={d.title}>
              <div className="row">
                <div className="col-lg-5">
                  <div className="cont">
                    <div>
                      <div className="mb-15">
                        {d.tags.map((t) => (
                          <span className="tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <h4>{d.title}</h4>
                    </div>
                    <div>
                      <p>{d.summary}</p>
                      <Link href={`/divisions/${d.slug}`} className="underline mt-15">
                        <span className="text main-color sub-title">
                          Explore Division <i className="ti-arrow-top-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img">
                    <img src={d.image} alt={d.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            Founding member of the <span className="fw-600">Ethiopian Commodity Exchange</span>
          </h6>
        </div>
      </div>
    </section>
  );
}

export function Capacity() {
  return (
    <section id="capacity" className="my-skills section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                Capacity built to <br />
                <span className="opacity-7">feed and supply a nation.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          {capacity.map((c) => (
            <div className="col-lg-2 col-md-4 col-6" key={c.label}>
              <div className="item mb-30">
                <div className="box-bord">
                  <div className="img">
                    <img src={c.image} alt="" />
                  </div>
                  <span className="value" data-count>{c.value}</span>
                </div>
                <h6 className="fz-18">{c.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Export() {
  return (
    <section id="export" className="blog style2">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Export Quality</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  From Ethiopia <span className="fw-200">to the world.</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {exports.map((x, i) => (
            <div className="col-lg-4" key={x.title}>
              <div className={`item${i < exports.length - 1 ? " md-mb50" : ""}`}>
                <div className="info sub-title p-color d-flex align-items-center mb-20">
                  <div>Export</div>
                  <div className="ml-30">{x.tag}</div>
                </div>
                <div className="img fit-img">
                  <img src={x.image} alt={x.tag} />
                </div>
                <div className="cont pt-30">
                  <h5>{x.title}</h5>
                  <Link href={x.href} className="butn-crev d-flex align-items-center mt-30">
                    <span className="hover-this">
                      <span className="circle hover-anim">
                        <i className="ti-arrow-top-right"></i>
                      </span>
                    </span>
                    <span className="text">Learn more</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallMarq() {
  return (
    <section className="call-marq section-padding o-hidden">
      <div className="main-marq lrg sub-bg pt-20 pb-20">
        <Strip items={Array(6).fill("Get In Touch")} href="/contact" />
      </div>
      <div className="main-marq bord-item">
        <div className="slide-har st2">
          {[0, 1].map((k) => (
            <div className="box" key={k}>
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="item">
                  <h4 className="d-flex align-items-center">
                    <span>Contact Us</span>
                  </h4>
                </div>
              ))}
            </div>
          ))}
          <Link href="/contact" className="overlay-link" aria-label="Contact us"></Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo md-mb80">
              <Logo />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                {brand.full} <br /> {brand.address}
              </h6>
              <h6 className="mt-30 mb-15">
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </h6>
              <a href={`tel:${brand.phone}`} className="underline">
                <span className="fz-22 main-color">{brand.phone}</span>
              </a>
              <p className="fz-14 opacity-7 mt-15">
                {brand.hours.join(" · ")}
              </p>
              <p className="fz-14 opacity-7">
                PBX: {brand.pbx} · Fax: {brand.fax}
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Quick Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15"><Link href="/about">About Us</Link></li>
                <li className="mb-15"><Link href="/products">Our Products</Link></li>
                <li className="mb-15"><Link href="/locations">Locations</Link></li>
                <li><Link href="/contact">Send a Message</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column">
              <h6 className="sub-title mb-30">Our Brands</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15"><a href="https://wezam-webzite.vercel.app/" target="_blank" rel="noreferrer">Wezam Coffee</a></li>
                <li className="mb-15"><a href="https://zala-nine.vercel.app/" target="_blank" rel="noreferrer">Zala</a></li>
                <li className="mb-15">Novus Manufacturing</li>
                <li>Sunvito</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">© {brand.full}. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

// ---- Our own sections (not from the template) ----

export function ValueChain() {
  return (
    <section className="chain section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <span className="sub-title main-color mb-5">How we work</span>
          <h3 className="fw-600 fz-50 text-u d-rotate wow">
            <span className="rotate-text">
              From farm <span className="fw-200">to market.</span>
            </span>
          </h3>
        </div>
        <ol className="chain-steps">
          <li className="chain-line" aria-hidden="true">
            <span className="chain-fill"></span>
          </li>
          {chain.map((c, i) => (
            <li className="chain-step" key={c.title}>
              <span className="chain-dot">
                <i className={`fas ${c.icon}`}></i>
              </span>
              <span className="chain-num">0{i + 1}</span>
              <h5>{c.title}</h5>
              <p>{c.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PageHeader({ bold, light, image, crumb }: { bold: string; light?: string; image: string; crumb?: string }) {
  return (
    <header className="page-header bg-img section-padding valign" style={{ backgroundImage: `url('${image}')` }} data-overlay-dark="8">
      <div className="container pt-80">
        <div className="text-center">
          <p className="crumb sub-title mb-15">
            <Link href="/">Home</Link> / {crumb ?? `${bold} ${light ?? ""}`}
          </p>
          <h1 className="text-u ls1 fz-80">
            {bold} {light && <span className="fw-200">{light}</span>}
          </h1>
        </div>
      </div>
    </header>
  );
}

export function Numbers() {
  return (
    <section className="numbers-crev section-padding o-hidden">
      <div className="container">
        <div className="row lg-marg justify-content-center">
          {story.numbers.map((n) => (
            <div className="col-lg-4 col-md-6" key={n.label}>
              <div className="item text-center md-mb50">
                <div className="o-hidden">
                  <h3 className="stroke" data-count>{n.value}</h3>
                </div>
                <h6 className="p-color sub-title">{n.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
