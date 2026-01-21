import React from 'react';
import { Network, TrendingUp, Search, DollarSign } from 'lucide-react';

export default function ITFeaturesSection() {
  const features = [
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Build robust, scalable networks that grow with your business. From local setups to multi-site connectivity.',
      color: 'bg-blue-500',
      textColor: 'text-white'
    },
    {
      icon: TrendingUp,
      title: 'Business Continuity',
      description: 'Ensure uptime and rapid recovery with strategic backup solutions and disaster recovery planning.',
      color: 'bg-gray-100',
      textColor: 'text-gray-700'
    },
    {
      icon: Search,
      title: 'Security Assessment',
      description: 'Identify vulnerabilities before they become problems. Comprehensive audits and penetration testing.',
      color: 'bg-gray-100',
      textColor: 'text-gray-700'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Reduce IT expenses while improving performance. Smart resource allocation and vendor management.',
      color: 'bg-gray-100',
      textColor: 'text-gray-700'
    }
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Features */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Main Features
            </h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              We deliver comprehensive IT solutions tailored to your business needs. From infrastructure to security, our services ensure your technology works for you, not against you.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`${feature.color} ${feature.textColor} p-8 rounded-lg transition-transform hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="mb-4">
                      <Icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className={`text-sm leading-relaxed ${feature.textColor === 'text-white' ? 'text-white/90' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Success Story Card */}
          <div>
            <div className="bg-white border-4 border-blue-100 rounded-lg overflow-hidden shadow-lg sticky top-8">
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Read Our Success Story for Inspiration
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Discover how we helped a financial services firm reduce IT costs by 40% while improving system uptime to 99.9%. Through strategic infrastructure upgrades and proactive monitoring, they eliminated downtime and scaled seamlessly.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our comprehensive approach to IT management transformed their operations, allowing them to focus on growth while we handled the technology. From security audits to cloud migration, we delivered results that exceeded expectations.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}