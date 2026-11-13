import type { Metadata } from "next";
import { brand } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${brand.full} | ${brand.tagline}`,
  description:
    "For 26 years Al-Impex has driven Ethiopia’s economy through edible oils, Wezam coffee, oil-seed and pulse exports, and FMCG distribution.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        {/* Template stylesheets are served as-is from /public so their relative font paths keep working.
            Root layout applies to every route, so the pages-router font/CSS warnings do not apply. */}
        {/* eslint-disable @next/next/no-css-tags, @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="/assets/css/plugins.css" precedence="default" />
        <link rel="stylesheet" href="/assets/css/style.css" precedence="default" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap"
          precedence="default"
        />
      </head>
      <body className="home-personal">{children}</body>
    </html>
  );
}
