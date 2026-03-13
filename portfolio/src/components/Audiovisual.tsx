import { SectionHeader } from "./SectionHeader";

interface Project {
  type: string;
  title: string;
  year: string;
  roles: string;
  award: string;
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    type: "Curta-Metragem",
    title: "Martírio Pandêmico",
    year: "2021",
    roles: "Filmagem · Edição · Roteiro · Atuação",
    award: "Selecionado — Cine Gara-Gem / Edith Cultura",
    link: "https://youtu.be/9iNYjJEkx3M",
  },
  {
    type: "Curta-Metragem",
    title: "Disforme",
    year: "2021",
    roles: "Edição · Filmagem · Roteiro",
    award: "3º Lugar — Curta Teatro Araçatuba 2021",
    image: "/images/disforme.png",
  },
  {
    type: "Micro Curta-Metragem",
    title: "3AM",
    year: "2021",
    roles: "Atuação · Direção · Roteiro · Edição",
    award: "Selecionado — MacacuCine, Rio de Janeiro",
    image: "/images/3am.png",
  },
];

const gradients = [
  "from-red-accent/20 via-gold/10 to-purple-900/20",
  "from-gold/15 via-red-accent/10 to-blue-900/15",
  "from-purple-800/20 via-gold/10 to-red-accent/15",
];

export function Audiovisual() {
  return (
    <section id="audiovisual" className="relative py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader number="03" title="Audiovisual" subtitle="Curta-metragens autorais, selecionados em festivais nacionais." />

        <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
          {projects.map((project, i) => (
            <div key={i} className="reveal group">
              <div className="relative rounded-sm border border-white/[0.05] overflow-hidden hover:border-white/[0.1] transition-all duration-500 bg-dark-bg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 contrast-125"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} transition-transform duration-700 group-hover:scale-105`} />
                  )}

                  {/* Shimmer */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" style={{ animation: "shimmer 2s infinite" }} />
                  </div>

                  {/* Play icon for video */}
                  {project.link && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-4 h-4 text-off-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Type badge */}
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[8px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-warm-gray">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-xl tracking-[0.04em] text-off-white group-hover:text-gold transition-colors duration-500">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] text-warm-gray/50 shrink-0 pt-1">
                      {project.year}
                    </span>
                  </div>

                  <p className="font-mono text-[10px] tracking-[0.05em] text-warm-gray/50 leading-relaxed">
                    {project.roles}
                  </p>

                  <div className="flex items-start gap-1.5 pt-1">
                    <span className="text-gold/70 text-xs mt-[1px]">★</span>
                    <span className="font-serif text-xs text-warm-gray/70 italic leading-relaxed">
                      {project.award}
                    </span>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-gold/70 hover:text-gold transition-colors duration-300 pt-1"
                    >
                      Assistir
                      <span className="text-[8px]">→</span>
                    </a>
                  )}
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-gold/40 to-transparent transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
