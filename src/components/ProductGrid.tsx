

const products = [
  {
    name: 'Briquette',
    video: 'https://media.istockphoto.com/id/473371665/video/large-sized-briquettes-arranged-into-packages.mp4?s=mp4-640x640-is&k=20&c=gLkFttHxbTk97GNGkExl-AkCp2wKr7B8gCtGXjXeMf4=',
  },
  {
    name: 'Saw Dust',
    video: 'https://media.istockphoto.com/id/648993746/video/sawdust-falling-onto-a-pile.mp4?s=mp4-640x640-is&k=20&c=ZmWVCbo9bPkdCacYw8CTtWc6_O4wNtUq7mcRi2at3fM=',
  },
  {
    name: 'Wood Chips',
    video: 'https://media.istockphoto.com/id/1410608516/video/mobile-chipper-truck-on-firewood-processing-for-wood-chips-sawdust-and-fuel-briquettes.mp4?s=mp4-640x640-is&k=20&c=IWNwQMUmvNID-08I2EMC5uEaMHmIleSCLf7eLaC6B4s=',
  },
  {
    name: 'Wood Powder',
    video: '/videos/Wood Powder.mp4',
  },
  {
    name: 'Biochar',
    video: '/videos/Biochar (2).mp4',
  },
  {
    name: 'Bamboo',
    video: '/videos/Bamboo (2).mp4',
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2 animate-fade-in-up">Our Products</h2>
        <p className="text-lg text-gray-600 animate-fade-in-up delay-150">High-quality biomass solutions for a greener future</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-12 lg:px-20">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl group animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <video
              className="w-full h-64 object-cover"
              src={product.video}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-3 text-xl font-semibold backdrop-blur-sm group-hover:bg-opacity-80 transition-all">
              {product.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
