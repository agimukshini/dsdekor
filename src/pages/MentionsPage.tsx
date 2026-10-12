import { LegalLayout, verifiedContact } from "./LegalLayout";

export function MentionsPage() {
  return (
    <LegalLayout
      title="Mentions légales | DS DEKOR"
      description="Mentions légales du site DS DEKOR. Les informations d'immatriculation encore manquantes sont signalées."
      path="/mentions-legales"
    >
      <p>Le site présente les prestations de DS DEKOR, entreprise de rénovation, finition, nettoyage et déménagement.</p>
      <h2 className="pt-4 font-display text-xl font-semibold text-ink">Éditeur</h2>
      {verifiedContact()}
      <p>
        Le numéro SIRET et les informations d'hébergement ne sont pas affichés tant qu'ils n'ont pas été fournis.
      </p>
    </LegalLayout>
  );
}
