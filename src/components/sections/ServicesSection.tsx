import { Grid3x3, HardHat, KeyRound, LandPlot, Layers, Paintbrush, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { company } from "../../data/company";
import { serviceGroups, type ServiceIcon, type ServiceItem } from "../../data/services";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

const icons: Record<ServiceIcon, LucideIcon> = {
  paint: Paintbrush,
  plaster: Layers,
  tile: Grid3x3,
  outdoor: LandPlot,
  "site-clean": HardHat,
  "exit-clean": KeyRound,
  moving: Truck,
};

function CompactServiceCard({ service, groupTitle }: { service: ServiceItem; groupTitle: string }) {
  const Icon = icons[service.icon];
  return (
    <article className="flex h-full flex-col border border-line p-4">
      <p className="text-xs font-semibold tracking-[0.14em] text-accent-ink uppercase">{groupTitle}</p>
      <div className="mt-3 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-mist">
          <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
        </div>
        <h4 className="font-display text-base font-semibold">{service.title}</h4>
      </div>
      <p className="mt-2 text-sm leading-snug text-muted">{service.description}</p>
    </article>
  );
}

export function ServicesSection() {
  return (
    <Section id="services" labelledBy="services-titre">
      <Container>
        <div className="flex flex-col gap-1 lg:flex-row lg:items-baseline lg:gap-4">
          <h2 id="services-titre" className="shrink-0 font-display text-2xl font-semibold tracking-tight">
            Nos domaines d'intervention
          </h2>
          <p className="text-sm leading-snug text-muted xl:whitespace-nowrap">
            Des prestations adaptées à vos besoins, réalisées avec sérieux, précision et souci du détail.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {serviceGroups
            .filter((group) => group.layout === "pair")
            .flatMap((group) =>
              group.services.map((service) => (
                <CompactServiceCard key={service.id} service={service} groupTitle={group.title} />
              )),
            )}
        </div>

        <div className="mt-8">
          {serviceGroups
            .filter((group) => group.layout === "wide")
            .map((group) => (
              <div key={group.id}>
                <h3 className="border-t border-line pt-6 font-display text-sm font-semibold tracking-[0.16em] text-accent-ink uppercase">
                  {group.title}
                </h3>
                <div className="mt-6">
                  {group.services.map((service) => (
                    <article key={service.id} className="grid gap-6 bg-mist md:grid-cols-[auto_1fr] md:items-center md:p-6">
                      <div className="flex h-28 w-full items-center justify-center bg-paper md:h-full md:w-40">
                        <Truck className="h-8 w-8 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-display text-2xl font-semibold">{service.title}</h4>
                        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium">
                          {group.points?.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{service.description}</p>
                        <a href={`mailto:${company.email}`} className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-accent-ink">
                          Écrire un e-mail
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </Container>
    </Section>
  );
}
