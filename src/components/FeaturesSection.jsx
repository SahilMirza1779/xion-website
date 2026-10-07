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
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-xion-dark mb-4">
            EVERYTHING YOUR BUSINESS NEEDS. ONE PLATFORM.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 hover:border-xion-blue/30 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-xion-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
