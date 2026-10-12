export const company = {
  name: "DS DEKOR",
  slogan: "Votre projet, notre savoir-faire",
  secondarySlogan: "Votre projet, notre signature",
  phoneDisplay: "+33 7 58 30 29 99",
  phoneInternational: "+33 7 58 30 29 99",
  phoneTel: "+33758302999",
  whatsappUrl: "https://wa.me/33758302999",
  email: "ds.dekor74@outlook.fr",
  address: "1, Impasse des Écrins, 74100 Vétraz-Monthoux",
  addressMaps: "https://www.google.com/maps/search/?api=1&query=1%20Impasse%20des%20%C3%89crins%2074100%20V%C3%A9traz-Monthoux",
  coverageLabel: "Intervention partout en Haute-Savoie / Pays de Gex",
  coverageZone: "Zone d'intervention : Haute-Savoie / Pays de Gex",
  audience: "Particuliers et professionnels",
  defaultTitle: "DS DEKOR | Rénovation, Peinture, Carrelage et Nettoyage en Haute-Savoie",
  defaultDescription:
    "DS DEKOR vous accompagne en Haute-Savoie et dans le Pays de Gex pour vos travaux de peinture, plâtrerie, carrelage, aménagement extérieur, nettoyage et déménagement. Demandez votre devis.",
} as const;

export const siteUrl = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "");
