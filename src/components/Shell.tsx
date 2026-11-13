import { Effects } from "@/components/Effects";
import { Navbar } from "@/components/Navbar";
import { CallMarq, Chrome, Footer } from "@/components/Sections";

// Shared frame for every page: loader, cursor, nav, smooth-scroll wrapper, CTA strip and footer.
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <Chrome />
      <Navbar />
      <div id="smooth-wrapper" className="smooth-wrapper">
        <div id="smooth-content" className="smooth-content">
          <main className="main-bg o-hidden">
            {children}
            <CallMarq />
          </main>
          <Footer />
        </div>
      </div>
      <Effects />
    </div>
  );
}
