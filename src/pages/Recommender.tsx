import  { useState } from 'react';

const Recommender = () => {
  const [application, setApplication] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleRecommend = () => {
    switch (application) {
      case 'industrial-boiler':
        setSuggestion('Wood Pellets or Briquettes');
        break;
      case 'soil-enrichment':
        setSuggestion('Biochar');
        break;
      case 'plastic-alternative':
        setSuggestion('BioCarbon or Bamboo Powder');
        break;
      default:
        setSuggestion('Please select a valid application.');
    }
  };

  return (
    <div className="py-10 px-4 md:px-12 max-w-xl mx-auto bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Product Recommender</h2>
      <div className="space-y-4">
        <select
          value={application}
          onChange={(e) => setApplication(e.target.value)}
          className="w-full p-3 border rounded"
        >
          <option value="">-- Select Application --</option>
          <option value="industrial-boiler">Industrial Boiler</option>
          <option value="soil-enrichment">Soil Enrichment</option>
          <option value="plastic-alternative">Plastic Alternative</option>
        </select>
        <button
          onClick={handleRecommend}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Recommend Product
        </button>

        {suggestion && (
          <p className="text-xl text-center text-green-700">
            Recommended: <strong>{suggestion}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Recommender;