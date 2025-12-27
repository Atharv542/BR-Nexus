import { Code, Palette, Video, Share2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description:
        'Custom-built, responsive websites that combine stunning design with powerful functionality. Built with modern technologies for optimal performance.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Palette,
      title: 'Logo & Visiting Card Design',
      description:
        'Professional branding solutions that make your business stand out. Memorable logos and elegant visiting cards that leave a lasting impression.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Video,
      title: 'Video Editing',
      description:
        'High-quality video editing services that bring your vision to life. From promotional content to social media videos, we deliver excellence.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description:
        'Comprehensive social media strategies that engage your audience and grow your brand. Content creation, scheduling, and analytics included.',
      gradient: 'from-pink-500 to-cyan-600',
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business and exceed your expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div
                    className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
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
};

export default Services;
