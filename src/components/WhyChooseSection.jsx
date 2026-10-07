const reasons = [
  {
    title: "Easy to Use",
    desc: "No complicated workflows. Get your team up and running quickly.",
  },
  {
    title: "Fast & Reliable",
    desc: "Built for smooth day-to-day business operations.",
  },
  {
    title: "Flexible & Scalable",
    desc: "Start small and scale as your business grows.",
  },
  {
    title: "Secure & Organized",
    desc: "Keep your business information structured and protected.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-xion-dark text-center mb-16">
          WHY BUSINESSES CHOOSE XION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm text-center border-t-4 border-xion-blue"
            >
              <h3 className="text-xl font-bold text-xion-dark mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
