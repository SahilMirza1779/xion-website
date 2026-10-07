const steps = [
  {
    num: 1,
    title: "Sell.",
    desc: "Process transactions faster with a modern, intuitive POS.",
  },
  {
    num: 2,
    title: "Manage.",
    desc: "Keep products, inventory, customers and staff organized.",
  },
  {
    num: 3,
    title: "Understand.",
    desc: "Get the insights you need to make better business decisions.",
  },
  {
    num: 4,
    title: "Grow.",
    desc: "Build a stronger, more efficient and scalable business.",
  },
];

const WorkflowSection = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-xion-blue rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Section Heading --- */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 mb-6 shadow-[0_0_15px_rgba(26,115,232,0.1)]">
            <span className="w-2 h-2 rounded-full bg-xion-blue animate-ping"></span>
            <span className="text-sm font-bold text-xion-blue tracking-wider uppercase">
              Your Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-xion-dark mb-4 tracking-tight">
            FROM YOUR FIRST SALE TO <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-xion-blue to-cyan-500">
              YOUR NEXT BIG MOVE
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, powerful workflow designed to take your business from day
            one to nationwide.
          </p>
        </div>

        {/* --- Timeline/Steps Container --- */}
        <div className="relative">
          {/* Connecting Glowing Line (Desktop) */}
          <div className="hidden lg:block absolute top-[5rem] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-transparent via-xion-blue/30 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,115,232,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden text-center"
              >
                {/* Card Hover Spotlight Effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-xion-blue rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

                {/* Top Gradient Border Glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-xion-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Futuristic Number Node */}
                <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-xion-blue to-cyan-400 text-white text-3xl font-black flex items-center justify-center shadow-[0_0_30px_rgba(26,115,232,0.4)] border-4 border-white group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(26,115,232,0.6)] transition-all duration-300 mb-6">
                  {step.num}
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold text-xion-dark mb-3 group-hover:text-xion-blue transition-colors duration-300 z-10">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-600 leading-relaxed text-sm z-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
