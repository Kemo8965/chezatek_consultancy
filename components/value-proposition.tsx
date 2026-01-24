import React from 'react';

export default function WhyChooseUs() {
  const stats = [
    { percentage: '95%', label: 'Average System Uptime' },
    { percentage: '80%', label: 'Reduction in IT Incidents' },
    { percentage: '90%', label: 'Client Retention Rate' },
    { percentage: '85%', label: 'Client Satisfaction Rate' },
  ];

  return (
    <section className="bg-gray-100 min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm text-gray-500 mb-4">Why Choose Us?</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
            The Modern IT Landscape Can Be Complex And Overwhelming, But We Make It Simple, Secure, And Scalable.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-900 text-white p-8 h-64 flex flex-col justify-end">
                <div className="text-5xl font-bold mb-4">{stat.percentage}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-gray-900 font-medium">Trusted By SMEs, Proven By Performance.</p>
      </div>
    </section>
  );
}