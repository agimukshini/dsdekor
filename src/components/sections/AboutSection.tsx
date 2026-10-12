import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

export function AboutSection() {
  return (
    <Section id="a-propos" labelledBy="apropos-titre" className="bg-mist">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <img
            src="/showroom/habillage-cheminee.jpg"
            alt="Habillage blanc d'une cheminée avec niches, dans un intérieur en finition."
            width={720}
            height={960}
            loading="lazy"
            decoding="async"
            className="h-auto w-full"
          />
          <div>
            <h2 id="apropos-titre" className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              À propos de DS DEKOR
            </h2>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                Chez DS DEKOR, nous accompagnons les particuliers et les professionnels dans leurs projets de
                rénovation, d'aménagement, de nettoyage et de déménagement.
              </p>
              <p>
                Nous accordons une importance particulière à la qualité du travail, au respect de vos attentes et aux
                finitions.
              </p>
              <p>
                Chaque intervention est réalisée avec sérieux, soin et professionnalisme, afin de vous apporter un
                résultat à la hauteur de vos exigences.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
