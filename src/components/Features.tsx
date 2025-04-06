import React from 'react';
import { Search, Brain, Database, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-purple-500" />,
      title: "AI-augmented Search",
      description: "Advanced search capabilities that understand context and meaning, not just keywords."
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "Large Language Models",
      description: "Custom-trained LLMs that understand your industry's specific terminology and needs."
    },
    {
      icon: <Database className="h-8 w-8 text-purple-500" />,
      title: "RAG Technology",
      description: "Retrieval-Augmented Generation for accurate, context-aware responses."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: "Real-time Processing",
      description: "Lightning-fast processing and response times for seamless integration."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cutting-edge Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI solutions combine advanced technologies to deliver powerful, industry-specific results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;