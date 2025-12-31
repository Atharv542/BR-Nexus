import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_j4ah4kb',
        'template_1i8b317',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'qOUTSphaEMIDp4QnT'
      );

      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Contact us today and let's create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Talk About Your Project
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you need a stunning website, professional branding, or comprehensive digital solutions,
                we're here to help bring your vision to life.
              </p>

              <div className="">
                <div className="flex items-center gap-2">
                  {/*<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email Us</p>
                    <a
                      href="mailto:contact@brnexus.com"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      contact@brnexus.com
                    </a>
                  </div>*/}
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call Us</p>
                    <a
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      +91 8447060375,+91 87555 61361
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/20">
              <h4 className="text-xl font-bold text-white mb-4">
                Why Choose BR Nexus?
              </h4>
              <ul className="space-y-3">
                {[
                  'Expert team with years of experience',
                  'Cutting-edge technology and design',
                  'Timely delivery and budget-friendly',
                  'Ongoing support and maintenance',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="+91 87654 43456"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
