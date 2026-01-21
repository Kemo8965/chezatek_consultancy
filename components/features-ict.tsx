import React from 'react';
import { Shield, Server, Cloud, Network, Code, Headphones } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: Shield,
      title: 'IT Security Risk Assessment & Management',
      description: 'Identify vulnerabilities, assess threats, and implement robust security protocols to protect your business from cyber risks.'
    },
    {
      icon: Server,
      title: 'Business Continuity & Disaster Recovery Planning',
      description: 'Ensure your operations continue seamlessly with comprehensive backup strategies and rapid recovery solutions.'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Scalability Solutions',
      description: 'Build flexible, scalable cloud environments that grow with your business needs and optimize resource utilization.'
    },
    {
      icon: Network,
      title: 'ICT & Peripheral Equipment Supply, Installation & Network Management',
      description: 'Complete hardware provisioning, professional installation, and ongoing network infrastructure management services.'
    },
    {
      icon: Code,
      title: 'Custom Software Development & System Integration',
      description: 'Tailored software solutions and seamless system integration to streamline your business processes and workflows.'
    },
    {
      icon: Headphones,
      title: 'Managed IT Support & Compliance Advisory',
      description: 'Proactive IT support with expert guidance on industry regulations and compliance requirements for your sector.'
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Best Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to secure, optimize, and scale your business infrastructure. 
            From risk management to ongoing support, we deliver excellence at every level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer overflow-hidden relative"
              >
                {/* Hover background overlay */}
                <div className="absolute inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                      <Icon className="w-10 h-10 text-blue-500 group-hover:text-blue-500 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 text-center min-h-[56px] transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-white text-center leading-relaxed transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}