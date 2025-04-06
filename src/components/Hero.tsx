import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-purple-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')] bg-cover bg-center opacity-10 animate-scale-rotate"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Empower</span> your Online Business
          <br />with AI-augmented Search
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Enable AI-augmented search for your website with one click. Allow customers to find products and services on your site faster. Take back control of your customers and advertising traffic from ChatGPT.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 text-lg font-semibold"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-8 py-3 bg-transparent border-2 border-purple-500 text-white rounded-lg hover:bg-purple-500/20 transition-colors duration-300 text-lg font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white opacity-50" />
      </div>
    </section>
  );
};

export default Hero;