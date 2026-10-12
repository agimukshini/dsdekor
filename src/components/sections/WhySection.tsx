import { DraftingCompass, MapPinned, MessageCircle, Ruler } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

const reasons: readonly { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Savoir-faire",
    text: "Une attention particulière portée à chaque étape de votre projet.",
    icon: DraftingCompass,
  },
  {
    title: "Travail soigné",
    text: "Des prestations réalisées avec précision et souci du détail.",
    icon: Ruler,
  },
  {
    title: "À votre écoute",
    text: "Une approche adaptée à vos attentes et à vos besoins.",
    icon: MessageCircle,
  },
  {
    title: "Intervention en Haute-Savoie / Pays de Gex",
    text: "Des prestations proposées aux particuliers et aux professionnels en Haute-Savoie et dans le Pays de Gex.",
    icon: MapPinned,
  },
];

export function WhySection() {
  return (
    <Section id="pourquoi" labelledBy="pourquoi-titre">
      <Container>
        <h2 id="pourquoi-titre" className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Pourquoi choisir DS DEKOR ?
        </h2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <li key={reason.title}>
              <reason.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{reason.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
