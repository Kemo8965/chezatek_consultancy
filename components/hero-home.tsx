import React from 'react';

export default function FinancialHero() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-6 lg:px-12">
          <div className="text-2xl font-semibold">ChezaTek Solutions Limited</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-200 hover:text-white transition">Benefits</a>
            <a href="#about" className="text-gray-200 hover:text-white transition">About</a>
            <a href="#testimonials" className="text-gray-200 hover:text-white transition">Testimonials</a>
            <a href="#faqs" className="text-gray-200 hover:text-white transition">FAQs</a>
          </div>

          <button className="border border-gray-400 hover:border-white px-6 py-2.5 rounded-md transition hover:bg-white/10">
            Get Your Free Consult
          </button>
        </nav>

        {/* Hero Content */}
        <div className="px-6 lg:px-12 pt-32 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Enterprise IT Solutions <br/>Without The Enterprise Cost.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              Helping SMEs and financial businesses <span className="text-2xl text-red-500"> identify</span>  IT security risks, 
              <span className="text-2xl text-yellow-600"> prevent</span>   downtime, and <span className="text-2xl text-green-700"> build</span>  scalable systems—without the cost of a full IT department
            </p>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-8 left-6 lg:left-12 right-6 lg:right-12 flex items-center justify-between">
            <div className="text-lg font-light">
              <span className="text-gray-400">01</span>
            </div>
            <div className="text-lg text-gray-300">
              A Group Of Experts Dedicated To Your Business Growth
            </div>
            <button className="hidden lg:block px-8 py-3 border border-gray-400 hover:border-white rounded-md transition hover:bg-white/10">
              View More
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden fixed top-6 right-6 z-20 p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}