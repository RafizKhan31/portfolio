import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, ExternalLink } from 'lucide-react';

export interface LightboxImage {
  src: string;
  title: string;
  subtitle?: string;
  category?: string;
}

interface ImageLightboxProps {
  image: LightboxImage | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ image, onClose }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setScale(1);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  const zoomIn = () => setScale((s) => Math.min(s + 0.3, 3));
  const zoomOut = () => setScale((s) => Math.max(s - 0.3, 0.6));
  const resetZoom = () => setScale(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-3 sm:p-6 backdrop-blur-xl bg-black/85 transition-opacity duration-200"
      onClick={onClose}
    >
      {/* Top Bar Controls */}
      <div
        className="w-full max-w-6xl flex items-center justify-between pb-3 text-white z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          {image.category && (
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
              {image.category}
            </span>
          )}
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-white drop-shadow">
            {image.title}
          </h3>
          {image.subtitle && (
            <p className="text-xs text-slate-400 line-clamp-1">{image.subtitle}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Controls */}
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/15">
            <button
              type="button"
              onClick={zoomOut}
              className="p-1.5 rounded-md hover:bg-white/20 transition-colors text-slate-200 hover:text-white"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono px-1 min-w-[3rem] text-center text-slate-300">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={zoomIn}
              className="p-1.5 rounded-md hover:bg-white/20 transition-colors text-slate-200 hover:text-white"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={resetZoom}
              className="p-1.5 rounded-md hover:bg-white/20 transition-colors text-slate-200 hover:text-white"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Open full / Download */}
          <a
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors border border-white/15"
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={image.src}
            download
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors border border-white/15"
            title="Download image"
          >
            <Download className="w-4 h-4" />
          </a>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-red-500/80 text-white transition-colors border border-white/15 ml-2"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        className="relative flex-1 w-full max-w-6xl max-h-[82vh] flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-2xl p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.title}
          style={{ transform: `scale(${scale})` }}
          className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-150 ease-out select-none shadow-2xl"
          draggable={false}
        />
      </div>

      <div className="pt-2 text-center text-xs text-slate-400">
        Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[11px] text-slate-300">Esc</kbd> or click outside to exit
      </div>
    </div>
  );
};
