import { SectionHeader } from "./SectionHeader";
import { ImageUploader } from "./ImageUploader";
import { useImageStore } from "../hooks/useImageStore";
import { autoRetratos, ensaios } from "../data/portfolio";

export function Fotografia() {
  const { getImage } = useImageStore();

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
            {autoRetratos.map((item, i) => {
              const currentImage = getImage(`foto-autoretrato-${i}`);
              return (
                <GalleryCard
                  key={i}
                  currentImage={currentImage}
                  gradient={item.gradient}
                  alt={item.alt}
                  aspectRatio="aspect-[3/4]"
                />
              );
            })}
          </div>
        </div>

        {/* Ensaios */}
        <div className="reveal">
          <SeriesLabel title="Ensaios" year="2019 – 2021" />
          <p className="font-serif text-sm text-warm-gray/60 italic mb-8 max-w-lg">
            Séries com uso experimental de luz colorida, texturas e véus — atmosferas que dialogam com o universo cênico.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ensaios.map((item, i) => {
              const currentImage = getImage(`foto-ensaio-${i}`);
              return (
                <GalleryCard
                  key={i}
                  currentImage={currentImage}
                  gradient={item.gradient}
                  alt={item.alt}
                  aspectRatio={i === 0 ? "aspect-[3/4] md:row-span-2" : "aspect-square"}
                />
              );
            })}
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
  currentImage,
  gradient,
  alt,
  aspectRatio,
}: {
  currentImage: string | null;
  gradient: string;
  alt: string;
  aspectRatio: string;
}) {
  return (
    <div className={`group relative ${aspectRatio} rounded-sm overflow-hidden border border-white/[0.04] hover:border-white/[0.1] transition-all duration-500`}>
      <ImageUploader
        currentImage={currentImage}
        aspectRatio=""
        className="w-full h-full"
        gradientFallback={gradient}
        label={alt}
      />

      {/* Label overlay */}
      {currentImage && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none z-20">
          <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-off-white/80">
            {alt}
          </span>
        </div>
      )}

      {/* Corner accents */}
      {currentImage && (
        <>
          <div className="absolute top-2 left-2 w-4 h-[1px] bg-white/0 group-hover:bg-gold/40 transition-all duration-500 pointer-events-none z-20" />
          <div className="absolute top-2 left-2 w-[1px] h-4 bg-white/0 group-hover:bg-gold/40 transition-all duration-500 pointer-events-none z-20" />
          <div className="absolute bottom-2 right-2 w-4 h-[1px] bg-white/0 group-hover:bg-gold/40 transition-all duration-500 pointer-events-none z-20" />
          <div className="absolute bottom-2 right-2 w-[1px] h-4 bg-white/0 group-hover:bg-gold/40 transition-all duration-500 pointer-events-none z-20" />
        </>
      )}
    </div>
  );
}
