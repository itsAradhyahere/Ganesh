import { motion } from 'framer-motion';

const joinUsVideos = [
  '/videos/Join Us 1.mp4',
  '/videos/Join Us 2.mp4',
  '/videos/Join Us 3.mp4',
  '/videos/Join Us 4.mp4',
  
];

const JoinUs = () => {
  return (
    <section
      className="bg-black text-white py-16 px-4 md:px-12 lg:px-20"
      id="join-us"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-center mb-6"
      >
        Join Us in Building a Greener India 🇮🇳
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center text-lg md:text-xl max-w-4xl mx-auto mb-10"
      >
        Become part of our mission to replace coal and plastic with sustainable
        biomass solutions. Let’s reverse climate change — together.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {joinUsVideos.map((videoUrl, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-64 md:h-72 object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JoinUs;
