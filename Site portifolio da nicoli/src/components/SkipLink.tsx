import React from 'react';

export function SkipLink() {
    return (
        <a
            href="#conteudo-principal"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-gold focus:text-black focus:font-mono focus:text-xs focus:tracking-widest focus:uppercase focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
        >
            Pular para o conteúdo principal
        </a>
    );
}
