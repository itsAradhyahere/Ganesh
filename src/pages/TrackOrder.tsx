import  { useState } from 'react';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleTrack = () => {
    // Simulated response
    if (orderId.trim() === '') {
      setStatus('Please enter a valid Order ID.');
    } else {
      setStatus(`Order ${orderId.toUpperCase()} is currently in transit and will be delivered soon.`);
    }
  };

  return (
    <div className="py-10 px-4 md:px-12 max-w-xl mx-auto bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Track Your Order</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter your Order ID"
          className="w-full p-3 border rounded"
        />
        <button
          onClick={handleTrack}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Track Order
        </button>

        {status && (
          <p className="text-center text-lg text-blue-600 mt-4">
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;