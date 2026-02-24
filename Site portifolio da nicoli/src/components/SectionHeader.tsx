interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="reveal mb-16 lg:mb-20">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-[10px] tracking-[0.3em] text-gold/70">
          {number}
        </span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
      </div>
      <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-[0.06em] text-off-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-serif text-lg text-warm-gray/70 max-w-xl italic">
          {subtitle}
        </p>
      )}
    </div>
  );
}
