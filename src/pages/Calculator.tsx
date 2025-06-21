import { useState } from 'react';

const Calculator = () => {
  const [fuelCost, setFuelCost] = useState('');
  const [biofuelCost, setBiofuelCost] = useState('');
  const [savings, setSavings] = useState<number | null>(null);

  const calculateSavings = () => {
    const traditional = parseFloat(fuelCost);
    const renewable = parseFloat(biofuelCost);
    if (!isNaN(traditional) && !isNaN(renewable)) {
      const saved = traditional - renewable;
      setSavings(saved);
    }
  };

  return (
    <div className="py-10 px-4 md:px-12 max-w-xl mx-auto bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Savings Calculator</h2>
      <div className="space-y-4">
        <input
          type="number"
          value={fuelCost}
          onChange={(e) => setFuelCost(e.target.value)}
          placeholder="Current fuel cost (per ton)"
          className="w-full p-3 border rounded"
        />
        <input
          type="number"
          value={biofuelCost}
          onChange={(e) => setBiofuelCost(e.target.value)}
          placeholder="Biofuel cost (per ton)"
          className="w-full p-3 border rounded"
        />
        <button
          onClick={calculateSavings}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Calculate Savings
        </button>

        {savings !== null && (
          <p className="text-xl text-center text-green-700">
            You save ₹{savings.toFixed(2)} per ton!
          </p>
        )}
      </div>
    </div>
  );
};

export default Calculator;
