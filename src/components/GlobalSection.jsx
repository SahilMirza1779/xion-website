const GlobalSection = () => {
  const regions = ["Africa", "Canada", "Middle East", "Asia", "Worldwide"];

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      <div className="absolute top-20 left-0 w-96 h-96 bg-xion-blue rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* --- Futuristic Badge --- */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 mb-6 shadow-[0_0_15px_rgba(26,115,232,0.1)]">
          <span className="w-2 h-2 rounded-full bg-xion-blue animate-ping"></span>
          <span className="text-sm font-bold text-xion-blue tracking-wider uppercase">
            Global Reach
          </span>
        </div>

        {/* --- Heading --- */}
        <h2 className="text-4xl md:text-5xl font-black text-xion-dark mb-6 tracking-tight">
          READY FOR THE WAY <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-xion-blue to-cyan-500">
            BUSINESS WORKS TODAY
          </span>
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Designed with the flexibility modern businesses need across different
          markets, currencies, business models and operations.
        </p>

        {/* --- Futuristic Globe Visual --- */}
        <div className="relative w-48 h-48 mx-auto mb-16 flex items-center justify-center">
          {/* Outer Rotating Ring */}
          <div className="absolute inset-0 border-2 border-dashed border-xion-blue/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
          {/* Inner Rotating Ring (Reverse) */}
          <div className="absolute inset-4 border border-cyan-300/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          {/* Glowing Core */}
          <div className="absolute inset-0 bg-gradient-to-tr from-xion-blue to-cyan-400 rounded-full blur-[50px] opacity-20 animate-pulse"></div>

          {/* Globe Emoji */}
          <span className="text-8xl relative z-10 drop-shadow-[0_0_20px_rgba(26,115,232,0.5)] hover:scale-110 transition-transform duration-500">
            🌍
          </span>

          {/* Floating Tech Dots */}
          <div className="absolute top-2 right-4 w-3 h-3 bg-xion-orange rounded-full shadow-[0_0_15px_rgba(249,171,0,0.8)] animate-bounce"></div>
          <div className="absolute bottom-4 left-2 w-2 h-2 bg-xion-blue rounded-full shadow-[0_0_15px_rgba(26,115,232,0.8)] animate-bounce delay-300"></div>
        </div>

        {/* --- Region Glass Pills --- */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {regions.map((region, index) => (
            <div
              key={index}
              className="group relative px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-100 text-gray-700 font-bold text-lg shadow-sm hover:shadow-[0_10px_30px_rgba(26,115,232,0.15)] hover:border-xion-blue/30 hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>

              {/* Pill Content */}
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-xion-blue group-hover:bg-xion-orange transition-colors duration-300"></span>
                {region}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
