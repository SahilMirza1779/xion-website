const Footer = () => {
  return (
    <footer className="bg-xion-dark text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-3 mb-6">
          <img
            src="/xion-logo.png"
            alt="XION POS Logo"
            className="h-8 w-auto brightness-0 invert"
          />
          <span className="text-2xl font-bold">XION</span>
        </div>
        <p className="text-blue-200 mb-4">
          Sell Smarter. Manage Better. Grow Faster.
        </p>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Xion. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
