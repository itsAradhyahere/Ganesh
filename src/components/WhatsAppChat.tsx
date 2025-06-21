import { Mail } from 'lucide-react';

const WhatsAppChat = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/919619596561"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-6 h-6"
        />
      </a>

      <a
        href="mailto:info@shuhari.co.in"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Send Email"
      >
        <Mail size={20} />
      </a>
    </div>
  );
};

export default WhatsAppChat;
