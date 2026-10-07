import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    mobile: "",
    email: "",
    businessName: "",
    businessType: "",
    message: "",
  });

  // --- Custom Event Listener (Hero section se trigger hoga) ---
  useEffect(() => {
    const handleOpenForm = () => setIsOpen(true);
    window.addEventListener("openXionForm", handleOpenForm);
    return () => window.removeEventListener("openXionForm", handleOpenForm);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Business Types", href: "#business" },
    { name: "Why Xion", href: "#why" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminEmail = "Xionsoftwarersa@gmail.com";
    const subject = `New Inquiry from ${formData.name} - XION POS`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMobile: ${formData.mobile}%0D%0ACountry: ${formData.country}%0D%0ABusiness Name: ${formData.businessName}%0D%0ABusiness Type: ${formData.businessType}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setIsOpen(false);
  };

  return (
    <>
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <img
                src="/xion-logo.png"
                alt="XION POS Logo"
                className="h-10 w-auto drop-shadow-[0_0_10px_rgba(26,115,232,0.6)] group-hover:scale-110 transition-transform duration-300 z-10 relative"
              />
              <div className="absolute inset-0 bg-xion-blue blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-xion-dark to-xion-blue leading-none">
                XION
              </span>
              <span className="text-[10px] font-bold text-xion-orange tracking-[0.2em] uppercase leading-none mt-1">
                POS System
              </span>
            </div>
          </div>

          {/* Center Links */}
          <div className="hidden lg:flex items-center bg-white/40 border border-white/60 px-2 py-1.5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-sm font-bold text-gray-600 hover:text-xion-blue hover:bg-white rounded-full transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="relative hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-xion-orange to-yellow-500 rounded-full overflow-hidden shadow-[0_0_15px_rgba(249,171,0,0.4)] hover:shadow-[0_0_25px_rgba(249,171,0,0.7)] transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </span>
            </button>

            <button className="lg:hidden p-2 text-gray-600 hover:text-xion-blue transition-colors focus:outline-none">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- BACKGROUND BLUR OVERLAY --- */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* --- SLIDING FORM DRAWER --- */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* --- Drawer Header --- */}
        <div className="sticky top-0 bg-gradient-to-r from-xion-dark to-xion-blue px-8 py-6 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-black text-white">Get Started</h2>
            <p className="text-blue-200 text-sm mt-1">
              Fill the form, we'll reach out soon.
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* --- Drawer Body / Form --- */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-xion-blue focus:ring-2 focus:ring-xion-blue/20 outline-none transition-all duration-300 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Country *
            </label>
            <input
              type="text"
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              placeholder="South Africa"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-xion-blue focus:ring-2 focus:ring-xion-blue/20 outline-none transition-all duration-300 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Mobile Number *
            </label>
            <input
              type="tel"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              placeholder="+27 72 123 4567"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-xion-blue focus:ring-2 focus:ring-xion-blue/20 outline-none transition-all duration-300 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-xion-blue focus:ring-2 focus:ring-xion-blue/20 outline-none transition-all duration-300 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="My Supermarket"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-xion-blue focus:ring-2 focus:ring-xion-blue/20 outline-none transition-all duration-300 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Business Type
            </label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-xion-blue focus:ring-2 focus:ring-xion-blue/20 outline-none transition-all duration-300 text-sm"
            >
              <option value="">Select Business Type</option>
              <option value="Retail Store">Retail Store</option>
              <option value="Supermarket">Supermarket</option>
              <option value="Wholesale">Wholesale Business</option>
              <option value="Fashion & Garments">Fashion & Garments</option>
              <option value="Electronics">Electronics</option>
              <option value="General Store">General Store</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business..."
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-xion-blue focus:ring-2 focus:ring-xion-blue/20 outline-none transition-all duration-300 text-sm resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="relative w-full py-4 text-white font-bold text-base bg-gradient-to-r from-xion-blue to-blue-700 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(26,115,232,0.4)] hover:shadow-[0_0_30px_rgba(26,115,232,0.6)] transition-all duration-300 hover:scale-[1.02] group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Submit Request
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
            </span>
          </button>

          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Or Contact Directly
            </span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://wa.me/27722564646"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 py-3.5 rounded-xl bg-green-50 border-2 border-green-200 text-green-700 font-bold text-sm hover:bg-green-500 hover:text-white hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:Xionsoftwarersa@gmail.com"
              className="flex-1 flex items-center justify-center gap-3 py-3.5 rounded-xl bg-blue-50 border-2 border-blue-200 text-blue-700 font-bold text-sm hover:bg-xion-blue hover:text-white hover:border-xion-blue hover:shadow-[0_0_20px_rgba(26,115,232,0.4)] transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Email
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Navbar;
