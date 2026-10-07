const CtaSection = () => {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-r from-xion-blue to-xion-dark"
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          YOUR BUSINESS DESERVES BETTER TOOLS.
        </h2>
        <p className="text-xl text-blue-100 mb-10">
          Start managing your business the smarter way with Xion.
        </p>
        <a
          href="#"
          className="inline-block bg-xion-orange text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition shadow-xl transform hover:scale-105"
        >
          Get Started with Xion
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
