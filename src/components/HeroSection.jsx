const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-xion-dark mb-6 leading-tight">
          Run Your Business. <span className="text-xion-blue">Smarter.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
          Powerful POS & Business Management Software Built for Modern
          Businesses. Manage sales, inventory, customers, products, staff and
          business performance from one simple, powerful platform.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#cta"
            className="bg-xion-blue text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition shadow-xl transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="bg-white text-xion-dark px-10 py-4 rounded-full text-lg font-bold border-2 border-gray-200 hover:border-xion-blue transition shadow-lg transform hover:scale-105"
          >
            Explore Xion
          </a>
        </div>

        <p className="mt-8 text-gray-500 font-medium">
          Sell faster. Manage smarter. Grow with confidence.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
