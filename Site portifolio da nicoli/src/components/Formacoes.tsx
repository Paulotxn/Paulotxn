import { SectionHeader } from "./SectionHeader";

interface FormacaoItem {
  year: string;
  title: string;
  institution: string;
  type: string;
}

const formacoes: FormacaoItem[] = [
  { year: "2024 → 2028", title: "Licenciatura em Teatro", institution: "Universidade Ítalo Brasileiro", type: "graduação" },
  { year: "2019", title: "Técnico em Teatro", institution: "Senac Araçatuba", type: "técnico" },
  { year: "2019", title: "Iniciação em Montagem Teatral", institution: "SESC Birigui", type: "curso" },
  { year: "2019", title: "Oficina em Iluminação Cênica", institution: "Aline Santini", type: "oficina" },
  { year: "2019", title: "Oficina em Meia-Máscara", institution: "Tiche Viana", type: "oficina" },
  { year: "2017", title: "Oficina de Dramaturgia", institution: "Senac Araçatuba", type: "oficina" },
  { year: "2014 – 2019", title: "Dança Contemporânea e Clássica", institution: "Formação continuada", type: "formação" },
];

const typeStyles: Record<string, string> = {
  "graduação": "text-gold border-gold/30",
  "técnico": "text-red-accent border-red-accent/30",
  "curso": "text-blue-400 border-blue-400/30",
  "oficina": "text-purple-400 border-purple-400/30",
  "formação": "text-emerald-400 border-emerald-400/30",
};

export function Formacoes() {
  return (
    <section id="formacoes" className="relative py-28 lg:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader number="01" title="Formações" subtitle="Percurso acadêmico e artístico em teatro, dança e artes cênicas." />

        <div className="relative reveal-stagger">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden md:block" />

          {formacoes.map((item, i) => (
            <div
              key={i}
              className="reveal group relative md:grid md:grid-cols-[140px_1fr] gap-8 mb-8 last:mb-0"
            >
              {/* Year */}
              <div className="font-mono text-[11px] tracking-[0.15em] text-warm-gray/70 pt-1 text-right hidden md:block">
                {item.year}
              </div>

              {/* Card */}
              <div className="relative pl-0 md:pl-8">
                {/* Dot on timeline */}
                <div className="absolute left-[-4.5px] md:left-[-4.5px] top-2 w-[9px] h-[9px] rounded-full border border-white/20 bg-black group-hover:border-gold/60 group-hover:bg-gold/20 transition-all duration-500 hidden md:block" />

                <div className="p-5 rounded-sm border border-white/[0.05] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-500 group-hover:translate-x-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <span className="md:hidden font-mono text-[10px] tracking-[0.15em] text-warm-gray/60">
                      {item.year}
                    </span>
                    <span className={`font-mono text-[9px] tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full border ${typeStyles[item.type] || "text-warm-gray border-warm-gray/30"}`}>
                      {item.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-off-white group-hover:text-gold transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[11px] tracking-[0.05em] text-warm-gray/60 mt-1">
                    {item.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="reveal mt-16 pt-8 border-t border-white/[0.05]">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-warm-gray/50 text-center">
            7 formações • 2014 – presente • Teatro, Dança & Técnica Cênica
          </p>
        </div>
      </div>
    </section>
  );
}
