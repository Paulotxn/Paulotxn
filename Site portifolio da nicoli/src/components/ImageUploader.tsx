import { useRef } from "react";
import { useImageStore } from "../hooks/useImageStore";

interface ImageUploaderProps {
  imageKey: string;
  currentImage: string | null;
  aspectRatio?: string;
  className?: string;
  gradientFallback?: string;
  label?: string;
  rounded?: boolean;
}

export function ImageUploader({
  imageKey,
  currentImage,
  aspectRatio = "aspect-square",
  className = "",
  gradientFallback = "from-gold/10 via-red-accent/5 to-dark-bg",
  label = "",
  rounded = false,
}: ImageUploaderProps) {
  const { setImage } = useImageStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setImage(imageKey, base64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`relative ${aspectRatio} ${className} cursor-pointer group/uploader`}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      {currentImage ? (
        <div className={`relative w-full h-full overflow-hidden ${rounded ? "rounded-full" : "rounded-sm"}`}>
          <img
            src={currentImage}
            alt={label}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/uploader:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/uploader:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-[10px] text-white font-mono uppercase tracking-widest bg-black/60 px-2 py-1">Trocar</span>
          </div>
        </div>
      ) : (
        <div className={`relative w-full h-full overflow-hidden ${rounded ? "rounded-full" : "rounded-sm"} border border-dashed border-white/10 group-hover/uploader:border-gold/30 transition-colors`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientFallback} opacity-30 group-hover/uploader:opacity-50 transition-opacity`} />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-8 h-8 mb-2 border border-white/20 flex items-center justify-center group-hover/uploader:border-gold/40 transition-colors">
              <span className="text-white/40 group-hover/uploader:text-gold/60">+</span>
            </div>
            <span className="text-[8px] text-white/40 font-mono uppercase tracking-[0.2em] group-hover/uploader:text-gold/60">
              {label || "Upload"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
