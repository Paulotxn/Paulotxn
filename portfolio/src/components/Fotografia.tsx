import { SectionHeader } from "./SectionHeader";

const autoRetratos = [
  { alt: "Auto-Retrato I — Luz e Sombra", gradient: "from-red-accent/25 via-gold/15 to-black", image: "/images/auto_retrato_2.png" },
  { alt: "Auto-Retrato II — Identidade", gradient: "from-gold/25 via-red-accent/10 to-black", image: "/images/auto_retrato.png" },
];

const ensaios = [
  { alt: "Ensaio — Luz Violeta", gradient: "from-purple-600/25 via-red-accent/15 to-black", image: "/images/ensaio_1.png" },
  { alt: "Ensaio — Texturas", gradient: "from-blue-500/20 via-gold/15 to-black", image: "/images/ensaio_texturas.png" },
  { alt: "Ensaio — Véus", gradient: "from-red-accent/20 via-purple-600/15 to-black", image: "/images/ensaio_veus.png" },
  { alt: "Ensaio — Atmosfera", gradient: "from-emerald-600/15 via-gold/15 to-black", image: "/images/ensaio_2.png" },
  { alt: "Ensaio — Corpo e Luz", gradient: "from-gold/20 via-blue-500/10 to-black", image: "/images/ensaio_5.png" },
];

export function Fotografia() {
  return (
    <section id="fotografia" className="relative py-28 lg:py-36 bg-darker-bg">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          number="04"
          title="Fotografia"
          subtitle="Trabalho autoral de fotografia, edição e modelagem — explorando o corpo, a luz e a identidade."
        />

        {/* Auto-Retratos */}
        <div className="reveal mb-20">
          <SeriesLabel title="Auto-Retratos" year="2020" />
          <p className="font-serif text-sm text-warm-gray/60 italic mb-8 max-w-lg">
            Investigação sobre vulnerabilidade, identidade e a relação com o próprio corpo através de iluminação dramática.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {autoRetratos.map((item, i) => (
              <GalleryCard key={i} gradient={item.gradient} alt={item.alt} aspectRatio="aspect-[3/4]" image={item.image} />
            ))}
          </div>
        </div>

        {/* Ensaios */}
        <div className="reveal">
          <SeriesLabel title="Ensaios" year="2019 – 2021" />
          <p className="font-serif text-sm text-warm-gray/60 italic mb-8 max-w-lg">
            Séries com uso experimental de luz colorida, texturas e véus — atmosferas que dialogam com o universo cênico.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ensaios.map((item, i) => (
              <GalleryCard
                key={i}
                gradient={item.gradient}
                alt={item.alt}
                aspectRatio={i === 0 ? "aspect-[3/4] md:row-span-2" : "aspect-square"}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SeriesLabel({ title, year }: { title: string; year: string }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <h3 className="font-display text-2xl tracking-[0.05em] text-off-white">
        {title}
      </h3>
      <div className="flex-1 h-[1px] bg-white/[0.05]" />
      <span className="font-mono text-[10px] tracking-[0.15em] text-warm-gray/40">
        {year}
      </span>
    </div>
  );
}

function GalleryCard({
  gradient,
  alt,
  aspectRatio,
  image,
}: {
  gradient: string;
  alt: string;
  aspectRatio: string;
  image?: string;
}) {
  return (
    <div className={`group relative ${aspectRatio} rounded-sm overflow-hidden cursor-pointer border border-white/[0.04] hover:border-white/[0.1] transition-all duration-500`}>
      {/* Background or Image */}
      {image ? (
        <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 contrast-125" />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-700 group-hover:scale-105`} />
      )}

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

      {/* Shimmer */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" style={{ animation: "shimmer 2.5s infinite" }} />
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-off-white/80">
          {alt}
        </span>
      </div>

      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-4 h-[1px] bg-white/0 group-hover:bg-gold/40 transition-all duration-500" />
      <div className="absolute top-2 left-2 w-[1px] h-4 bg-white/0 group-hover:bg-gold/40 transition-all duration-500" />
      <div className="absolute bottom-2 right-2 w-4 h-[1px] bg-white/0 group-hover:bg-gold/40 transition-all duration-500" />
      <div className="absolute bottom-2 right-2 w-[1px] h-4 bg-white/0 group-hover:bg-gold/40 transition-all duration-500" />
    </div>
  );
}
