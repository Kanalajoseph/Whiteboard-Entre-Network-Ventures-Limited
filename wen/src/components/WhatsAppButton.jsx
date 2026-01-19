import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = '260973414769'; // Format: country code + number without +
    const message = encodeURIComponent('Hello! I would like to inquire about your services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Chat on WhatsApp"
        >
            <div className="relative">
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

                {/* Button */}
                <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <MessageCircle className="w-7 h-7 text-white" />
                </div>
            </div>

            {/* Tooltip */}
            <div className="absolute right-16 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-slate-900 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                    Chat with us
                </div>
            </div>
        </a>
    );
}
