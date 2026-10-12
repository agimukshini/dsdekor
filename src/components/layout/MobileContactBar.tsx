import { company } from "../../data/company";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={`mailto:${company.email}`}
          className="inline-flex min-h-14 items-center justify-center gap-2 text-sm font-semibold text-ink"
        >
          Écrire
        </a>
        <a
          href={company.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-14 items-center justify-center bg-[#075E54] text-white"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
