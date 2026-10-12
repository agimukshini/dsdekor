import { useEffect, useId, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ShowroomImage } from "../../data/gallery";

type LightboxProps = {
  images: readonly ShowroomImage[];
  index: number | null;
  onClose: () => void;
  onIndex: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onIndex }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const current = index === null ? null : images[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (current && !dialog.open) dialog.showModal();
    if (!current && dialog.open) dialog.close();
  }, [current]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") onIndex((index + 1) % images.length);
      if (event.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onIndex]);

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      {current ? (
        <div className="flex max-h-[calc(100vh-1.5rem)] flex-col">
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <p id={titleId} className="text-sm">
              {current.caption}
            </p>
            <button type="button" className="inline-flex h-11 w-11 items-center justify-center" onClick={onClose}>
              <X aria-hidden="true" />
              <span className="sr-only">Fermer</span>
            </button>
          </div>
          <img
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            className="max-h-[70vh] w-full object-contain"
          />
          <div className="flex items-center justify-between px-4 py-3">
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 px-2 text-sm"
              onClick={() => onIndex((index! - 1 + images.length) % images.length)}
            >
              <ChevronLeft aria-hidden="true" />
              Précédente
            </button>
            <p className="text-sm text-white/70">
              {index! + 1} / {images.length}
            </p>
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 px-2 text-sm"
              onClick={() => onIndex((index! + 1) % images.length)}
            >
              Suivante
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
