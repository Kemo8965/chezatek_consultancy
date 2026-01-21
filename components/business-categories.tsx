"use client";
import React from 'react';
import { Shield, Server, Cloud, Lock, Zap, Database } from 'lucide-react';

export default function TechServicesShowcase() {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      delay: '0s'
    },
    {
      icon: Server,
      title: 'Infrastructure',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      delay: '1s'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      delay: '2s'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      delay: '3s'
    },
    {
      icon: Zap,
      title: 'Performance',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      delay: '4s'
    },
    {
      icon: Database,
      title: 'Data Management',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      delay: '5s'
    }
  ];

  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 mb-4">Our Core Services</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Complete IT Solutions<br />For Modern Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From security to scalability, we provide comprehensive IT services that keep your business running smoothly and securely.
          </p>
        </div>

        {/* Services Grid with Animations */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          </div>
          
          {/* Center Hub */}
          <div className="relative flex items-center justify-center min-h-[500px]">
            {/* Central Circle - "Your Business" */}
            <div className="absolute z-10">
              <div className="relative">
                {/* Spinning ring animation */}
                <div className="absolute inset-0 -m-4">
                  <div className="w-32 h-32 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
                </div>
                <div className="flex items-center justify-center w-24 h-24 bg-gray-900 rounded-full shadow-2xl">
                  <div className="text-white text-center">
                    <div className="text-xs font-semibold">Your</div>
                    <div className="text-sm font-bold">Business</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting Service Icons */}
            {services.map((service, index) => {
              const Icon = service.icon;
              const angle = (index * 60) - 90; // Distribute evenly in circle
              const radius = 200; // Distance from center
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    animation: `float 3s ease-in-out ${service.delay} infinite alternate`
                  }}
                >
                  <div className={`${service.bgColor} p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-200 hover:scale-110 transition-transform duration-300 cursor-pointer group`}>
                    <div className="relative">
                      <Icon className={`w-8 h-8 ${service.color} group-hover:scale-125 transition-transform`} />
                      {/* Connection line to center */}
                      <div 
                        className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-r from-gray-300 to-transparent opacity-30"
                        style={{
                          height: `${Math.sqrt(x*x + y*y)}px`,
                          transform: `rotate(${Math.atan2(-y, -x)}rad) translateX(-50%)`,
                          transformOrigin: 'left center'
                        }}
                      ></div>
                    </div>
                    <div className="mt-2 text-xs font-semibold text-gray-900 whitespace-nowrap">
                      {service.title}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Data Flow Animation - Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-60"
                  style={{
                    animation: `orbit 4s linear ${i * 0.5}s infinite`,
                    left: '50%',
                    top: '50%'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-900 font-medium mb-6">
            Powering businesses with reliable, secure, and scalable IT infrastructure
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Explore Our Services
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(var(--x), var(--y)) translateY(0px);
          }
          50% {
            transform: translate(var(--x), var(--y)) translateY(-10px);
          }
        }

        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(180px) rotate(-360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}