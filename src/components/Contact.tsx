import React, { useState } from 'react';
import { Mail, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:petras@fastctl.ai?subject=Waitlist Signup&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AWebsite: ${formData.website}`;
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Be the first to know when we launch and get exclusive early access to our AI-augmented search solution
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-xl mx-auto">
            <button
              onClick={() => document.getElementById('waitlist-form')?.classList.remove('hidden')}
              className="w-full sm:w-1/2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 text-lg font-semibold flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Join Waitlist
            </button>
            
            <a
              href="https://cal.com/fastctl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg font-semibold flex items-center justify-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Book a Call
            </a>
          </div>
        </div>
        
        <div id="waitlist-form" className="max-w-xl mx-auto hidden">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Your Website URL"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 text-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;