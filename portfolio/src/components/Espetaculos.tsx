import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

interface Espetaculo {
  year: string;
  name: string;
  venue: string;
  roles: string[];
  description: string;
}

const espetaculos: Espetaculo[] = [
  {
    year: "2025",
    name: "As Troianas",
    venue: "Universidade Ítalo Brasileiro",
    roles: ["Atuação", "Coreografia"],
    description: "Adaptação contemporânea da tragédia de Eurípides, com ênfase no corpo e movimento.",
  },
  {
    year: "2021",
    name: "Inferno's Bar",
    venue: "Festival de Teatro de Araçatuba",
    roles: ["Atuação"],
    description: "Performance teatral imersiva apresentada no festival regional.",
  },
  {
    year: "2019",
    name: "Despertai",
    venue: "SENAC Araçatuba — SP",
    roles: ["Atuação", "Assist. Dramaturgia", "Iluminação"],
    description: "Espetáculo de conclusão do curso técnico em teatro.",
  },
  {
    year: "2018",
    name: "Mambembe",
    venue: "Espetáculo de Rua — SENAC Araçatuba",
    roles: ["Atuação", "Coro"],
    description: "Teatro de rua inspirado na tradição circense brasileira.",
  },
];

export function Espetaculos() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="espetaculos" className="relative py-28 lg:py-36 bg-darker-bg">
      {/* Subtle gradient top/bottom */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6">
        <SectionHeader number="02" title="Espetáculos" subtitle="Trajetória nos palcos, do teatro de rua às adaptações de clássicos." />

        <div className="space-y-1 reveal-stagger">
          {espetaculos.map((item, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={i}
                className="reveal group cursor-pointer"
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
              >
                <div className={`relative p-5 md:p-6 rounded-sm border transition-all duration-500 ${
                  isExpanded
                    ? "border-gold/20 bg-gold/[0.02]"
                    : "border-transparent hover:border-white/[0.06] bg-transparent hover:bg-white/[0.01]"
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    {/* Year */}
                    <span className="font-mono text-[11px] tracking-[0.15em] text-warm-gray/50 md:w-16 shrink-0">
                      {item.year}
                    </span>

                    {/* Name */}
                    <h3 className={`font-display text-2xl md:text-3xl tracking-[0.04em] flex-1 transition-colors duration-500 ${
                      isExpanded ? "text-gold" : "text-off-white group-hover:text-gold/80"
                    }`}>
                      {item.name}
                    </h3>

                    {/* Venue */}
                    <span className="font-mono text-[10px] tracking-[0.1em] text-warm-gray/40 shrink-0">
                      {item.venue}
                    </span>

                    {/* Toggle indicator */}
                    <span className={`font-mono text-[10px] text-warm-gray/40 transition-transform duration-300 hidden md:block ${
                      isExpanded ? "rotate-45" : ""
                    }`}>
                      +
                    </span>
                  </div>

                  {/* Expanded content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${
                    isExpanded ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}>
                    <div className="pt-4 border-t border-white/[0.05]">
                      <p className="font-serif text-sm text-warm-gray/70 italic mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.roles.map((role, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 font-mono text-[9px] tracking-[0.15em] uppercase text-gold/80 border border-gold/20 rounded-full"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom line accent */}
                  <div className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-gold/40 to-transparent transition-all duration-700 ${
                    isExpanded ? "w-full" : "w-0 group-hover:w-1/3"
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Counter */}
        <div className="reveal mt-16 pt-8 border-t border-white/[0.05] flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-warm-gray/50">
            Total: {espetaculos.length} espetáculos
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-warm-gray/30">
            2018 – 2025
          </p>
        </div>
      </div>
    </section>
  );
}
