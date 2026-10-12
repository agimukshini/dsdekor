export const galleryFilters = [
  { id: "toutes", label: "Toutes" },
  { id: "renovation", label: "Rénovation" },
  { id: "peinture", label: "Peinture" },
  { id: "carrelage", label: "Carrelage" },
  { id: "nettoyage", label: "Nettoyage" },
] as const;

export type GalleryFilter = (typeof galleryFilters)[number]["id"];

export type ShowroomCategory = Exclude<GalleryFilter, "toutes">;

export type ShowroomImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  categories: readonly ShowroomCategory[];
  width: number;
  height: number;
};

export const showroomImages: readonly ShowroomImage[] = [
  {
    id: "avant-demolition",
    src: "/showroom/avant-demolition.jpg",
    alt: "Avant : cloison et verrière en cours de démolition, sol couvert de gravats.",
    caption: "Avant — démolition d'une cloison.",
    categories: ["renovation"],
    width: 1200,
    height: 1600,
  },
  {
    id: "apres-arcs",
    src: "/showroom/apres-arcs.jpg",
    alt: "Après : pièce claire avec arcs, carrelage au sol et plafond à poutres.",
    caption: "Après — arcs et carrelage.",
    categories: ["carrelage", "renovation"],
    width: 1024,
    height: 768,
  },
  {
    id: "apres-portes",
    src: "/showroom/apres-portes.jpg",
    alt: "Après : deux portes en bois massif posées dans un couloir peint.",
    caption: "Après — portes en bois.",
    categories: ["renovation"],
    width: 1200,
    height: 1600,
  },
  {
    id: "apres-mur-brun",
    src: "/showroom/apres-mur-brun.jpg",
    alt: "Après : mur peint brun sous un plafond habillé de lames bois.",
    caption: "Après — peinture et plafond bois.",
    categories: ["peinture", "renovation"],
    width: 1200,
    height: 1600,
  },
  {
    id: "apres-habillage-bois",
    src: "/showroom/apres-habillage-bois.jpg",
    alt: "Après : pièce sous rampant habillée de bois, avec une fenêtre de toit.",
    caption: "Après — habillage bois.",
    categories: ["renovation"],
    width: 1200,
    height: 1600,
  },
  {
    id: "apres-cuisine-claire",
    src: "/showroom/apres-cuisine.jpg",
    alt: "Après : cuisine avec meubles clairs, plan de travail et bandeau bois.",
    caption: "Après — cuisine aménagée.",
    categories: ["renovation"],
    width: 1200,
    height: 1600,
  },
  {
    id: "peinture-geometrique",
    src: "/showroom/peinture-geometrique.jpg",
    alt: "Mur beige peint de lignes blanches formant un motif géométrique.",
    caption: "Peinture murale à motif géométrique.",
    categories: ["peinture", "renovation"],
    width: 960,
    height: 1280,
  },
  {
    id: "habillage-cheminee",
    src: "/showroom/habillage-cheminee.jpg",
    alt: "Habillage blanc d'une cheminée avec niches, dans une pièce en finition.",
    caption: "Habillage d'une cheminée et niches en plâtre.",
    categories: ["renovation"],
    width: 720,
    height: 960,
  },
  {
    id: "panneau-geometrique",
    src: "/showroom/panneau-geometrique.jpg",
    alt: "Panneau mural composé de formes géométriques beiges et grises.",
    caption: "Panneau décoratif géométrique.",
    categories: ["peinture"],
    width: 960,
    height: 1280,
  },
  {
    id: "niches-platre",
    src: "/showroom/niches-platre.jpg",
    alt: "Deux niches creusées dans un mur de plaques de plâtre peint en blanc.",
    caption: "Niches réalisées en plaques de plâtre.",
    categories: ["renovation"],
    width: 720,
    height: 960,
  },
  {
    id: "peinture-beige",
    src: "/showroom/peinture-beige.jpg",
    alt: "Pièce aux murs peints en beige, avec un parquet et une applique.",
    caption: "Peinture beige et parquet.",
    categories: ["peinture", "renovation"],
    width: 720,
    height: 960,
  },
  {
    id: "niches-salle-de-bain",
    src: "/showroom/niches-salle-de-bain.jpg",
    alt: "Salle de bain carrelée, avec niches murales, encore en cours de finition.",
    caption: "Carrelage mural et niches, en cours de finition.",
    categories: ["carrelage"],
    width: 720,
    height: 960,
  },
  {
    id: "mur-anthracite",
    src: "/showroom/mur-anthracite.jpg",
    alt: "Mur d'accent peint en anthracite dans une pièce en travaux.",
    caption: "Peinture d'un mur d'accent anthracite.",
    categories: ["peinture", "renovation"],
    width: 960,
    height: 1280,
  },
  {
    id: "enduit-gris-sol",
    src: "/showroom/enduit-gris-sol.jpg",
    alt: "Pièce avec enduit gris sur les murs et carrelage foncé au sol.",
    caption: "Enduit mural et carrelage au sol.",
    categories: ["peinture", "carrelage", "renovation"],
    width: 1280,
    height: 719,
  },
  {
    id: "couloir-vasque",
    src: "/showroom/couloir-vasque.jpg",
    alt: "Couloir aux murs blancs ouvrant sur une pièce d'eau avec vasque.",
    caption: "Cloisons et circulation vers une pièce d'eau.",
    categories: ["renovation"],
    width: 720,
    height: 960,
  },
  {
    id: "baignoire-sous-pente",
    src: "/showroom/baignoire-sous-pente.jpg",
    alt: "Baignoire installée sous une fenêtre de toit, dans une pièce en finition.",
    caption: "Salle de bain sous rampant, en cours de finition.",
    categories: ["renovation", "carrelage"],
    width: 720,
    height: 960,
  },
  {
    id: "piece-carrelage-gris",
    src: "/showroom/piece-carrelage-gris.jpg",
    alt: "Grande pièce aux murs clairs et au sol carrelé gris, en cours de finition.",
    caption: "Carrelage au sol, pièce en cours de finition.",
    categories: ["carrelage", "renovation"],
    width: 720,
    height: 960,
  },
  {
    id: "piece-claire-carrelage",
    src: "/showroom/piece-claire-carrelage.jpg",
    alt: "Pièce aux murs blancs et au carrelage gris.",
    caption: "Pièce claire avec carrelage au sol.",
    categories: ["carrelage", "renovation"],
    width: 720,
    height: 960,
  },
  {
    id: "sol-bois",
    src: "/showroom/sol-bois.jpg",
    alt: "Sol recouvert de lames bois claires devant une baie vitrée.",
    caption: "Revêtement de sol bois.",
    categories: ["renovation"],
    width: 720,
    height: 960,
  },
  {
    id: "parquet-clair",
    src: "/showroom/parquet-clair.jpg",
    alt: "Parquet clair dans une pièce aux murs peints en beige.",
    caption: "Parquet clair dans une pièce peinte.",
    categories: ["peinture", "renovation"],
    width: 720,
    height: 960,
  },
];

