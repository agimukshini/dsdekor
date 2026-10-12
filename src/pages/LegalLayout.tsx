import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { company } from "../data/company";
import { missingLegalFields } from "../data/legal";
import { Container } from "../components/layout/Container";
import { SiteShell } from "../components/layout/SiteShell";
import { PageMeta } from "../components/seo/PageMeta";

export function LegalLayout({
  title,
  description,
  path,
  children,
}: {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <SiteShell>
      <PageMeta title={title} description={description} path={path} />
      <Container className="py-16 md:py-20">
        <p className="text-sm text-muted">
          <Link to="/#accueil">Accueil</Link>
          <span aria-hidden="true"> / </span>
          {title.replace(" | DS DEKOR", "")}
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {title.replace(" | DS DEKOR", "")}
        </h1>
        <div className="mt-8 max-w-3xl space-y-4 text-muted">{children}</div>
        <section className="mt-10 max-w-3xl" aria-labelledby="champs-manquants">
          <h2 id="champs-manquants" className="font-display text-xl font-semibold text-ink">
            Informations obligatoires non encore communiquées
          </h2>
          <p className="mt-3 text-sm text-muted">
            Ces éléments doivent être complétés avec des informations vérifiées avant la mise en ligne définitive. Ils
            ne sont pas inventés.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {missingLegalFields.map((field) => (
              <li key={field} className="border border-line px-3 py-2 text-sm">
                <span className="block text-ink">{field}</span>
                <span className="text-muted">À compléter</span>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </SiteShell>
  );
}

export function verifiedContact() {
  return (
    <ul className="space-y-1 text-ink">
      <li>{company.name}</li>
      <li>
        Adresse :{" "}
        <a href={company.addressMaps} target="_blank" rel="noopener noreferrer">
          {company.address}
        </a>
      </li>
      <li>
        Téléphone : <a href={`tel:${company.phoneTel}`}>{company.phoneInternational}</a>
      </li>
      <li>
        E-mail : <a href={`mailto:${company.email}`}>{company.email}</a>
      </li>
      <li>{company.coverageLabel}</li>
    </ul>
  );
}
