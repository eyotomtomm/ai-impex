import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/Sections";
import { ContactForm } from "@/components/Interactive";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Al-Impex Business PLC",
  description: "Have questions or want to learn more about us? We’d love to hear from you.",
};

export default function ContactPage() {
  return (
    <Shell>
      <PageHeader bold="Get In" light="Touch" image="/images/office.jpg" crumb="Contact" />
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 valign">
              <div className="sec-head info-box full-width md-mb80">
                <div className="phone fz-30 fw-600 underline main-color">
                  <a href={`tel:${brand.phone}`}>{brand.phone}</a>
                </div>
                <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                  <h6 className="mb-15">Email</h6>
                  <p><a href={`mailto:${brand.email}`}>{brand.email}</a></p>
                </div>
                <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                  <h6 className="mb-15">Business Hours</h6>
                  {brand.hours.map((h) => (
                    <p key={h}>{h}</p>
                  ))}
                </div>
                <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                  <h6 className="mb-15">Fax & PBX</h6>
                  <p>Fax: {brand.fax}</p>
                  <p>PBX: {brand.pbx}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1 valign">
              <div className="full-width">
                <div className="sec-head mb-50">
                  <h6 className="sub-title main-color mb-15">We’d love to hear from you</h6>
                  <h3 className="text-u ls1">
                    Send us a <span className="fw-200">message</span>
                  </h3>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
