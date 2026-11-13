// All site copy lives here, taken from al-impex.com. Edit text, numbers and contacts in one place.

export const brand = {
  name: "Al-Impex",
  full: "Al-Impex Business PLC",
  tagline: "Agro-processing, manufacturing & trade",
  email: "info@al-impex.com",
  phone: "0115622000",
  pbx: "0115621525",
  fax: "0115622022",
  address: "Addis Ababa, Ethiopia",
  hours: ["Mon – Fri: 8:30 AM – 5:30 PM", "Saturday: 8:30 AM – 12:30 PM"],
};

export const marquee = [
  "Edible Oils",
  "Wezam Coffee",
  "Oil Seeds",
  "Pulses",
  "Spices",
  "FMCG Distribution",
  "Machinery Leasing",
  "Animal Health",
];

export const story = {
  intro:
    "Discover our mission to promote excellence and innovation in dynamic markets. We are committed to delivering impactful solutions that drive growth and transformation.",
  body: "We started as a small commodity trading company with a mission to bridge market gaps for hardworking farmers. By championing Ethiopia's organic, high-quality agricultural products on the global stage, we uplifted smallholder farmers and fuelled a revolution in the agricultural sector. Our journey led to Ethiopia’s first cash-and-carry centre and the Route-to-Market (RTM) system.",
  full: [
    "For 26 years, AL-IMPEX has been at the forefront of Ethiopia’s economic growth, starting as a small commodity trading company with a mission to bridge market gaps for hardworking farmers. By championing Ethiopia's organic, high-quality agricultural products on the global stage, we uplifted smallholder farmers and fuelled a revolution in the agricultural sector.",
    "The founder and CEO of Al-Impex played a pivotal role in establishing the Ethiopian Commodity Exchange (ECX), a landmark public-private initiative that connects surplus agricultural regions with areas facing shortages. This visionary contribution has revolutionised Ethiopia’s agricultural economy.",
    "Our journey led to innovations like Ethiopia’s first cash-and-carry centre, a distribution network of over 22,000 outlets, and the Route-to-Market (RTM) system. Five years ago, we expanded into FMCG manufacturing, agro-processing, and agricultural development, creating a diverse portfolio that includes edible oil factories, coffee processing plants, and logistics infrastructure.",
  ],
  stats: [
    { value: "22,000+", label: "Distribution outlets" },
    { value: "3,400", label: "Farmers supported this year" },
  ],
  numbers: [
    { value: "26", label: "Years in business" },
    { value: "22K+", label: "Distribution outlets" },
    { value: "3,400", label: "Farmers supported" },
  ],
};

type Item = { title: string; body: string };
export type Division = {
  slug: string;
  title: string;
  brand?: string;
  tags: string[];
  summary: string;
  headline: string;
  body: string[];
  list?: string[];
  stats?: { value: string; label: string }[];
  items?: Item[];
  image: string; // card + side image
  header: string; // page header background
  site?: string;
};

