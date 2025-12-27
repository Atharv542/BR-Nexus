import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '8447060375';
    const message = encodeURIComponent(
      'Hi BR Nexus! I am interested in your digital services. Can you help me?'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>

      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm">
          Chat with us on WhatsApp
          <div className="absolute top-full right-6 -mt-1">
            <div className="border-8 border-transparent border-t-slate-800"></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
