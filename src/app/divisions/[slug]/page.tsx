/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/Sections";
import { divisions } from "@/lib/content";

// Every division is prerendered below, so there is no loading state worth streaming.
export const instant = false;

export function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/divisions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = divisions.find((x) => x.slug === slug);
  return d ? { title: `${d.title} | Al-Impex Business PLC`, description: d.summary } : {};
}

export default async function DivisionPage({ params }: PageProps<"/divisions/[slug]">) {
  const { slug } = await params;
  const i = divisions.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const d = divisions[i];
  const next = divisions[(i + 1) % divisions.length];
  const [bold, ...rest] = d.title.split(" ");

  return (
    <Shell>
      <PageHeader bold={bold} light={rest.join(" ")} image={d.header} crumb={`Divisions / ${d.title}`} />
      <section className="intro section-padding">
        <div className="container">
          <div className="row lg-marg">
            <div className="col-lg-8">
              <div className="row lg-marg">
                <div className="col-md-6">
                  <h6 className="sub-title main-color mb-15">{d.brand ?? "Division"}</h6>
                  <h3 className="mb-30">{d.headline}</h3>
                  {d.site && (
                    <a href={d.site} target="_blank" rel="noreferrer" className="butn butn-sm butn-bord radius-30 mb-30">
                      <span className="text">Visit {bold} website</span>
                    </a>
                  )}
                </div>
                <div className="col-md-6">
                  <div className="text">
                    {d.body.map((p) => (
                      <p className="mb-15" key={p.slice(0, 24)}>{p}</p>
                    ))}
                    {d.list && (
                      <ul className="rest dot-list mt-30">
                        {d.list.map((l) => (
                          <li className="mb-10" key={l}>{l}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              {d.stats && (
                <div className="numbers mt-80 md-mb50">
                  <div className="row lg-marg">
                    {d.stats.map((s) => (
                      <div className="col-md-6" key={s.label}>
                        <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20 sm-mb30">
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
              )}
            </div>
            <div className="col-lg-4">
              <div className="img-full fit-img">
                <img className="reveal-img wow" src={d.image} alt={d.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {d.items && (
        <section className="feat section-padding pt-0">
          <div className="container">
            <div className="sec-head mb-80">
              <h2 className="fw-600 fz-70 text-u d-rotate wow">
                <span className="rotate-text">
                  What we <span className="fw-200">offer</span>
                </span>
              </h2>
            </div>
            <div className="row">
              {d.items.map((it, n) => (
                <div className={d.items!.length === 4 ? "col-lg-3 col-md-6" : "col-lg-4 col-md-6"} key={it.title}>
                  <div className="item-box radius-15 md-mb50">
                    <span className="mb-30 p-color">0{n + 1} .</span>
                    <h6 className="mb-20">{it.title}</h6>
                    <p>{it.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Link href={`/divisions/${next.slug}`} className="next-division" style={{ backgroundImage: `url('${next.header}')` }}>
        <span className="sub-title main-color">Next division</span>
        <span className="title">{next.title}</span>
        <i className="ti-arrow-right"></i>
      </Link>
    </Shell>
  );
}
