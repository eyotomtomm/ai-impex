import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/Sections";
import { LocationsList } from "@/components/Interactive";

export const metadata: Metadata = {
  title: "Locations | Al-Impex Business PLC",
  description: "Where Al-Impex works: Addis Ababa, Adama, Legatafo, Kality and Kefa Zone.",
};

export default function LocationsPage() {
  return (
    <Shell>
      <PageHeader bold="Our" light="Locations" image="/images/agro-flora.jpg" />
      <LocationsList />
    </Shell>
  );
}
