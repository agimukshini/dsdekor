import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const variants = {
  primary: "bg-accent text-ink hover:bg-[#9c7748]",
  secondary: "border border-current bg-transparent hover:bg-white/10",
  light: "border border-ink/15 bg-paper text-ink hover:border-accent",
  whatsapp: "bg-[#075E54] text-white hover:bg-[#064e46]",
} as const;

type ButtonLinkProps = {
  to: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function ButtonLink({ to, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold tracking-wide transition-colors ${variants[variant]} ${className}`;

  if (to.startsWith("tel:") || to.startsWith("mailto:") || to.startsWith("http") || to.startsWith("/#") || to.startsWith("#")) {
    const external = to.startsWith("http");
    return (
      <a href={to} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
