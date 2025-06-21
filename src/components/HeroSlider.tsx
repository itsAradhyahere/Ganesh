import { useEffect, useState } from "react";

const videos = [
  "/videos/Merge Slider 1.mp4",     // Hero message + environment
  "/videos/Slider 3.mp4",  // Samarth Mission video
  "/videos/joinus-slider.mp4",   // Join the movement
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 8000); // 8 sec per video
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        key={videos[currentIndex]}
        src={videos[currentIndex]}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow">
            Welcome to ShuHaRi Renewables
          </h1>
          <p className="text-lg md:text-xl drop-shadow">
            Join us in displacing Coal, Plastic & Chemical Fertilizer with Sustainable Biofuels.
          </p>
        </div>
      </div>
    </div>
  );
}

