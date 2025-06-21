

const Dealer = () => {
  return (
    <div className="py-10 px-4 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Become a Dealer</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <form className="space-y-4 bg-gray-100 p-6 rounded-xl shadow">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" required />
          <input type="email" placeholder="Email Address" className="w-full p-3 border rounded" required />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded" required />
          <textarea placeholder="Message or Business Details" rows={4} className="w-full p-3 border rounded" required></textarea>
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
            Submit
          </button>
        </form>

        <div className="bg-green-50 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Why Partner with ShuHaRi?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>High-demand biofuel products</li>
            <li>Competitive pricing and margins</li>
            <li>Marketing and sales support</li>
            <li>On-time logistics and delivery</li>
            <li>Join India’s clean energy movement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dealer;
