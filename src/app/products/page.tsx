import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/Sections";
import { ProductExplorer } from "@/components/Interactive";

export const metadata: Metadata = {
  title: "Our Products | Al-Impex Business PLC",
  description: "Explore our diverse range of high-quality products: edible oils, Wezam coffee, oil seeds, pulses, spices and animal health medicines.",
};

export default function ProductsPage() {
  return (
    <Shell>
      <PageHeader bold="Our" light="Products" image="/images/oilseeds-spices.jpg" />
      <ProductExplorer />
    </Shell>
  );
}
