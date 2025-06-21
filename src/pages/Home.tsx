import HeroSlider from '../components/HeroSlider';
import CarbonClock from '../components/CarbonClock';
import ProductGrid from '../components/ProductGrid';
import WhatsAppChat from '../components/WhatsAppChat';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <HeroSlider />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6 text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl">
              Welcome to <span className="text-green-400">ShuHaRi Renewables</span>
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-gray-200">
              Empowering India's Green Revolution with AI-Driven Biofuels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carbon Clock */}
      <motion.section
        className="bg-black text-white py-12 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Time Left to Limit Global Warming to 2°C
        </h2>
        <CarbonClock />
      </motion.section>

      {/* Shuhari Story */}
      <motion.section
        className="px-6 py-16 md:px-16 bg-gradient-to-b from-gray-900 to-black"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-6xl mx-auto space-y-14 text-center">
          <div>
            <h2 className="text-4xl font-bold text-green-400 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are an Indian bioenergy startup leading the SAMARTH mission. We upcycle agro-residues into green fuels using smart logistics and data-backed sustainability.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-400 mb-4">What We Do</h2>
            <p className="text-lg text-gray-300">We manufacture:</p>
            <ul className="list-disc pl-6 text-left max-w-xl mx-auto mt-4 space-y-2 text-gray-200 text-lg">
              <li>🌱 Biofuel – Pellets & Briquettes</li>
              <li>🔥 BioChar & BioCarbon</li>
              <li>🎋 Bamboo Powder</li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-purple-400 mb-4">Why We Do It</h2>
            <p className="text-lg text-gray-300">
              To eliminate the use of coal and plastics, reduce CO₂ emissions, and create a regenerative economy rooted in green energy.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        className="bg-gray-100 text-gray-900 py-16 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>
        <ProductGrid />
      </motion.section>

      {/* Floating CTA Buttons */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/9619596561"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105"
        >
          💬 Chat on WhatsApp
        </a>
        <a
          href="mailto:info@shuhari.co.in"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105"
        >
          <Mail size={18} />
          Email Us
        </a>
      </div>

      {/* WhatsApp Plugin */}
      <WhatsAppChat />
    </div>
  );
};

export default Home;
