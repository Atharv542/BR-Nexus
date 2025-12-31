import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Zap } from 'lucide-react';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const works = [
    {
      id: 1,
      title: 'Reps With Jazz',
      category: 'Website Development',
      description:
        'Built a fully responsive life coach portfolio website for Mr. Jazz Ferguson- professional basketball player, with essential features. Also added image gallery as per client demand',
      highlights: ['Responsive Design', 'Session Booking', 'Image Gallery'],
      buttonText: 'Visit Website',
      buttonLink: 'https://www.repswithjazz.co',
      icon: '🛍️',
    },
    {
      id: 2,
      title: 'InnerBloom Journey',
      category: 'Website Development',
      description:
        'Created a modern looking  website for U.S. life coach  with modern aesthetics and improved UX and using modern animations.',
      highlights: ['Modern Design', 'Modern Animations', 'User Experience'],
      buttonText: 'Visit Website',
      buttonLink: 'https://www.healgrowletgoandevolvewithsalma.com/',
      icon: '🏢',
    },
    {
      id: 3,
      title: 'Head2Heart',
      category: 'Website Development',
      description:
        'Developed a stunning e-commerce plus coaching booking website showcasing creative work with smooth animations and interactive elements. Integrated modern tech stack for high performance.',
      highlights: ['Animations', 'Portfolio Showcase', 'High Performance'],
      buttonText: 'Visit Website',
      buttonLink: 'https://www.head2heart.co.nz/',
      icon: '🎨',
    },
    {
      id: 4,
      title: 'Wisdom Inside Out',
      category: 'Instagram & YouTube',
      description:
        'Managed Instagram and YouTube channels with consistent content creation, brand storytelling, and community engagement for Australian based life coach.',
      highlights: ['Content Creation', 'Community Growth', 'Video Editing'],
      buttonText: 'Visit Channel',
      buttonLink: 'https://www.youtube.com/@TheWisdomInsideOut',
      icon: '📱',
    },
    {
      id: 5,
      title: 'Next Can Be You',
      category: 'Your Project',
      description:
        'Ready to elevate your digital presence? Let\'s collaborate and create something extraordinary together. Your vision deserves world-class execution and attention to detail.',
      highlights: ['Custom Solutions', '24/7 Support', 'Expert Team'],
      buttonText: 'Start Your Project',
      buttonLink: '#contact',
      icon: '✨',
      isCTA: true,
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? works.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === works.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleButtonClick = (link: string) => {
    if (link === '#contact') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (link.startsWith('http')) {
      window.open(link, '_blank');
    }
  };

  const currentWork = works[currentIndex];

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our recent projects and see the quality of work we deliver
          </p>
        </div>

        <div className="relative">
          <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl border ${
            currentWork.isCTA
              ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20'
              : 'border-slate-700/50'
          } overflow-hidden transition-all duration-300 p-8 sm:p-12`}>
            <div className="flex items-start gap-4 mb-6">
              
              <div className="flex-1">
                <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold mb-3 border border-cyan-500/30">
                  {currentWork.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  {currentWork.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {currentWork.description}
            </p>

            <div className="mb-8">
              <p className="text-gray-400 text-sm font-semibold mb-3 flex items-center gap-2">
                <Zap size={16} className="text-cyan-400" />
                Key Highlights
              </p>
              <div className="flex flex-wrap gap-3">
                {currentWork.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-700/50 text-gray-300 text-sm rounded-lg border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleButtonClick(currentWork.buttonLink)}
              className="group cursor-pointer px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 flex items-center gap-2"
            >
              {currentWork.buttonText}
              <ExternalLink
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="flex items-center justify-between mt-10">
            <button
              onClick={goToPrevious}
              className="group cursor-pointer w-12 h-12 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-500 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:bg-slate-700"
              aria-label="Previous work"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex gap-2">
              {works.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-cyan-500 w-8'
                      : 'bg-slate-600 hover:bg-slate-500 w-3'
                  }`}
                  aria-label={`Go to work ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="group cursor-pointer w-12 h-12 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-500 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:bg-slate-700"
              aria-label="Next work"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              {currentIndex + 1} / {works.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
