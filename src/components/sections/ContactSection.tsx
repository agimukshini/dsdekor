import { Mail, MapPin } from "lucide-react";
import { company } from "../../data/company";
import { ButtonLink } from "../ui/ButtonLink";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

export function ContactSection() {
  return (
    <Section id="contact" labelledBy="contact-titre" className="bg-mist">
      <Container>
        <div className="max-w-2xl">
          <h2 id="contact-titre" className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Parlons de votre projet
          </h2>
          <p className="mt-4 text-muted">
            Vous souhaitez rénover un espace, réaliser des travaux de finition, organiser un nettoyage ou préparer un
            déménagement ? Écrivez à DS DEKOR par e-mail ou sur WhatsApp.
          </p>
          <dl className="mt-8 space-y-4">
            <div>
              <dt className="text-sm text-muted">Téléphone</dt>
              <dd className="font-display text-xl font-semibold">
                <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Adresse</dt>
              <dd className="font-medium">
                <a
                  href={company.addressMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2"
                >
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    36, rue du Salève
                    <br />
                    74100 Annemasse
                  </span>
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">E-mail</dt>
              <dd className="font-medium break-all">
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">WhatsApp</dt>
              <dd className="font-medium">
                <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {company.phoneInternational}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to={`mailto:${company.email}`}>
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Écrire un e-mail
            </ButtonLink>
            <ButtonLink to={company.whatsappUrl} variant="whatsapp">
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
