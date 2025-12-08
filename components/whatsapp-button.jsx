export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 left-8 z-40">
      <a
        href="https://wa.me/+919906610175"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition duration-200 transform hover:scale-110 overflow-hidden"
        title="Chat with us on WhatsApp"
      >
        <img
          src="/images/whatsapp-logo.png"
          alt="WhatsApp"
          className="w-10 h-10 object-contain"
        />
      </a>
    </div>
  );
}

