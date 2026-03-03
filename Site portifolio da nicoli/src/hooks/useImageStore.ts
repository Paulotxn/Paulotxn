import { useState, useCallback, useEffect, createContext, useContext, type ReactNode, createElement } from "react";

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
  const [images, setImages] = useState<ImageStore>(loadStore);
  const [embedded, setEmbedded] = useState<Record<string, string>>({});

  useEffect(() => {
    // Fetch embedded images from JSON once for the whole app
    fetch("/portfolio-images.json")
      .then((res) => res.json())
      .then((data) => setEmbedded(data))
      .catch((err) => console.error("Error loading embedded images:", err));

    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setImages(loadStore());
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const getImage = useCallback(
    (key: string): string | null => {
      return images[key] || embedded[key] || null;
    },
    [images, embedded]
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
