import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-p2p-black text-white relative">
       {/* Decorative Lines */}
      <div className="absolute left-0 top-1/2 w-24 h-[1px] bg-white/20"></div>
      <div className="absolute right-0 top-1/2 w-24 h-[1px] bg-white/20"></div>

      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">LET'S COLLABORATE</h2>
        <p className="text-gray-400 mb-12 text-lg">
          Ready to elevate your brand visual identity? Tell us about your project.
        </p>

        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-p2p-accent transition-colors">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-p2p-accent transition-colors" placeholder="Jane Doe" />
            </div>
            <div className="group">
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-p2p-accent transition-colors">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-p2p-accent transition-colors" placeholder="jane@brand.com" />
            </div>
          </div>
          
          <div className="group">
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-p2p-accent transition-colors">Inquiry Type</label>
            <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-p2p-accent transition-colors appearance-none">
              <option className="bg-black text-gray-300">Brand Campaign</option>
              <option className="bg-black text-gray-300">Social Media Content</option>
              <option className="bg-black text-gray-300">Event Coverage</option>
              <option className="bg-black text-gray-300">General Inquiry</option>
            </select>
          </div>

          <div className="group">
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-p2p-accent transition-colors">Message</label>
            <textarea className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-p2p-accent transition-colors resize-none h-32" placeholder="Tell us about your timeline and budget..."></textarea>
          </div>

          <button className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-p2p-accent hover:text-white transition-all duration-300 mt-8">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};
