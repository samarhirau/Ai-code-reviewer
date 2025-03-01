import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Basic code review",
        "Limited AI suggestions",
        "Community support",
      ],
      cta: "Get Started",
      ctaColor: "bg-gray-700 hover:bg-gray-600",
    },
    {
      name: "Pro",
      price: "$29/month",
      features: [
        "AI-enhanced analysis",
        "Unlimited suggestions",
        "GitHub PR automation",
        "Priority support",
      ],
      cta: "Upgrade to Pro",
      ctaColor: "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="p-8 bg-blue-50  rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-black mb-2">
                    ✔️ {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full px-6 py-3 text-white rounded-lg font-semibold ${plan.ctaColor}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;