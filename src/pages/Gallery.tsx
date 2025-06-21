import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const galleryImages = [
  { src: '/images/Biochar Production.jpg', alt: 'Biochar Production' },
  { src: '/images/Wood Pellets 2.jpg', alt: 'Wood Pellets' },
  { src: '/images/Bamboo Biomass.jpg', alt: 'Bamboo Biomass' },
  { src: '/images/Ricehusk Biofuel.jpg', alt: 'Rice Husk Biofuel' },
  { src: '/images/Fertilizer Free Soil.jpg', alt: 'Fertilizer Free Soil' },
  { src: '/images/sustainable Transport.jpg', alt: 'Sustainable Transport' },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    setLightboxIndex((prev) =>
      prev === null ? 0 : prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setLightboxIndex((prev) =>
      prev === null ? 0 : prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  // Mobile swipe navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextImage();
      else if (endX - startX > 50) prevImage();
    };

    container.addEventListener('touchstart', onTouchStart);
    container.addEventListener('touchend', onTouchEnd);

    return () => {
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, [lightboxIndex]);

  return (
    <section className="py-16 px-4 md:px-16 bg-[#0a0a0a] text-white min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Our Impact in Frames
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-lg font-semibold">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <div
              ref={containerRef}
              className="relative w-full max-w-6xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:scale-110 transition"
                aria-label="Close"
              >
                <X size={32} />
              </button>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:scale-110 transition"
                aria-label="Previous"
              >
                <ArrowLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:scale-110 transition"
                aria-label="Next"
              >
                <ArrowRight size={32} />
              </button>

              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="w-full h-auto max-h-screen rounded-xl object-contain"
              />
              <p className="text-center mt-4 text-lg font-medium">
                {galleryImages[lightboxIndex].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
