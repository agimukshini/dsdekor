import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

export function CoverageSection() {
  return (
    <Section id="zone" labelledBy="zone-titre">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-xl">
            <h2 id="zone-titre" className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              DS DEKOR intervient partout en Haute-Savoie / Pays de Gex
            </h2>
            <p className="mt-4 text-muted">
              Vous avez un projet de rénovation, d'aménagement, de nettoyage ou de déménagement ? Contactez-nous
              pour discuter de vos besoins et de votre localisation.
            </p>
            <p className="mt-8 font-display text-xl font-semibold">Zone d'intervention : Haute-Savoie / Pays de Gex</p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <svg viewBox="0 0 160 180" className="h-56 w-48 text-ink" role="img" aria-label="Zone d'intervention Haute-Savoie et Pays de Gex">
              <polygon
                points="78,12 132,42 128,108 86,158 28,132 18,78 40,36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
              />
              <circle cx="118" cy="148" r="7" fill="none" stroke="#B28A58" strokeWidth="1.25" />
              <text x="28" y="88" fill="currentColor" fontFamily="Manrope, sans-serif" fontSize="10" letterSpacing="1">
                HAUTE-SAVOIE
              </text>
              <text x="36" y="106" fill="currentColor" fontFamily="Manrope, sans-serif" fontSize="10" letterSpacing="1">
                PAYS DE GEX
              </text>
            </svg>
          </div>
        </div>
      </Container>
    </Section>
  );
}
