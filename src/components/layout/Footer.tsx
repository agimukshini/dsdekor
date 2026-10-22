import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { legalLinks, navItems } from "../../data/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer bg-night text-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-8 sm:px-8 md:grid-cols-3 md:gap-10">
        <div>
          <h2 className="font-display text-xs font-semibold tracking-[0.14em] text-accent uppercase">Navigation</h2>
          <ul className="mt-2.5 space-y-1">
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
          <h2 className="font-display text-xs font-semibold tracking-[0.14em] text-accent uppercase">Contact</h2>
          <ul className="mt-2.5 space-y-1 text-sm text-white/80">
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
              <a
                href={company.addressMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 hover:text-white"
              >
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                <span>{company.address}</span>
              </a>
            </li>
            <li>{company.coverageLabel}</li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xs font-semibold tracking-[0.14em] text-accent uppercase">Informations</h2>
          <ul className="mt-2.5 space-y-1">
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
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {company.name}. {company.secondarySlogan}.
          </p>
          <a href="https://scardustech.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Powered by Scardus Tech L.L.C
          </a>
        </div>
      </div>
    </footer>
  );
}
