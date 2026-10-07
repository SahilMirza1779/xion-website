const Footer = () => {
  return (
    <footer className="relative bg-xion-dark text-white pt-20 pb-10 overflow-hidden">
      {/* --- Background Glowing Orbs (Futuristic Effect) --- */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-xion-blue rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-xion-orange rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Main Footer Content (3 Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              {/* Public folder se logo direct use kiya hai */}
              <img
                src="/xion-logo.png"
                alt="XION POS Logo"
                className="h-14 w-auto drop-shadow-[0_0_15px_rgba(26,115,232,0.5)]"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none">
                  XION
                </span>
                <span className="text-[10px] font-bold text-xion-orange tracking-[0.2em] uppercase leading-none mt-1">
                  POS System
                </span>
              </div>
            </div>
            <p className="text-blue-200 mb-4 font-medium">
              Sell Smarter. Manage Better. Grow Faster.
            </p>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Powerful POS & Business Management Software built for modern
              businesses worldwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-xion-orange transition-colors duration-300 font-medium"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#business"
                  className="text-gray-400 hover:text-xion-orange transition-colors duration-300 font-medium"
                >
                  Business Types
                </a>
              </li>
              <li>
                <a
                  href="#why"
                  className="text-gray-400 hover:text-xion-orange transition-colors duration-300 font-medium"
                >
                  Why Xion
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {/* Email Link */}
              <li>
                <a
                  href="mailto:Xionsoftwarersa@gmail.com"
                  className="group flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-xion-blue transition-colors duration-300">
                    {/* Email Icon */}
                    <svg
                      className="w-4 h-4"
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
                  </div>
                  <span className="font-medium text-sm">
                    Xionsoftwarersa@gmail.com
                  </span>
                </a>
              </li>

              {/* WhatsApp Number 1 */}
              <li>
                <a
                  href="https://wa.me/27722564646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    {/* WhatsApp Icon */}
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="font-medium text-sm">+27 72 256 4646</span>
                </a>
              </li>

              {/* WhatsApp Number 2 */}
              <li>
                <a
                  href="https://wa.me/27722338336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    {/* WhatsApp Icon */}
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="font-medium text-sm">+27 72 233 8336</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Copyright Bar --- */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Xion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
