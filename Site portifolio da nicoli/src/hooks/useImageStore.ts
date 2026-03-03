import { useState, useCallback, useEffect } from "react";

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
  const [embedded, setEmbedded] = useState<Record<string, string>>({});

  useEffect(() => {
    // Fetch embedded images from JSON to avoid blocking the main bundle with inline data
    fetch('/portfolio-images.json')
      .then((res) => res.json())
      .then((data) => {
        setEmbedded(data);
      })
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
      // First check localStorage (user overrides)
      // Then check embedded images
      return images[key] || embedded[key] || null;
    },
    [images, embedded]
  );

  return { getImage };
}
