export interface FormacaoItem {
    year: string;
    title: string;
    institution: string;
    type: "graduação" | "técnico" | "curso" | "oficina" | "formação";
}

export const formacoes: FormacaoItem[] = [
    { year: "2024 → 2028", title: "Licenciatura em Teatro", institution: "Universidade Ítalo Brasileiro", type: "graduação" },
    { year: "2019", title: "Técnico em Teatro", institution: "Senac Araçatuba", type: "técnico" },
    { year: "2019", title: "Iniciação em Montagem Teatral", institution: "SESC Birigui", type: "curso" },
    { year: "2019", title: "Oficina em Iluminação Cênica", institution: "Aline Santini", type: "oficina" },
    { year: "2019", title: "Oficina em Meia-Máscara", institution: "Tiche Viana", type: "oficina" },
    { year: "2017", title: "Oficina de Dramaturgia", institution: "Senac Araçatuba", type: "oficina" },
    { year: "2014 – 2019", title: "Dança Contemporânea e Clássica", institution: "Formação continuada", type: "formação" },
];

export interface Espetaculo {
    year: string;
    name: string;
    venue: string;
    roles: string[];
    description: string;
}

export const espetaculos: Espetaculo[] = [
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

export interface Project {
    type: string;
    title: string;
    year: string;
    roles: string;
    award: string;
    link?: string;
}

export const projects: Project[] = [
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
    },
    {
        type: "Micro Curta-Metragem",
        title: "3AM",
        year: "2021",
        roles: "Atuação · Direção · Roteiro · Edição",
        award: "Selecionado — MacacuCine, Rio de Janeiro",
    },
];

export const autoRetratos = [
    { alt: "Auto-Retrato I — Luz e Sombra", gradient: "from-red-accent/25 via-gold/15 to-black" },
    { alt: "Auto-Retrato II — Identidade", gradient: "from-gold/25 via-red-accent/10 to-black" },
] as const;

export const ensaios = [
    { alt: "Ensaio — Luz Violeta", gradient: "from-purple-600/25 via-red-accent/15 to-black" },
    { alt: "Ensaio — Texturas", gradient: "from-blue-500/20 via-gold/15 to-black" },
    { alt: "Ensaio — Véus", gradient: "from-red-accent/20 via-purple-600/15 to-black" },
    { alt: "Ensaio — Atmosfera", gradient: "from-emerald-600/15 via-gold/15 to-black" },
    { alt: "Ensaio — Corpo e Luz", gradient: "from-gold/20 via-blue-500/10 to-black" },
] as const;

export const references = [
    { name: "La La Land", category: "Filme" },
    { name: "Mr. Nobody", category: "Filme" },
    { name: "Amélie Poulain", category: "Filme" },
    { name: "Brilho Eterno de uma Mente sem Lembranças", category: "Filme" },
    { name: "Marriage Story", category: "Filme" },
    { name: "Pride and Prejudice", category: "Filme" },
] as const;

export const technicalDetails = [
    { label: "Fotografia", value: "Edição · Direção · Atuação" },
    { label: "Recursos", value: "Luz de geladeira, velas, iluminação caseira, pós-produção em Photoshop" },
    { label: "Colaboração", value: "João FTK" },
    { label: "Período", value: "2019 – 2020" },
] as const;
