import coverageMap from "../../assets/coverage-map.jpg";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

export function CoverageSection() {
  return (
    <Section id="zone" labelledBy="zone-titre" className="bg-mist">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
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
          <div className="justify-self-stretch lg:justify-self-end">
            <img
              src={coverageMap}
              alt="Carte de la zone d'intervention Haute-Savoie et Pays de Gex"
              className="h-auto w-full max-w-xl rounded-lg border border-line bg-paper object-contain shadow-sm"
              width={1536}
              height={1024}
              decoding="async"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