export type ShowroomPair = {
  id: string;
  title: string;
  categories: readonly ShowroomCategory[];
  before: ShowroomImage;
  after: ShowroomImage;
};

export const showroomPairs: readonly ShowroomPair[] = [
  {
    id: "salle-de-bain",
    title: "Salle de bain",
    categories: ["carrelage", "renovation"],
    before: {
      id: "avant-salle-de-bain",
      src: "/showroom/avant-salle-de-bain.jpg",
      alt: "Avant : douche ancienne en cours de dépose, avec gravats au sol.",
      caption: "Avant — salle de bain en dépose.",
      categories: ["carrelage", "renovation"],
      width: 1200,
      height: 1600,
    },
    after: {
      id: "apres-salle-de-bain",
      src: "/showroom/apres-salle-de-bain.jpg",
      alt: "Après : salle de bain avec vasque, miroir, WC et douche vitrée carrelée.",
      caption: "Après — salle de bain carrelée.",
      categories: ["carrelage", "renovation"],
      width: 738,
      height: 1599,
    },
  },
  {
    id: "plafond",
    title: "Plafond",
    categories: ["renovation"],
    before: {
      id: "avant-plafond",
      src: "/showroom/avant-piece-de-vie.jpg",
      alt: "Avant : plafond ouvert, isolant et ossature métallique encore apparents.",
      caption: "Avant — plafond avant fermeture.",
      categories: ["renovation"],
      width: 901,
      height: 1600,
    },
    after: {
      id: "apres-plafond",
      src: "/showroom/apres-plafond.jpg",
      alt: "Après : plafond lisse avec spots encastrés.",
      caption: "Après — plafond avec spots.",
      categories: ["renovation"],
      width: 1200,
      height: 1600,
    },
  },
  {
    id: "piece-de-vie",
    title: "Pièce de vie",
    categories: ["renovation", "peinture"],
    before: {
      id: "avant-piece-ouverte",
      src: "/showroom/avant-cuisine.jpg",
      alt: "Avant : pièce démolie, sol couvert de gravats, fenêtres et poteau encore bruts.",
      caption: "Avant — pièce en démolition.",
      categories: ["renovation"],
      width: 1200,
      height: 1600,
    },
    after: {
      id: "apres-piece-de-vie",
      src: "/showroom/apres-piece-de-vie.jpg",
      alt: "Après : pièce de vie ouverte, peinte, avec parquet et cuisine.",
      caption: "Après — pièce de vie aménagée.",
      categories: ["renovation", "peinture"],
      width: 1600,
      height: 1200,
    },
  },
  {
    id: "doublage",
    title: "Doublage des murs",
    categories: ["renovation"],
    before: {
      id: "avant-doublage",
      src: "/showroom/avant-doublage.jpg",
      alt: "Avant : murs recouverts d'un pare-vapeur, parquet ancien et fenêtre.",
      caption: "Avant — murs avant plaques de plâtre.",
      categories: ["renovation"],
      width: 1200,
      height: 1600,
    },
    after: {
      id: "apres-doublage",
      src: "/showroom/apres-doublage.jpg",
      alt: "Après : mêmes murs habillés de plaques de plâtre, joints encore visibles.",
      caption: "Après — plaques de plâtre posées.",
      categories: ["renovation"],
      width: 1200,
      height: 1600,
    },
  },
];
