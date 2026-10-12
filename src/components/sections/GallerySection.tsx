import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { galleryFilters, showroomImages, showroomPairs, type GalleryFilter, type ShowroomImage } from "../../data/gallery";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Lightbox } from "../ui/Lightbox";

export function GallerySection() {
  const [params, setParams] = useSearchParams();
  const requested = params.get("filtre");
  const filter: GalleryFilter = galleryFilters.some((item) => item.id === requested)
    ? (requested as GalleryFilter)
    : "toutes";
  const [active, setActive] = useState<number | null>(null);

  const visible = useMemo(
    () =>
      filter === "toutes"
        ? showroomImages
        : showroomImages.filter((image) => image.categories.includes(filter)),
    [filter],
  );
  const pairs = useMemo(
    () =>
      filter === "toutes" || filter === "nettoyage"
        ? filter === "nettoyage"
          ? []
          : showroomPairs
        : showroomPairs.filter((pair) => pair.categories.includes(filter)),
    [filter],
  );
  const lightboxImages = useMemo(
    () => [...pairs.flatMap((pair) => [pair.before, pair.after]), ...visible],
    [pairs, visible],
  );

  function openImage(image: ShowroomImage) {
    const index = lightboxImages.findIndex((item) => item.id === image.id);
    setActive(index >= 0 ? index : null);
  }

  return (
    <Section id="realisations" labelledBy="realisations-titre" className="bg-mist">
      <Container>
        <div className="max-w-2xl">
          <h2 id="realisations-titre" className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Nos réalisations
          </h2>
          <p className="mt-4 text-muted">
            Découvrez notre univers de travail et les prestations proposées par DS DEKOR.
          </p>
          <p className="mt-3 text-sm text-muted">
            Les comparaisons indiquent l'état avant travaux et le résultat après intervention. Les autres photos
            montrent des finitions et des chantiers, sans lieu, client ni date.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer les photographies">
          {galleryFilters.map((item) => {
            const selected = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                className={`min-h-11 rounded-full px-4 text-sm ${
                  selected ? "bg-accent text-ink" : "bg-paper text-ink hover:bg-line"
                }`}
                onClick={() => {
                  setActive(null);
                  setParams(
                    (current) => {
                      const next = new URLSearchParams(current);
                      if (item.id === "toutes") next.delete("filtre");
                      else next.set("filtre", item.id);
                      return next;
                    },
                    { replace: true },
                  );
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {pairs.length > 0 ? (
          <div className="mt-10 space-y-10">
            {pairs.map((pair) => (
              <article key={pair.id}>
                <h3 className="font-display text-xl font-semibold">{pair.title}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    { image: pair.before, label: "Avant" },
                    { image: pair.after, label: "Après" },
                  ].map(({ image, label }) => (
                    <button
                      key={image.id}
                      type="button"
                      className="block w-full text-left"
                      aria-label={`Agrandir : ${label}. ${image.caption}`}
                      onClick={() => openImage(image)}
                    >
                      <span className="relative block">
                        <img
                          src={image.src}
                          alt=""
                          width={image.width}
                          height={image.height}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[4/3] w-full bg-paper object-cover"
                        />
                        <span className="absolute top-3 left-3 bg-paper px-3 py-1 text-xs font-semibold tracking-[0.14em] text-ink uppercase">
                          {label}
                        </span>
                      </span>
                      <span className="mt-2 block text-sm text-muted">{image.caption}</span>
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {visible.length === 0 && pairs.length === 0 ? (
          <p className="mt-10 max-w-xl text-muted">
            Aucune photographie de nettoyage n'est encore disponible dans le showroom.
          </p>
        ) : (
          <ul className="mt-10 grid grid-cols-1 items-start gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((image) => (
              <li key={image.id}>
                <button
                  type="button"
                  className="block w-full text-left"
                  aria-label={`Agrandir : ${image.caption}`}
                  onClick={() => openImage(image)}
                >
                  <img
                    src={image.src}
                    alt=""
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full bg-paper object-cover"
                  />
                  <span className="mt-2 block text-sm text-muted">{image.caption}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </Container>
      <Lightbox images={lightboxImages} index={active} onClose={() => setActive(null)} onIndex={setActive} />
    </Section>
  );
}
