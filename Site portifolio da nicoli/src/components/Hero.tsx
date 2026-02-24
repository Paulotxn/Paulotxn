import { useImageStore } from "../hooks/useImageStore";
import { ImageUploader } from "./ImageUploader";

export function Hero() {
  const { getImage } = useImageStore();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-bg to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.03] blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-red-accent/[0.04] blur-[100px]" style={{ animation: "float 8s ease-in-out infinite" }} />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-gold/[0.03] blur-[80px]" style={{ animation: "float 10s ease-in-out infinite reverse" }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(240,236,228,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(240,236,228,0.3) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="space-y-10 pt-24 lg:pt-0">
            <div className="fade-in">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-warm-gray">
                Portfólio — São Paulo, SP
              </span>
            </div>

            <div className="space-y-2 fade-in delay-1">
              <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] tracking-[0.04em] text-off-white">
                Nicoli
                <br />
                Rizzoli
              </h1>
            </div>

            <div className="flex flex-wrap gap-3 fade-in delay-2">
              {["Atriz", "Artista Visual", "Multiartista"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-white/10 rounded-full font-mono text-[10px] tracking-[0.15em] uppercase text-warm-gray hover:border-gold/40 hover:text-gold transition-all duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4 fade-in delay-3">
              <MetaItem label="Formação" value="Teatro" />
              <MetaItem label="Desde" value="2014" />
              <MetaItem label="Base" value="SP" />
            </div>
          </div>

          {/* Visual — Profile Photo */}
          <div className="relative flex items-center justify-center fade-in delay-2">
            <div className="relative w-72 sm:w-80 h-[380px] sm:h-[420px]">
              {/* Outer frame */}
              <div className="absolute inset-0 border border-white/[0.06] rounded-sm" />
              <div className="absolute inset-3 border border-white/[0.04] rounded-sm" />

              {/* Photo area */}
              <div className="absolute inset-6 overflow-hidden rounded-sm">
                <ImageUploader
                  imageKey="hero-profile"
                  currentImage={getImage("hero-profile")}
                  aspectRatio=""
                  className="w-full h-full"
                  gradientFallback="from-gold/10 via-red-accent/5 to-transparent"
                  label="Foto de Perfil"
                />

                {/* Overlay gradient */}
                {getImage("hero-profile") && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                )}
              </div>

              {/* Monogram (show only when no image) */}
              {!getImage("hero-profile") && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="font-display text-[7rem] text-white/[0.04] select-none tracking-widest">
                    NR
                  </span>
                </div>
              )}

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-[1px] bg-gold/40" />
              <div className="absolute top-0 left-0 w-[1px] h-6 bg-gold/40" />
              <div className="absolute bottom-0 right-0 w-6 h-[1px] bg-gold/40" />
              <div className="absolute bottom-0 right-0 w-[1px] h-6 bg-gold/40" />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 fade-in delay-4">
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-warm-gray/60">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-warm-gray/40 to-transparent" style={{ animation: "scrollBounce 2s ease-in-out infinite" }} />
        </div>
      </div>

      {/* Horizontal separator */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-warm-gray/60">
        {label}
      </div>
      <div className="font-serif text-sm text-off-white/80">{value}</div>
    </div>
  );
}
