import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = [
    'Website Development',
    'Logo Design',
    'Video Editing',
    'Social Media Management',
  ];

  

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              BR Nexus
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming ideas into exceptional digital experiences. Your trusted partner for innovative digital solutions.
            </p>
            
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:atharvragdwal05@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  atharvragdwal05@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <a
                  href="tel:+918447060375"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                   +91 8447060375
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Delhi,India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} BR Nexus. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
