import { useState } from "react";

const STORAGE_KEY = "portfolio_images";

const ALL_IMAGE_KEYS = [
  "hero-profile",
  "audiovisual-0",
  "audiovisual-1",
  "audiovisual-2",
  "foto-autoretrato-0",
  "foto-autoretrato-1",
  "foto-ensaio-0",
  "foto-ensaio-1",
  "foto-ensaio-2",
  "foto-ensaio-3",
  "foto-ensaio-4",
  "exposicao-0",
  "exposicao-1",
  "exposicao-2",
  "exposicao-3",
  "exposicao-4",
  "exposicao-5",
];

export function ExportTool() {
  const [status, setStatus] = useState<"idle" | "done" | "error">("idle");
  const [imageCount, setImageCount] = useState(0);

  const handleExport = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setStatus("error");
        return;
      }

      const store = JSON.parse(raw);
      const found: Record<string, string> = {};
      let count = 0;

      for (const key of ALL_IMAGE_KEYS) {
        if (store[key]) {
          found[key] = store[key];
          count++;
        }
      }

      if (count === 0) {
        setStatus("error");
        return;
      }

      // Generate TypeScript file content
      let tsContent = "// Auto-generated embedded images\n";
      tsContent += "// Generated on " + new Date().toISOString() + "\n\n";
      tsContent += "export const embeddedImages: Record<string, string> = {\n";

      for (const [key, value] of Object.entries(found)) {
        // Escape any backticks in the base64 string (shouldn't be any, but just in case)
        const escaped = (value as string).replace(/`/g, "\\`").replace(/\$/g, "\\$");
        tsContent += `  "${key}": \`${escaped}\`,\n`;
      }

      tsContent += "};\n";

      // Download
      const blob = new Blob([tsContent], { type: "text/typescript" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "embedded-images.ts";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setImageCount(count);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end gap-2">
      {status === "done" && (
        <div className="bg-green-900/90 border border-green-500/30 text-green-300 px-4 py-2 rounded-sm font-mono text-xs backdrop-blur-sm">
          ✓ {imageCount} imagens exportadas! Envie o arquivo baixado no chat.
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-900/90 border border-red-500/30 text-red-300 px-4 py-2 rounded-sm font-mono text-xs backdrop-blur-sm">
          ✗ Nenhuma imagem encontrada no localStorage.
        </div>
      )}
      <button
        onClick={handleExport}
        className="bg-gold/90 hover:bg-gold text-black font-mono text-xs tracking-[0.15em] uppercase px-5 py-3 rounded-sm shadow-lg hover:shadow-gold/20 transition-all duration-300 backdrop-blur-sm"
      >
        📦 Exportar Imagens
      </button>
    </div>
  );
}
