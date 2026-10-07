import xionLogo from "../assets/XION-web-logo2.png";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gray-50 overflow-hidden">
      {/* --- Background Futuristic Glowing Orbs --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-xion-blue rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-xion-orange rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* --- Left Side: Text Content --- */}
        <div className="text-center lg:text-left">
          {/* Futuristic Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-xion-blue animate-ping"></span>
            <span className="text-sm font-bold text-xion-blue tracking-wider uppercase">
              Next-Gen POS System
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-xion-dark mb-6 leading-tight tracking-tight">
            Run Your Business. <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-xion-blue to-cyan-500">
              Smarter.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Powerful POS & Business Management Software Built for Modern
            Businesses. Manage sales, inventory, customers, products, staff and
            business performance from one simple, powerful platform.
          </p>

          {/* --- LIVE Buttons --- */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            {/* Get Started Button (Opens Form) */}
            <button
              onClick={() => window.dispatchEvent(new Event("openXionForm"))}
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-xion-blue to-blue-600 rounded-full overflow-hidden shadow-[0_0_20px_rgba(26,115,232,0.4)] hover:shadow-[0_0_30px_rgba(26,115,232,0.6)] transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              {/* Shimmer Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10">Get Started</span>
            </button>

            {/* Explore Xion Button (Smooth Scroll) */}
            <button
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-xion-dark bg-white/60 backdrop-blur-md border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Explore Xion
            </button>
          </div>

          <p className="mt-8 text-gray-500 font-medium text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-xion-orange"></span>
            Sell faster. Manage smarter. Grow with confidence.
          </p>
        </div>

        {/* --- Right Side: Image with Futuristic Effects --- */}
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          {/* Rotating Dashed Halo (Tech Ring) */}
          <div className="absolute w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] border-2 border-dashed border-xion-blue/30 rounded-full animate-[spin_20s_linear_infinite]"></div>

          {/* Inner Glow */}
          <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-tr from-xion-blue to-cyan-400 rounded-full blur-[80px] opacity-30 animate-pulse"></div>

          {/* XION Logo Image */}
          <img
            src={xionLogo}
            alt="XION POS System"
            className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-[0_20px_50px_rgba(26,115,232,0.3)] hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Floating Tech Elements (Small dots) */}
          <div className="absolute top-10 right-10 w-4 h-4 bg-xion-orange rounded-full shadow-[0_0_15px_rgba(249,171,0,0.8)] animate-bounce"></div>
          <div className="absolute bottom-20 left-10 w-3 h-3 bg-xion-blue rounded-full shadow-[0_0_15px_rgba(26,115,232,0.8)] animate-bounce delay-500"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
