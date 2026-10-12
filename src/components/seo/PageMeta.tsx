import { useEffect } from "react";
import { siteUrl } from "../../data/company";

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
};

function setMeta(id: string, value: string) {
  const element = document.getElementById(id);
  if (element) element.setAttribute("content", value);
}

export function PageMeta({ title, description, path }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    setMeta("meta-description", description);
    setMeta("og-title", title);
    setMeta("og-description", description);

    const canonicalHref = siteUrl ? `${siteUrl}${path}` : "";
    setMeta("og-url", canonicalHref);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalHref) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalHref;
    } else if (canonical) {
      canonical.remove();
    }

    const image = document.getElementById("og-image");
    if (image && siteUrl) {
      image.setAttribute("content", `${siteUrl}/showroom/apres-piece-de-vie.jpg`);
    }
  }, [title, description, path]);

  return null;
}
