export default function CarbonClock() {
  return (
    <section className="relative w-full bg-black py-12 px-4 flex flex-col items-center justify-center">
      {/* Background image/video overlay (optional) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url("/images/co2-bg.jpg")' }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Time left to limit global warming to 2°C</h2>
        <p className="mb-6 text-base md:text-lg text-gray-200">
          We’re racing against time. The carbon budget is depleting fast. Every second matters.
        </p>

        <div className="w-full h-[360px] max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-white">
          <iframe
            src="https://www.mcc-berlin.net/fileadmin/data/clock/carbon_clock.htm"
            title="Carbon Clock"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
