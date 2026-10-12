export function Logo({ plate = false }: { plate?: boolean }) {
  return (
    <a href="/#accueil" className={`inline-flex items-center ${plate ? "bg-paper px-2 py-1" : ""}`}>
      <img
        src="/logo.png?v=2"
        alt="DS DEKOR"
        width={1873}
        height={691}
        className="h-14 w-auto"
      />
    </a>
  );
}
