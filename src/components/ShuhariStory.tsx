import { motion } from 'framer-motion';

const ShuhariStory = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-16 md:px-20" id="shuhari-story">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Mission: Displace COAL, PLASTIC & CHEMICAL FERTILIZER
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl max-w-4xl mx-auto text-center leading-relaxed mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        ShuHaRi manufactures and trades in Wood Pellets, Briquettes, Bamboo, Saw Dust, Wood Chips, Wood Powder & Biochar.
        We aim to reduce incineration of agricultural residue, avoid synthetic fertilizers in soil, and replace coal in thermal plants.
      </motion.p>

      <motion.div
        className="relative w-full h-72 md:h-[420px] overflow-hidden rounded-3xl shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          src="/videos/story-video.mp4" // Use merged video here
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>

      <motion.p
        className="text-lg md:text-xl max-w-3xl mx-auto text-center mt-12 text-green-700 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Join us in our mission to fight climate change — for People, Forests, Soil & a Greener Planet.
      </motion.p>
    </section>
  );
};

export default ShuhariStory;
