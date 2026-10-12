# DS DEKOR — brief de développement

Source: prompt de création du site, conservé comme référence du périmètre.

Site vitrine en français pour DS DEKOR (rénovation, finitions, nettoyage, déménagement).

- Slogan: Votre projet, notre savoir-faire
- Signature: Votre projet, notre signature
- Téléphone: 07 51 53 86 45 / +33 7 51 53 86 45
- E-mail: ds.dekor74@outlook.fr
- Zone: France. Ne pas inventer de couverture outre-mer, d'adresse, de SIRET, d'avis ou de statistiques.

Stack: React, TypeScript, Vite, Tailwind CSS, Lucide, React Router pour les pages légales.

Pages: accueil ancré (header, hero, services, à propos, pourquoi, réalisations, zone, contact, footer), mentions légales, politique de confidentialité.

Showroom: photographies fournies dans `work_images`, publiées dans `public/showroom` et décrites dans `src/data/gallery.ts`. Pas de lieu, client ou date inventés. La capture du logo avec un autre numéro de téléphone n'est pas publiée.

Formulaire: validation côté client. Sans `VITE_QUOTE_ENDPOINT`, ouverture d'un mailto, sans message de succès. Avec endpoint, succès uniquement si la réponse est acceptée.
