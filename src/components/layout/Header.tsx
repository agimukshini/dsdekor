import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { company } from "../../data/company";
import { navItems } from "../../data/navigation";
import { Logo } from "../brand/Logo";
import { ButtonLink } from "../ui/ButtonLink";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  function goToSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;
    const id = href.slice(hashIndex + 1);
    if (location.pathname !== "/") return;
    event.preventDefault();
    setOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    window.history.pushState(null, "", `#${id}`);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[5.25rem] max-w-[1200px] items-center gap-4 px-5 sm:px-8">
        <Logo />
        <nav className="ml-8 hidden items-center gap-7 xl:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink hover:text-accent-ink"
              onClick={(event) => goToSection(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ButtonLink
          to={company.whatsappUrl}
          variant="whatsapp"
          className="ml-auto hidden lg:inline-flex"
        >
          <WhatsAppIcon className="mr-2 h-4 w-4" />
          Demander un devis
        </ButtonLink>
        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center xl:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
        </button>
      </div>

      {open ? (
        <nav id="menu-mobile" className="border-t border-line bg-paper px-5 py-4 xl:hidden" aria-label="Navigation mobile">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex min-h-11 items-center text-base font-semibold"
                  onClick={(event) => goToSection(event, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink to={`mailto:${company.email}`} className="mt-3 w-full">
            Écrire un e-mail
          </ButtonLink>
          <ButtonLink to={company.whatsappUrl} variant="whatsapp" className="mt-3 w-full">
            <WhatsAppIcon className="mr-2 h-4 w-4" />
            Demander un devis
          </ButtonLink>
        </nav>
      ) : null}
    </header>
  );
}
