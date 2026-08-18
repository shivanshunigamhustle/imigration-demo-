import { useState } from "react";
import { ImageIcon } from "lucide-react";

/**
 * Drop-in <img> replacement. If the real photo (src) hasn't been added to
 * /public yet, it renders a soft gradient placeholder instead of a broken
 * image icon, so the UI still looks finished before real photos exist.
 */
export default function Img({ src, alt = "", className = "", imgClassName = "", rounded = "rounded-2xl", ...rest }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative overflow-hidden ${rounded} ${className} bg-gradient-to-br from-[#f4e3d3] via-[#f8ddd0] to-[#e9cfd8] flex items-center justify-center`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_45%)]" />
        <ImageIcon className="w-1/6 h-1/6 min-w-6 min-h-6 text-white/70" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`${rounded} ${className} ${imgClassName} object-cover`}
      {...rest}
    />
  );
}
