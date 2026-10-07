const features = [
  {
    icon: "⚡",
    title: "Smart POS",
    desc: "Fast, simple and reliable checkout for everyday transactions.",
  },
  {
    icon: "📦",
    title: "Inventory Management",
    desc: "Know what's in stock, what's selling and what needs attention.",
  },
  {
    icon: "📊",
    title: "Powerful Business Insights",
    desc: "Turn your business data into clear, actionable insights.",
  },
  {
    icon: "🔖",
    title: "Barcode & Product Management",
    desc: "Speed up sales and keep your entire product catalog organized.",
  },
  {
    icon: "👥",
    title: "Customer Management",
    desc: "Build stronger customer relationships with organized customer records and purchase history.",
  },
  {
    icon: "🏪",
    title: "Multi-Store Management",
    desc: "Manage multiple branches, locations and operations from one platform.",
  },
  {
    icon: "👨‍💼",
    title: "Staff & User Management",
    desc: "Control access, assign roles and keep your team organized.",
  },
  {
    icon: "🧾",
    title: "Professional Invoicing",
    desc: "Create clear, professional invoices and receipts with ease.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      <div className="absolute top-40 left-0 w-96 h-96 bg-xion-blue rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Section Heading --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 mb-6 shadow-[0_0_15px_rgba(26,115,232,0.1)]">
            <span className="w-2 h-2 rounded-full bg-xion-blue animate-ping"></span>
            <span className="text-sm font-bold text-xion-blue tracking-wider uppercase">
              All-In-One Platform
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-xion-dark mb-4 tracking-tight">
            EVERYTHING YOUR BUSINESS NEEDS. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-xion-blue to-cyan-500">
              ONE PLATFORM.
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed to help you sell faster, manage smarter, and
            grow with confidence.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,115,232,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Card Hover Spotlight Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-xion-blue rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

              {/* Top Gradient Border Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-xion-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Futuristic Icon Box */}
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-3xl mb-6 shadow-sm border border-blue-100 group-hover:border-xion-blue/30 group-hover:shadow-[0_0_20px_rgba(26,115,232,0.2)] group-hover:-translate-y-1 transition-all duration-300 z-10">
                <span className="drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-bold text-xion-dark mb-3 group-hover:text-xion-blue transition-colors duration-300 z-10">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-600 leading-relaxed text-sm mb-6 z-10">
                {feature.desc}
              </p>

              {/* --- LIVE "Learn More" Button --- */}
              <a
                href="#cta"
                className="relative inline-flex items-center text-sm font-bold text-xion-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10 cursor-pointer hover:text-xion-dark active:scale-95"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
