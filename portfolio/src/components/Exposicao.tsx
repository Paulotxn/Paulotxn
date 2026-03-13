import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const references = [
  { name: "La La Land", category: "Filme", image: "/images/la_la_land.png" },
  { name: "Mr. Nobody", category: "Filme", image: "/images/mr_nobody.png" },
  { name: "Amélie Poulain", category: "Filme", image: "/images/amelie_poulain_1.png" },
  { name: "Brilho Eterno de uma Mente sem Lembranças", category: "Filme", image: "/images/brilho_eterno.png" },
  { name: "Marriage Story", category: "Filme", image: "/images/marriage_story.png" },
  { name: "Pride and Prejudice", category: "Filme", image: "/images/pride_and_prejudice.png" },
];

const technicalDetails = [
  { label: "Fotografia", value: "Edição · Direção · Atuação" },
  { label: "Recursos", value: "Luz de geladeira, velas, iluminação caseira, pós-produção em Photoshop" },
  { label: "Colaboração", value: "João FTK" },
  { label: "Período", value: "2019 – 2020" },
];

export function Exposicao() {
  const [hoveredRef, setHoveredRef] = useState<string | null>(null);

  const currentRef = references.find(r => r.name === hoveredRef);

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
      </div>

      {/* Hover Image Preview Overlay */}
      <div 
        className={`fixed inset-y-0 right-0 w-[42vw] pointer-events-none z-[8888] transition-[clip-path] duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] ${
          hoveredRef ? "clip-path-inset-0" : "clip-path-inset-right"
        }`}
        style={{
          clipPath: hoveredRef ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)"
        }}
      >
        {references.map((ref, i) => (
          <img
            key={i}
            src={ref.image}
            alt={ref.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hoveredRef === ref.name ? "opacity-100" : "opacity-0"
            }`}
            style={{ filter: "brightness(0.7) contrast(1.15)" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-12">
          {currentRef && (
            <div className="transform transition-transform duration-500 translate-y-0">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-3 block">
                {currentRef.category}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-off-white leading-none tracking-wide text-balance">
                {currentRef.name}
              </h2>
            </div>
          )}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold to-transparent opacity-60"></div>
      </div>
    </section>
  );
}
