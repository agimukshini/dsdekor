export const company = {
  name: "DS DEKOR",
  slogan: "Votre projet, notre savoir-faire",
  secondarySlogan: "Votre projet, notre signature",
  phoneDisplay: "+33 7 58 30 29 99",
  phoneInternational: "+33 7 58 30 29 99",
  phoneTel: "+33758302999",
  whatsappUrl: "https://wa.me/33758302999",
  email: "ds.dekor74@outlook.fr",
  address: "36, rue du Salève, 74100 Annemasse",
  addressMaps: "https://www.google.com/maps/search/?api=1&query=36%20rue%20du%20Sal%C3%A8ve%2074100%20Annemasse",
  coverageLabel: "Intervention partout en France",
  coverageZone: "Zone d'intervention : France",
  audience: "Particuliers et professionnels",
  defaultTitle: "DS DEKOR | Rénovation, Peinture, Carrelage et Nettoyage en France",
  defaultDescription:
    "DS DEKOR vous accompagne partout en France pour vos travaux de peinture, plâtrerie, carrelage, aménagement extérieur, nettoyage et déménagement. Demandez votre devis.",
} as const;

export const siteUrl = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "");
