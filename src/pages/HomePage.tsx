import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteShell } from "../components/layout/SiteShell";
import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { CoverageSection } from "../components/sections/CoverageSection";
import { GallerySection } from "../components/sections/GallerySection";
import { Hero } from "../components/sections/Hero";
import { ServicesSection } from "../components/sections/ServicesSection";
import { WhySection } from "../components/sections/WhySection";
import { PageMeta } from "../components/seo/PageMeta";
import { company } from "../data/company";

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, [hash]);

  return (
    <SiteShell>
      <PageMeta title={company.defaultTitle} description={company.defaultDescription} path="/" />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WhySection />
      <GallerySection />
      <CoverageSection />
      <ContactSection />
    </SiteShell>
  );
}
