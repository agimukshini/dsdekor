import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { SiteShell } from "../components/layout/SiteShell";
import { PageMeta } from "../components/seo/PageMeta";

export function NotFoundPage() {
  return (
    <SiteShell>
      <PageMeta
        title="Page introuvable | DS DEKOR"
        description="Cette adresse ne correspond à aucune page du site DS DEKOR."
        path="/404"
      />
      <Container className="py-20">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Page introuvable</h1>
        <p className="mt-4 max-w-xl text-muted">Cette adresse ne correspond à aucune page.</p>
        <Link to="/" className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-accent-ink">
          Retour à l'accueil
        </Link>
      </Container>
    </SiteShell>
  );
}
