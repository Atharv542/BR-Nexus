import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content:
        'BR Nexus transformed our online presence completely. Their attention to detail and technical expertise is unmatched. Highly recommended!',
      rating: 5,
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Creative Studios',
      content:
        'Working with BR Nexus was a game-changer. They delivered our website ahead of schedule and the design exceeded all expectations.',
      rating: 5,
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, BrandFlow',
      content:
        'The team at BR Nexus is incredibly talented. They handled our social media management and video editing with professionalism and creativity.',
      rating: 5,
      avatar: 'ER',
    },
    {
      name: 'David Kumar',
      role: 'Owner, Retail Plus',
      content:
        'From logo design to website development, BR Nexus delivered excellence at every step. Our brand identity has never looked better!',
      rating: 5,
      avatar: 'DK',
    },
    {
      name: 'Lisa Thompson',
      role: 'Director, Wellness Hub',
      content:
        'BR Nexus understood our vision perfectly and brought it to life. Their commitment to quality and client satisfaction is outstanding.',
      rating: 5,
      avatar: 'LT',
    },
    {
      name: 'James Wilson',
      role: 'Founder, StartupLab',
      content:
        'If you want a team that truly cares about your success, choose BR Nexus. They went above and beyond to ensure we were thrilled with the results.',
      rating: 5,
      avatar: 'JW',
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={
              index < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-600'
            }
          />
        ))}
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-cyan-400" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mb-4">{renderStars(testimonial.rating)}</div>

                <p className="text-gray-300 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
