import { Effects } from "@/components/Effects";
import { Navbar } from "@/components/Navbar";
import { About, CallMarq, Capacity, Chrome, Divisions, Export, Footer, Header, Marq } from "@/components/Sections";
import { Brands, Values } from "@/components/Sliders";

export default function Home() {
  return (
    <>
      <Chrome />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Marq />
            <About />
            <Divisions />
            <Capacity />
            <Values />
            <Brands />
            <Export />
            <CallMarq />
          </main>
          <Footer />
        </div>
      </div>
      <Effects />
    </>
  );
}
