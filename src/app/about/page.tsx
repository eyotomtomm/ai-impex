/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Numbers, PageHeader, ValueChain } from "@/components/Sections";
import { Brands, Values } from "@/components/Sliders";
import { story } from "@/lib/content";

export const metadata: Metadata = { title: "About Us | Al-Impex Business PLC", description: story.intro };

export default function AboutPage() {
  return (
    <Shell>
      <PageHeader bold="About" light="Us" image="/images/hero.jpg" />
      <section className="page-intro section-padding pb-0">
        <div className="container">
          <div className="row md-marg">
            <div className="col-lg-6">
              <div className="img md-mb80">
                <div className="row">
                  <div className="col-6">
                    <img className="reveal-img wow" src="/images/cupping.jpg" alt="Coffee cupping at the Wezam lab" />
                    <div className="img-icon">
                      <img src="/assets/imgs/arw0.png" alt="" />
                    </div>
                  </div>
                  <div className="col-6 mt-40">
                    <img className="reveal-img wow" src="/images/fabrica.jpg" alt="Novus edible oil filling line" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 valign">
              <div className="cont">
                <h6 className="sub-title main-color mb-15">Our Story</h6>
                <h3 className="mb-30">
                  From a small <span className="fw-200">commodity trader</span> to a leader in{" "}
                  <span className="fw-200">agro-processing.</span>
                </h3>
                {story.full.map((p) => (
                  <p className="mb-15" key={p.slice(0, 24)}>{p}</p>
                ))}
                <Link href="/products" className="underline main-color mt-30">
                  <span className="text">Our Products <i className="ti-arrow-top-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Numbers />
      <Values />
      <ValueChain />
      <Brands />
    </Shell>
  );
}
