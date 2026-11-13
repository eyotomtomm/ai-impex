import { Shell } from "@/components/Shell";
import { About, Capacity, Divisions, Export, Header, Marq, ValueChain } from "@/components/Sections";
import { Brands, Values } from "@/components/Sliders";

export default function Home() {
  return (
    <Shell>
      <Header />
      <Marq />
      <About />
      <Divisions />
      <ValueChain />
      <Capacity />
      <Values />
      <Brands />
      <Export />
    </Shell>
  );
}
