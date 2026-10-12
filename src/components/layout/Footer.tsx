import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { legalLinks, navItems } from "../../data/navigation";
import { Logo } from "../brand/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer bg-night text-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo plate />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">{company.secondarySlogan}</p>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-accent uppercase">Navigation</h2>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-white/80 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-accent uppercase">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`tel:${company.phoneTel}`} className="hover:text-white">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="break-all hover:text-white">
                {company.email}
              </a>
            </li>
            <li>
              <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp {company.phoneInternational}
              </a>
            </li>
            <li>
              <a
                href={company.addressMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{company.address}</span>
              </a>
            </li>
            <li>{company.coverageLabel}</li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-accent uppercase">Informations</h2>
          <ul className="mt-4 space-y-2">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-sm text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} DS DEKOR. Tous droits réservés.</p>
          <a href="https://scardustech.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Powered by Scardus Tech L.L.C
          </a>
        </div>
      </div>
    </footer>
  );
}
