

const About = () => {
  return (
    <div className="py-10 px-4 md:px-12 bg-white space-y-10 max-w-5xl mx-auto">
      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
        <p className="text-lg text-gray-700 text-center">
          Empowering India’s rural economy by converting agricultural waste into clean, renewable energy.
          We believe in a carbon-negative future through sustainable biomass solutions.
        </p>
      </section>

      <section className="bg-green-50 p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold mb-3">Part of SAMARTH Mission</h3>
        <p className="text-gray-700">
          ShuHaRi is recognized under the Government of India’s <strong>SAMARTH (Sustainable Agrarian Mission for Renewable Technology Harnessing)</strong>
          — accelerating adoption of biomass technologies for cleaner energy production.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-3">Why We Do It</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Reduce India’s dependence on fossil fuels and imported coal</li>
          <li>Support farmers with alternate income by buying agri-waste</li>
          <li>Build a circular economy using carbon-negative technologies</li>
          <li>Make clean energy affordable, scalable, and decentralized</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
