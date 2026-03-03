import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { ImageUploader } from "./ImageUploader";
import { useImageStore } from "../hooks/useImageStore";

const references = [
  { name: "La La Land", category: "Filme" },
  { name: "Mr. Nobody", category: "Filme" },
  { name: "Amélie Poulain", category: "Filme" },
  { name: "Brilho Eterno de uma Mente sem Lembranças", category: "Filme" },
  { name: "Marriage Story", category: "Filme" },
  { name: "Pride and Prejudice", category: "Filme" },
];

const technicalDetails = [
  { label: "Fotografia", value: "Edição · Direção · Atuação" },
  { label: "Recursos", value: "Luz de geladeira, velas, iluminação caseira, pós-produção em Photoshop" },
  { label: "Colaboração", value: "João FTK" },
  { label: "Período", value: "2019 – 2020" },
];

const galleryGradients = [
  "from-amber-600/20 via-red-accent/10 to-black",
  "from-blue-600/20 via-purple-600/10 to-black",
  "from-red-accent/20 via-gold/10 to-black",
  "from-purple-600/20 via-blue-500/10 to-black",
  "from-pink-600/20 via-red-accent/10 to-black",
  "from-emerald-600/15 via-gold/10 to-black",
];

export function Exposicao() {
  const [hoveredRef, setHoveredRef] = useState<string | null>(null);
  const { getImage } = useImageStore();

  return (
    <section id="exposicao" className="relative py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader number="05" title="Exposição" subtitle="Projeto autoral de fotografia concebido durante a pandemia." />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Description — 3 cols */}
          <div className="lg:col-span-3 reveal">
            <div className="space-y-6">
              <p className="font-serif text-lg leading-relaxed text-warm-gray/80">
                Cenas icônicas de{" "}
                <span className="text-off-white italic">clipes, filmes e esculturas</span>{" "}
                foram recriadas em casa com iluminação cinematográfica improvisada —{" "}
                <span className="text-gold/80">geladeira, velas e Photoshop</span>{" "}
                — em parceria com João FTK.
              </p>
              <p className="font-serif text-base leading-relaxed text-warm-gray/60">
                O projeto demonstra habilidade técnica e criatividade de produção com
                baixo orçamento, transformando limitações em linguagem artística.
              </p>
            </div>

            {/* References */}
            <div className="mt-12">
              <h3 className="font-mono text-[10px] tracking-[0.25em] uppercase text-warm-gray/40 mb-5">
                Referências recriadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {references.map((ref, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => setHoveredRef(ref.name)}
                    onMouseLeave={() => setHoveredRef(null)}
                    className={`relative px-4 py-2 font-serif text-sm rounded-sm border transition-all duration-400 ${
                      hoveredRef === ref.name
                        ? "border-gold/40 text-gold bg-gold/[0.04]"
                        : "border-white/[0.06] text-warm-gray/70 hover:border-white/[0.12] hover:text-off-white"
                    }`}
                  >
                    {ref.name}
                    <span className={`absolute -top-1 -right-1 font-mono text-[7px] tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-dark-bg border border-white/10 text-warm-gray/40 transition-opacity duration-300 ${
                      hoveredRef === ref.name ? "opacity-100" : "opacity-0"
                    }`}>
                      {ref.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Technical details — 2 cols */}
          <div className="lg:col-span-2 reveal">
            <div className="rounded-sm border border-white/[0.06] bg-white/[0.01] p-6 space-y-0">
              <h3 className="font-mono text-[10px] tracking-[0.25em] uppercase text-warm-gray/40 mb-6">
                Ficha Técnica
              </h3>
              {technicalDetails.map((detail, i) => (
                <div
                  key={i}
                  className={`py-4 ${i < technicalDetails.length - 1 ? "border-b border-white/[0.04]" : ""}`}
                >
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-gold/60 mb-1.5">
                    {detail.label}
                  </div>
                  <div className="font-serif text-sm text-off-white/70 leading-relaxed">
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="reveal mt-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-display text-2xl tracking-[0.05em] text-off-white">
              Galeria de Recriações
            </h3>
            <div className="flex-1 h-[1px] bg-white/[0.05]" />
            <span className="font-mono text-[10px] tracking-[0.15em] text-warm-gray/40">
              {references.length} cenas
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, i) => {
              const imgKey = `exposicao-${i}`;
              const hasImage = !!getImage(imgKey);

              return (
                <div key={i} className="group relative aspect-[4/5] rounded-sm overflow-hidden border border-white/[0.04] hover:border-white/[0.1] transition-all duration-500">
                  <ImageUploader
                    imageKey={imgKey}
                    currentImage={getImage(imgKey)}
                    aspectRatio=""
                    className="w-full h-full"
                    gradientFallback={galleryGradients[i]}
                    label={`Foto: ${ref.name}`}
                  />

                  {/* Film reference label */}
                  <div className={`absolute bottom-0 left-0 right-0 p-3 z-20 pointer-events-none ${hasImage ? "bg-gradient-to-t from-black/70 to-transparent" : ""}`}>
                    <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-warm-gray/60 block">
                      Recriação
                    </span>
                    <span className={`font-serif text-sm ${hasImage ? "text-off-white/90" : "text-warm-gray/40"}`}>
                      {ref.name}
                    </span>
                  </div>

                  {/* Corner decoration */}
                  {hasImage && (
                    <>
                      <div className="absolute top-2 left-2 w-3 h-[1px] bg-white/0 group-hover:bg-gold/40 transition-all duration-500 pointer-events-none z-20" />
                      <div className="absolute top-2 left-2 w-[1px] h-3 bg-white/0 group-hover:bg-gold/40 transition-all duration-500 pointer-events-none z-20" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
