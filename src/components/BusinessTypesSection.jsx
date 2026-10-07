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
    <section
      id="business"
      className="relative py-24 bg-xion-dark overflow-hidden"
    >
      {/* --- Background Futuristic Effects --- */}
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-xion-blue rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-xion-orange rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse delay-1000"></div>

      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* --- Futuristic Badge --- */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-[0_0_15px_rgba(26,115,232,0.2)]">
          <span className="w-2 h-2 rounded-full bg-xion-orange animate-ping"></span>
          <span className="text-sm font-bold text-xion-orange tracking-wider uppercase">
            Industries We Serve
          </span>
        </div>

        {/* --- Heading --- */}
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          BUILT FOR BUSINESSES THAT <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-xion-blue to-cyan-400">
            WANT TO GROW
          </span>
        </h2>

        <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-16">
          Whether you run a small retail store or a growing multi-location
          business, Xion helps you stay in control.
        </p>

        {/* --- Futuristic Glass Pills --- */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {businessTypes.map((type, index) => (
            <div
              key={index}
              className="group relative px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-xion-blue/50 hover:shadow-[0_0_30px_rgba(26,115,232,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>

              {/* Pill Content */}
              <span className="relative z-10 flex items-center gap-3">
                {/* Glowing dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-xion-blue group-hover:bg-xion-orange transition-colors duration-300 shadow-[0_0_8px_rgba(26,115,232,0.8)]"></span>
                {type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypesSection;
