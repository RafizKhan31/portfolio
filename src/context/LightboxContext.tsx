import React, { createContext, useContext, useState } from 'react';
import { ImageLightbox, LightboxImage } from '../components/ImageLightbox';

interface LightboxContextType {
  openLightbox: (image: LightboxImage) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentImage, setCurrentImage] = useState<LightboxImage | null>(null);

  const openLightbox = (image: LightboxImage) => {
    setCurrentImage(image);
  };

  const closeLightbox = () => {
    setCurrentImage(null);
  };

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      <ImageLightbox image={currentImage} onClose={closeLightbox} />
    </LightboxContext.Provider>
  );
};

export const useLightbox = (): LightboxContextType => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
