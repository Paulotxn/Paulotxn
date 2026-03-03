export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 lg:py-28 bg-darkest-bg">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Name */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.85] tracking-[0.08em] text-off-white/[0.06] select-none">
            Nicoli Rizzoli
          </h2>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <InfoItem label="Localização" value="São Paulo, SP" />
          <InfoItem
            label="Contato"
            value="nicolirizzoli@email.com"
            href="mailto:nicolirizzoli@email.com"
          />
          <InfoItem
            label="Instagram"
            value="@nicolirizzoli"
            href="https://www.instagram.com/nicolirizzoli/"
          />
        </div>

        {/* Bottom line */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-warm-gray/30">
            © {currentYear} Nicoli Rizzoli
          </p>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-warm-gray/20">
            Atriz · Artista Visual · Multiartista
          </p>
        </div>
      </div>
    </footer>
  );
}

function InfoItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";
  const linkProps = href
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <div className="text-center sm:text-left">
      <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-warm-gray/30 mb-2">
        {label}
      </div>
      <Wrapper
        {...linkProps}
        className={`font-serif text-sm text-warm-gray/60 ${
          href ? "hover:text-gold transition-colors duration-300 cursor-pointer" : ""
        }`}
      >
        {value}
      </Wrapper>
    </div>
  );
}
