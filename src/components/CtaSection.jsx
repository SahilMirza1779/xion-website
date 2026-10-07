const CtaSection = () => {
  return (
    <section id="cta" className="relative py-24 bg-xion-dark overflow-hidden">
      {/* --- Background Futuristic Effects --- */}
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-xion-blue rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-xion-orange rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse delay-1000"></div>

      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Main Glass Panel --- */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-[0_0_50px_rgba(26,115,232,0.2)] relative overflow-hidden">
          {/* Inner Card Glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-xion-blue blur-[100px] opacity-30 pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-xion-orange blur-[100px] opacity-20 pointer-events-none"></div>

          {/* Futuristic Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 shadow-[0_0_15px_rgba(249,171,0,0.2)] relative z-10">
            <span className="w-2 h-2 rounded-full bg-xion-orange animate-ping"></span>
            <span className="text-sm font-bold text-xion-orange tracking-wider uppercase">
              Ready to Upgrade?
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight relative z-10">
            YOUR BUSINESS DESERVES <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-xion-orange to-yellow-300">
              BETTER TOOLS.
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10 font-medium">
            Start managing your business the smarter way with Xion.
          </p>

          {/* Futuristic Shimmer Button */}
          <a
            href="#"
            className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-xion-orange to-yellow-500 rounded-full overflow-hidden shadow-[0_0_20px_rgba(249,171,0,0.5)] hover:shadow-[0_0_35px_rgba(249,171,0,0.8)] transition-all duration-300 hover:scale-105 group z-10"
          >
            {/* Shimmer Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

            <span className="relative z-10 flex items-center gap-3">
              Get Started with Xion
              {/* Arrow Icon */}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
