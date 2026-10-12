import { ArrowRight, Mail } from "lucide-react";
import { company } from "../../data/company";
import { ButtonLink } from "../ui/ButtonLink";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { Container } from "../layout/Container";

export function Hero() {
  return (
    <section id="accueil" aria-labelledby="hero-titre" className="relative isolate min-h-[34rem] overflow-hidden bg-night text-white md:min-h-[38rem]">
      <img
        src="/hero/facade.jpg"
        alt="Visuel d'illustration : façade d'une maison contemporaine. Ce n'est pas un chantier DS DEKOR."
        width={760}
        height={300}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/80 to-night/25 md:bg-gradient-to-r md:from-night md:via-night/70 md:to-night/10" />
      <Container className="hero-panel relative flex min-h-[34rem] items-end py-14 md:min-h-[38rem] md:items-center md:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">Donnez vie à vos espaces</p>
          <h1 id="hero-titre" className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">Votre projet,</span>
            <span className="mt-1 block text-accent">notre savoir-faire</span>
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
            Peinture, plâtrerie, carrelage, aménagement extérieur, nettoyage et déménagement. DS DEKOR accompagne les
            particuliers et les professionnels dans leurs projets partout en France.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to={`mailto:${company.email}`} className="rounded-full px-6">
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Écrire un e-mail
            </ButtonLink>
            <ButtonLink to={company.whatsappUrl} variant="whatsapp" className="rounded-full px-6">
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              WhatsApp
            </ButtonLink>
            <ButtonLink to="/#services" variant="secondary" className="rounded-full px-6 text-white">
              Découvrir nos services
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <p className="mt-8 text-sm text-white/75">{company.coverageLabel}</p>
          <p className="mt-2 text-xs text-white/80">Visuel d'illustration</p>
        </div>
      </Container>
    </section>
  );
}
