import { useState, useCallback, createContext, useContext, type ReactNode, createElement } from "react";

const STORAGE_KEY = "portfolio_images";

interface ImageStore {
  [key: string]: string;
}

function loadStore(): ImageStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

interface ImageStoreContextValue {
  getImage: (key: string) => string | null;
}

const ImageStoreContext = createContext<ImageStoreContextValue | null>(null);

export function ImageStoreProvider({ children }: { children: ReactNode }) {
  const [images] = useState<ImageStore>(loadStore);

  const getImage = useCallback(
    (key: string): string | null => {
      // Prioritize images from localStorage (if any)
      if (images[key]) return images[key];

      // Map keys to extracted portfolio images
      const portfolioPath = "/assets/images/portfolio/";
      const knownKeys = [
        "audiovisual-0", "audiovisual-1", "audiovisual-2",
        "exposicao-0", "exposicao-1", "exposicao-2", "exposicao-3", "exposicao-4", "exposicao-5",
        "foto-autoretrato-0", "foto-autoretrato-1",
        "foto-ensaio-0", "foto-ensaio-1", "foto-ensaio-2", "foto-ensaio-3", "foto-ensaio-4",
        "hero-profile"
      ];

      if (knownKeys.includes(key)) {
        return `${portfolioPath}${key}.jpeg`;
      }

      return null;
    },
    [images]
  );

  return createElement(ImageStoreContext.Provider, { value: { getImage } }, children);
}

export function useImageStore(): ImageStoreContextValue {
  const ctx = useContext(ImageStoreContext);
  if (!ctx) {
    throw new Error("useImageStore must be used inside <ImageStoreProvider>");
  }
  return ctx;
}
