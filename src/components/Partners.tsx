import React from 'react';

const Partners = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted By Industry Leaders</h2>
          <p className="text-gray-400">Powered by cutting-edge infrastructure from world-class partners</p>
        </div>
        
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {/* AWS Logo */}
          <div className="w-48 h-24 relative grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1702055894943-1f4012fae0c7?q=80&w=3928&auto=format&fit=crop"
              alt="AWS"
              className="object-contain w-full h-full opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          
          {/* AMD Logo */}
          <div className="w-48 h-24 relative grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1702055894847-a95a082a3ac8?q=80&w=3928&auto=format&fit=crop"
              alt="AMD"
              className="object-contain w-full h-full opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;