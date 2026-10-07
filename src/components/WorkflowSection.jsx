const steps = [
  {
    title: "Sell.",
    desc: "Process transactions faster with a modern, intuitive POS.",
  },
  {
    title: "Manage.",
    desc: "Keep products, inventory, customers and staff organized.",
  },
  {
    title: "Understand.",
    desc: "Get the insights you need to make better business decisions.",
  },
  {
    title: "Grow.",
    desc: "Build a stronger, more efficient and scalable business.",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-xion-dark text-center mb-16">
          FROM YOUR FIRST SALE TO YOUR NEXT BIG MOVE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-xion-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold text-xion-dark mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
