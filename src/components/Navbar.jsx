const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo aur naam */}
        <div className="flex items-center space-x-3">
          <img
            src="/xion-logo.png"
            alt="XION POS Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-xion-dark">XION</span>
        </div>

        {/* Navigation links (desktop) */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-xion-blue font-medium transition"
          >
            Features
          </a>
          <a
            href="#business"
            className="text-gray-600 hover:text-xion-blue font-medium transition"
          >
            Business Types
          </a>
          <a
            href="#why"
            className="text-gray-600 hover:text-xion-blue font-medium transition"
          >
            Why Xion
          </a>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="#cta"
            className="bg-xion-orange text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
