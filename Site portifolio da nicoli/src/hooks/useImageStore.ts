import { useState, useCallback, useEffect } from "react";
import { embeddedImages } from "../data/embedded-images";

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

export function useImageStore() {
  const [images, setImages] = useState<ImageStore>(loadStore);

  useEffect(() => {
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
      // First check localStorage (user overrides)
      // Then check embedded images
      return images[key] || embeddedImages[key] || null;
    },
    [images]
  );

  const setImage = useCallback((key: string, base64: string) => {
    const newStore = { ...loadStore(), [key]: base64 };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStore));
    setImages(newStore);
  }, []);

  return { getImage, setImage };
}
