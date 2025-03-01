import React from "react";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Code Analysis",
      description:
        "Automatically detects syntax errors, security vulnerabilities, and inefficient code patterns. Our AI scans your codebase for best practices, ensuring clean and optimized code.",
      image: "./assets/code-review.svg",
    },
    {
      title: "Instant Fix Suggestions",
      description:
        "No more manually debugging errors! Get AI-powered one-click fixes with detailed explanations on why a change is recommended.",
      image: "./assets/fix.svg",
    },
    {
      title: "Seamless GitHub Integration",
      description:
        "Enhance your workflow by integrating directly with GitHub. Our AI will automatically analyze code in pull requests and provide valuable insights.",
      image: "./assets/git.svg",
    },
    {
      title: "Supports Multiple Languages",
      description:
        "AI-driven analysis for JavaScript, Python, C++, Java, and more. Get detailed reports specific to each programming language.",
      image: "./assets/multi.svg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all flex flex-col items-center text-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-28 h-28 mb-6 object-contain"
              />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
