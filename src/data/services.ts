export type ServiceIcon = "paint" | "plaster" | "tile" | "outdoor" | "site-clean" | "exit-clean" | "moving";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
};

export type ServiceGroup = {
  id: string;
  title: string;
  layout: "pair" | "wide";
  points?: readonly string[];
  services: readonly ServiceItem[];
};

export const services = [
  {
    id: "peinture",
    title: "Peinture intérieure et extérieure",
    description:
      "Travaux de peinture, rénovation et rafraîchissement de vos espaces intérieurs et extérieurs, avec une attention particulière portée aux finitions.",
    icon: "paint",
  },
  {
    id: "platrerie",
    title: "Plâtrerie",
    description:
      "Pose de plaques de plâtre, création de cloisons, faux plafonds et travaux d'enduit pour aménager et rénover vos espaces.",
    icon: "plaster",
  },
  {
    id: "carrelage",
    title: "Pose de carrelage",
    description:
      "Pose de carrelage pour les sols et les murs, avec un travail précis et des finitions soignées.",
    icon: "tile",
  },
  {
    id: "dalles",
    title: "Pose de dalles extérieures",
    description:
      "Aménagement de vos espaces extérieurs grâce à la pose de dalles adaptées à vos projets.",
    icon: "outdoor",
  },
  {
    id: "nettoyage-chantier",
    title: "Nettoyage de chantier",
    description:
      "Nettoyage complet après travaux de construction ou de rénovation pour retrouver des locaux propres et prêts à être utilisés.",
    icon: "site-clean",
  },
  {
    id: "nettoyage-sortie",
    title: "Nettoyage d'état des lieux de sortie",
    description:
      "Nettoyage approfondi des logements avant la restitution des clés, destiné aux locataires, propriétaires et agences immobilières.",
    icon: "exit-clean",
  },
  {
    id: "demenagement",
    title: "Déménagement",
    description:
      "Assistance au déménagement et transport de vos biens avec soin et professionnalisme.",
    icon: "moving",
  },
] as const satisfies readonly ServiceItem[];

export const serviceGroups: readonly ServiceGroup[] = [
  {
    id: "travaux",
    title: "Travaux et rénovation",
    layout: "pair",
    services: [services[0], services[1], services[2], services[3]],
  },
  {
    id: "nettoyage",
    title: "Nettoyage professionnel",
    layout: "pair",
    services: [services[4], services[5]],
  },
  {
    id: "demenagement",
    title: "Déménagement",
    layout: "wide",
    points: ["Aide au déménagement", "Transport de biens"],
    services: [services[6]],
  },
];
