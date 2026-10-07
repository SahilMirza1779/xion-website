const reasons = [
  {
    icon: "✨",
    title: "Easy to Use",
    desc: "No complicated workflows. Get your team up and running quickly.",
  },
  {
    icon: "🚀",
    title: "Fast & Reliable",
    desc: "Built for smooth day-to-day business operations.",
  },
  {
    icon: "📈",
    title: "Flexible & Scalable",
    desc: "Start small and scale as your business grows.",
  },
  {
    icon: "🛡️",
    title: "Secure & Organized",
    desc: "Keep your business information structured and protected.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-xion-blue rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Section Heading --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 mb-6 shadow-[0_0_15px_rgba(26,115,232,0.1)]">
            <span className="w-2 h-2 rounded-full bg-xion-blue animate-ping"></span>
            <span className="text-sm font-bold text-xion-blue tracking-wider uppercase">
              Why Xion
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-xion-dark mb-4 tracking-tight">
            WHY BUSINESSES <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-xion-blue to-cyan-500">
              CHOOSE XION
            </span>
          </h2>
        </div>

        {/* --- Reasons Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,115,232,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden text-center"
            >
              {/* Card Hover Spotlight Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-xion-blue rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

              {/* Top Gradient Border Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-xion-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Futuristic Icon Box */}
              <div className="relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-3xl mb-6 shadow-sm border border-blue-100 group-hover:border-xion-blue/30 group-hover:shadow-[0_0_20px_rgba(26,115,232,0.2)] group-hover:-translate-y-1 transition-all duration-300 z-10">
                <span className="drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-bold text-xion-dark mb-3 group-hover:text-xion-blue transition-colors duration-300 z-10">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-600 leading-relaxed text-sm z-10">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
