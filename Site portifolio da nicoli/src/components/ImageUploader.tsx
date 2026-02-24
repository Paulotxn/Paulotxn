import { type ReactElement } from "react";

interface ImageUploaderProps {
  imageKey: string;
  currentImage: string | null;
  aspectRatio?: string;
  className?: string;
  gradientFallback?: string;
  label?: string;
  rounded?: boolean;
}

export function ImageUploader(props: ImageUploaderProps): ReactElement {
  const {
    currentImage,
    aspectRatio = "aspect-square",
    className = "",
    gradientFallback = "from-gold/10 via-red-accent/5 to-dark-bg",
    label = "",
    rounded = false,
  } = props;

  return (
    <div
      className={`relative ${aspectRatio} ${className} group/uploader`}
    >
      {currentImage ? (
        <div className={`relative w-full h-full overflow-hidden ${rounded ? "rounded-full" : "rounded-sm"}`}>
          <img
            src={currentImage}
            alt={label}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/uploader:scale-110"
          />
        </div>
      ) : (
        <div className={`relative w-full h-full overflow-hidden ${rounded ? "rounded-full" : "rounded-sm"} border border-dashed border-white/10 transition-colors`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientFallback} opacity-30 transition-opacity`} />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <span className="text-[8px] text-white/20 font-mono uppercase tracking-[0.2em]">
              {label}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