export const divisions: Division[] = [
  {
    slug: "edible-oils",
    title: "Edible Oils",
    brand: "Novus Manufacturing",
    tags: ["Palm Olein", "Sunflower", "Soybean"],
    summary:
      "Our Adama factory runs a 460TPD fractionation plant for palm olein, a 55TPD refinery each for soybean and sunflower, and 60TPD of oil-seed crushing, 100km from Addis.",
    headline: "Premium sunflower, palm & soybean oil.",
    body: [
      "Our company specialises in high-quality oil production at our Adama factory, distributing our products to local retailers and hotels. This ensures top-notch quality for our local market, supporting both our company and the community.",
      "Al-Impex takes pride in offering premium manufacturing solutions tailored to meet the needs of our customers. Our edible oil factory has a 460TPD fractionation plant for palm olein, a 55TPD refinery each for soybean and sunflower, and an oil-seed crushing capacity of 60TPD in Adama town, 100km from the capital.",
    ],
    list: ["Palm olein fractionation", "Soybean refining", "Sunflower refining", "Oil-seed crushing", "Delivery service"],
    stats: [
      { value: "460TPD", label: "Palm olein fractionation" },
      { value: "60TPD", label: "Oil-seed crushing" },
    ],
    items: [
      { title: "Sunflower Oil", body: "Rich in Vitamin E and ideal for healthy cooking." },
      { title: "Palm Oil", body: "Perfect for frying with a high smoke point." },
      { title: "Soybean Oil", body: "A versatile oil for everyday cooking and baking." },
      {
        title: "Delivery Service",
        body: "Reliable, efficient delivery so products reach you on time, in perfect condition and fresh.",
      },
    ],
    image: "/images/fabrica.jpg",
    header: "/images/factory.jpg",
  },
  {
    slug: "wezam-coffee",
    title: "Wezam Coffee",
    tags: ["Export", "Washed Coffee"],
    summary:
      "The best varieties of Ethiopian coffee, prepared to international standards at our Legatafo plant and quality-checked by our own lab and liquoring service.",
    headline: "The best varieties of Ethiopian coffee.",
    body: [
      "We provide our customers with the best varieties of high-quality Ethiopian coffee. Al-Impex is a founding member of the Ethiopian Commodity Exchange.",
      "The processing department within the division prepares the coffee according to international standards. Our lab and liquoring service tests and guarantees the quality of our coffee to meet our customers’ expectations. Our processing plant is located at Legatafo.",
    ],
    list: ["Arabica coffee", "Washed coffee", "In-house lab & liquoring", "Legatafo processing plant"],
    items: [
      { title: "Arabica Coffee", body: "Delicately flavoured and sourced from high-altitude farms." },
      { title: "Washed Coffee", body: "Processed to international standards at our Legatafo plant." },
      { title: "Quality Lab", body: "Our lab and liquoring service tests and guarantees every lot." },
    ],
    image: "/images/cofeee.jpg",
    header: "/images/cupping.jpg",
    site: "https://wezam-webzite.vercel.app/",
  },
  {
    slug: "zala",
    title: "Zala",
    brand: "Oil Seeds, Pulses & Spices",
    tags: ["Export", "Contract Farming"],
    summary:
      "A 12 ton/hr processing plant in Kality, Addis Ababa, exporting oil seeds, pulses and spices. Supported 3,400 farmers this year, with 22,000 MT expected output.",
    headline: "Export of oil seeds, pulses & spices.",
    body: [
      "Our company is a major exporter of agricultural products, mainly oil seeds and pulses from Ethiopia to the global market. Our high-quality exports bring vital foreign currency both to our company and to our country.",
      "Zala owns a 12 ton/hr processing plant in Kality, Addis Ababa, sourcing OPS products through contract farming and out-growers.",
    ],
    list: ["Oil seeds", "Pulses", "Spices", "Contract farming & out-growers"],
    stats: [
      { value: "12T/hr", label: "Processing capacity" },
      { value: "3,400", label: "Farmers supported this year" },
    ],
    items: [
      { title: "Oil Seeds", body: "Rich in healthy fats and antioxidants." },
      { title: "Pulses", body: "Protein-packed pulses for a wide range of dishes." },
      { title: "Spices", body: "Ethiopian spices known for their flavour and health benefits." },
    ],
    image: "/images/tafoWarehouse.jpg",
    header: "/images/year_of_pulses.jpg",
    site: "https://zala-nine.vercel.app/",
  },
  {
    slug: "fmcg-distribution",
    title: "FMCG Distribution",
    brand: "Sunvito",
    tags: ["Route-to-Market", "Cash & Carry"],
    summary:
      "A network of over 22,000 outlets that delivers the products people need, when and where they need them, from retailers to hotels.",
    headline: "Delivering not just products but possibilities.",
    body: [
      "We connect communities with high-quality goods, helping them achieve efficiency, reliability, and success in their endeavours.",
      "With a focus on efficiency and quality, we distribute our premium products. Our extensive network and commitment to excellence allow us to meet the demands of diverse industries while maintaining the highest standards of reliability and customer satisfaction. Al-Impex is not just a distributor; we are a reliable partner invested in your success.",
    ],
    list: ["Ethiopia’s first cash-and-carry centre", "Route-to-Market (RTM) system", "Retail, hotel & wholesale supply"],
    stats: [
      { value: "22,000+", label: "Outlets served" },
      { value: "1st", label: "Cash-and-carry in Ethiopia" },
    ],
    image: "/images/distribution.png",
    header: "/images/sunvito-supermarket.jpg",
  },
  {
    slug: "agro-flora",
    title: "Agro-Flora (Kefa Zone)",
    tags: ["Agriculture", "Community"],
    summary: "Empowering farmers with sustainable practices and innovation, we foster thriving communities for a prosperous future.",
    headline: "Thriving communities for a prosperous future.",
    body: [
      "Empowering farmers with sustainable practices and innovation, we foster thriving communities for a prosperous future.",
      "We strive to help our partners succeed while uplifting the communities we touch. Blending local insight with global expertise, we are committed to making a difference, not just in industries but in the lives of people. Together, we’re shaping a future defined by progress, excellence, and shared prosperity.",
    ],
    image: "/images/farmers.jpg",
    header: "/images/agro-flora.jpg",
  },
  {
    slug: "animal-health",
    title: "Animal Health",
    brand: "Zoetis",
    tags: ["Veterinary", "Zoetis"],
    summary: "Ensuring the well-being of animals with trusted veterinary medicines: antibiotics, vitamins and vaccines.",
    headline: "Ensuring the well-being of animals.",
    body: [
      "Ensuring the well-being of animals with our trusted veterinary medicines.",
      "More than products, we craft solutions that empower industries and individuals. Our work uplifts local economies, promotes self-reliance, and delivers world-class excellence.",
    ],
    items: [
      { title: "Antibiotics", body: "Effective solutions to treat animal infections." },
      { title: "Vitamins & Supplements", body: "Boost animal health and productivity." },
      { title: "Vaccines", body: "Prevention is better than cure with our reliable vaccines." },
    ],
    image: "/images/animal-health.jpg",
    header: "/images/vitamins.jpg",
  },
  {
    slug: "machinery-leasing",
    title: "Machinery Leasing",
    tags: ["Equipment", "Leasing"],
    summary:
      "More than products, we craft solutions that empower industries and individuals, uplifting local economies and promoting self-reliance.",
    headline: "Solutions that empower industries.",
    body: [
      "More than products, we craft solutions that empower industries and individuals. Our work uplifts local economies, promotes self-reliance, and delivers world-class excellence.",
    ],
    image: "/images/tyres.webp",
    header: "/images/machinery.jpg",
  },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Divisions", href: "/divisions/edible-oils", children: divisions.map((d) => ({ label: d.title, href: `/divisions/${d.slug}` })) },
  { label: "Our Products", href: "/products" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

// Our own addition: how a product moves through the group, built from facts on al-impex.com.
export const chain = [
  { icon: "fa-seedling", title: "Grow", body: "Contract farming and out-growers. 3,400 smallholder farmers supported this year." },
  { icon: "fa-industry", title: "Process", body: "Oil refining in Adama, seed cleaning in Kality, coffee processing at Legatafo." },
  { icon: "fa-flask", title: "Test", body: "Our lab and liquoring service checks every lot against international standards." },
  { icon: "fa-truck", title: "Distribute", body: "Route-to-Market delivery to more than 22,000 outlets across Ethiopia." },
  { icon: "fa-ship", title: "Export", body: "Coffee, oil seeds, pulses and spices shipped to buyers worldwide." },
];

export const locations = [
  { place: "Addis Ababa", role: "Head office", body: "Group headquarters, sales and export desk.", image: "/images/office.jpg", href: "/contact" },
  { place: "Adama", role: "Edible oil factory", body: "460TPD palm olein fractionation, soybean and sunflower refining, 100km from Addis.", image: "/images/factory.jpg", href: "/divisions/edible-oils" },
  { place: "Legatafo", role: "Coffee processing plant", body: "Wezam Coffee is prepared, cupped and graded here for export.", image: "/images/cupping.jpg", href: "/divisions/wezam-coffee" },
  { place: "Kality", role: "Zala processing plant", body: "12 ton/hr cleaning line for oil seeds, pulses and spices.", image: "/images/tafoWarehouse.jpg", href: "/divisions/zala" },
  { place: "Kefa Zone", role: "Agro-Flora farms", body: "Agricultural development with farming communities in the south-west.", image: "/images/agro-flora.jpg", href: "/divisions/agro-flora" },
];

export const products = [
  {
    title: "Edible Oil",
    body: "Our edible oils are processed with care to ensure the highest quality and nutritional value.",
    slug: "edible-oils",
    items: [
      { title: "Sunflower Oil", body: "Rich in Vitamin E and ideal for healthy cooking.", image: "/images/sunflowerOil.jpg" },
      { title: "Palm Oil", body: "Perfect for frying with a high smoke point.", image: "/images/palmoil.jpg" },
      { title: "Soybean Oil", body: "A versatile oil for everyday cooking and baking.", image: "/images/soyabean.jpg" },
    ],
  },
  {
    title: "Wezam Coffee",
    body: "Experience the rich aroma and exceptional taste of our premium coffee.",
    slug: "wezam-coffee",
    items: [
      { title: "Arabica Coffee", body: "Delicately flavoured and sourced from high-altitude farms.", image: "/images/coffee.jpg" },
      { title: "Washed Coffee", body: "Prepared to international standards at Legatafo.", image: "/images/cofeee.jpg" },
      { title: "Roasted Coffee", body: "Lab-tested and liquored to guarantee every cup.", image: "/images/roasting.jpg" },
    ],
  },
  {
    title: "Zala: Oil Seeds, Pulses & Spices",
    body: "We supply premium oil seeds, pulses, and spices to meet your culinary and nutritional needs.",
    slug: "zala",
    items: [
      { title: "Oil Seeds", body: "Rich in healthy fats and antioxidants.", image: "/images/oilseeds.jpg" },
      { title: "Pulses", body: "A protein-packed pulse for various dishes.", image: "/images/pulses.jpg" },
      { title: "Spices", body: "A spice known for its flavour and health benefits.", image: "/images/oilseeds-spices.jpg" },
    ],
  },
  {
    title: "Animal Health Medicines",
    body: "Ensuring the well-being of animals with our trusted veterinary medicines.",
    slug: "animal-health",
    items: [
      { title: "Antibiotics", body: "Effective solutions to treat animal infections.", image: "/images/zoetis.png" },
      { title: "Vitamins & Supplements", body: "Boost animal health and productivity.", image: "/images/vitamins.jpg" },
      { title: "Vaccines", body: "Prevention is better than cure with our reliable vaccines.", image: "/images/animal-health.jpg" },
    ],
  },
];

export const capacity = [
  { value: "460TPD", label: "Palm Olein", image: "/images/palmoil.jpg" },
  { value: "55TPD", label: "Sunflower Oil", image: "/images/sunflowerOil.jpg" },
  { value: "55TPD", label: "Soybean Oil", image: "/images/soyabean.jpg" },
  { value: "60TPD", label: "Seed Crushing", image: "/images/oilseeds.jpg" },
  { value: "12T/hr", label: "OPS Processing", image: "/images/pulses.jpg" },
  { value: "22K", label: "Outlets Served", image: "/images/spices.jpg" },
];

export const values = [
  {
    title: "Promoting Development",
    body: "We focus on sustainable growth, fostering innovation, and creating opportunities that benefit both our partners and the communities we serve.",
  },
  {
    title: "Visionary Leadership",
    body: "Our founder played a pivotal role in establishing the Ethiopian Commodity Exchange (ECX), connecting surplus regions with areas facing shortages.",
  },
  {
    title: "Economic Transformation",
    body: "From a small trading business to a leader in agro-processing, manufacturing and distribution, we have shaped Ethiopia’s economy for 26 years.",
  },
  {
    title: "Addressing Market Failures",
    body: "Founded to bridge market gaps, we uplifted smallholder farmers by marketing Ethiopia's high-quality organic products internationally.",
  },
  {
    title: "Advocacy and Promotion",
    body: "We promote Ethiopian products globally through trade shows and initiatives that benefit the nation.",
  },
];

export const brands = ["Novus", "Sunvito", "Wezam", "Zala", "Zoetis"];

export const exports = [
  { tag: "Coffee", title: "Wezam Coffee: Ethiopia’s finest, cupped and certified", image: "/images/coffee.jpg", href: "/divisions/wezam-coffee" },
  { tag: "Oil Seeds & Pulses", title: "Sesame, linseed, beans and pulses for global buyers", image: "/images/oilseeds-spices.jpg", href: "/divisions/zala" },
  { tag: "Spices", title: "Export-quality Ethiopian spices, handled with care", image: "/images/pulses.jpg", href: "/divisions/zala" },
];
