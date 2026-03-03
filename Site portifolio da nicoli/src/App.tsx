import { useEffect } from "react";
import { ImageStoreProvider } from "./hooks/useImageStore";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Formacoes } from "./components/Formacoes";
import { Espetaculos } from "./components/Espetaculos";
import { Audiovisual } from "./components/Audiovisual";
import { Fotografia } from "./components/Fotografia";
import { Exposicao } from "./components/Exposicao";
import { Footer } from "./components/Footer";

import { SkipLink } from "./components/SkipLink";

export function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <ImageStoreProvider>
      <div className="relative">
        <SkipLink />
        <Navigation />
        <Hero />
        <main id="conteudo-principal">
          <Formacoes />
          <Espetaculos />
          <Audiovisual />
          <Fotografia />
          <Exposicao />
        </main>
        <Footer />
      </div>
    </ImageStoreProvider>
  );
}
