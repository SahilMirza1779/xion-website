const businessTypes = [
  "Retail Stores",
  "Supermarkets",
  "Wholesale Businesses",
  "Fashion & Garments",
  "Electronics",
  "General Stores",
  "Pharmacies",
  "Restaurants & More",
];

const BusinessTypesSection = () => {
  return (
    <section id="business" className="py-20 bg-xion-dark text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          BUILT FOR BUSINESSES THAT WANT TO GROW
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12">
          Whether you run a small retail store or a growing multi-location
          business, Xion helps you stay in control.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {businessTypes.map((type, index) => (
            <span
              key={index}
              className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium border border-white/20 hover:bg-xion-blue transition cursor-default"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypesSection;
