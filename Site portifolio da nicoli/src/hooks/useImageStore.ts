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
  const [images] = useState<ImageStore>(loadStore);
  const [embedded, setEmbedded] = useState<Record<string, string>>({});

  useEffect(() => {
    let isMounted = true;
    // Fetch embedded images from JSON once for the whole app
    fetch("/portfolio-images.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (isMounted) setEmbedded(data);
      })
      .catch((err) => {
        console.error("Error loading embedded images:", err);
        // Fallback or secondary error handling could go here
      });

    return () => {
      isMounted = false;
    };
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
