import { LegalLayout, verifiedContact } from "./LegalLayout";

export function PrivacyPage() {
  return (
    <LegalLayout
      title="Politique de confidentialité | DS DEKOR"
      description="Politique de confidentialité de DS DEKOR. Les messages sont envoyés par e-mail ou WhatsApp et ne sont pas stockés par le site."
      path="/politique-de-confidentialite"
    >
      <p>
        Cette page décrit le traitement des informations que vous choisissez d'envoyer à DS DEKOR depuis ce site.
      </p>
      <h2 className="pt-4 font-display text-xl font-semibold text-ink">E-mail et WhatsApp</h2>
      <p>
        Ce site ne contient pas de formulaire. Pour écrire à DS DEKOR, vous utilisez votre messagerie ou WhatsApp. Le
        site n'enregistre pas ces échanges.
      </p>
      <h2 className="pt-4 font-display text-xl font-semibold text-ink">Destinataire</h2>
      {verifiedContact()}
      <p>
        Pour une question sur vos informations, écrivez à{" "}
        <a href="mailto:ds.dekor74@outlook.fr">ds.dekor74@outlook.fr</a>.
      </p>
      <h2 className="pt-4 font-display text-xl font-semibold text-ink">Cookies</h2>
      <p>Ce site n'utilise pas de cookies de mesure d'audience ni de publicité.</p>
    </LegalLayout>
  );
}
