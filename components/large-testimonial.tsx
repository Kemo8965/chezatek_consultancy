import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Chanda Mwansa',
      role: 'Operations Manager',
      company: 'Local Retail Chain',
      challenge: 'Infrastructure',
      text: 'Our business was experiencing constant network outages that cost us sales every day. The team identified our infrastructure weaknesses within the first week and implemented a solution that has kept us running smoothly for over 18 months. Our uptime has never been better, and our staff can finally rely on the systems they need to serve customers.',
      rating: 4
    },
    {
      name: 'Josiah Banda',
      role: 'Managing Director',
      company: 'Financial Services Firm',
      challenge: 'System Integration',
      text: 'We had three different software systems that simply wouldn\'t talk to each other. Data entry was being done multiple times, and errors were common. They built us a custom integration solution that connected everything seamlessly. What used to take my team hours now happens automatically. The ROI was clear within the first quarter.',
      rating: 5
    },
    {
      name: 'Kabwe Phiri',
      role: 'Business Owner',
      company: 'Manufacturing Company',
      challenge: 'Custom Solutions',
      text: 'Off-the-shelf software never quite fit our unique production process. We needed something built specifically for how we operate. The custom solution they developed has transformed our inventory management and production scheduling. We can now track everything in real-time and make better decisions faster. It\'s like having a system designed just for us—because it was.',
      rating: 5
    }
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 mb-4">Client Success Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real businesses, real challenges, real results. See how we've helped Zambian companies overcome their IT obstacles.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-blue-500" />
              </div>

              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-500 italic">{testimonial.company}</p>
              </div>

              {/* Challenge Badge */}
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                  {testimonial.challenge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to transform your IT infrastructure?</p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Get Your Free Consultation
          </button>
        </div> */}
      </div>
    </section>
  );
}