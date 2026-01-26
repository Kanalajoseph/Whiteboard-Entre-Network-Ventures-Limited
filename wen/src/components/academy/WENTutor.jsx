import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, MessageSquare, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import Button from '../ui/Button';

export default function WENTutor() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            role: 'bot',
            content: "Hello! I'm WEN AI, your personal study assistant. How can I help you master your subjects today?"
        }
    ]);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen, isFullscreen]);

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');

        // Simulated AI Response
        setTimeout(() => {
            setMessages([
                ...newMessages,
                {
                    role: 'bot',
                    content: "That's a great question! Based on the topic we're discussing, here's a quick hint: focus on how the 'Chain Rule' interacts with trigonometric functions. Would you like me to walk through a similar example?"
                }
            ]);
        }, 1000);
    };

    return (
        <div className={`fixed z-[100] flex flex-col items-start pointer-events-none transition-all duration-300 ${isFullscreen ? 'inset-0 p-0' : 'bottom-24 md:bottom-28 left-4 md:left-8'
            }`}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom left' }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            height: isFullscreen ? '100vh' : (isMinimized ? '60px' : '500px'),
                            width: isFullscreen ? '100vw' : (window.innerWidth < 768 ? 'calc(100vw - 2rem)' : '380px'),
                            borderRadius: isFullscreen ? '0px' : '24px'
                        }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={`bg-slate-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl flex flex-col pointer-events-auto ${isFullscreen ? '' : 'mb-4 rounded-3xl'
                            }`}
                    >
                        {/* Header */}
                        <div className={`p-4 bg-gradient-to-r from-primary-600 to-accent-600 flex items-center justify-between ${isFullscreen ? 'py-6 px-8' : ''}`}>
                            <div className="flex items-center gap-2">
                                <div className="p-2 rounded-lg bg-white/20">
                                    <Sparkles className="w-4 h-4 text-white" />
                                </div>
                                <span className={`font-bold text-white ${isFullscreen ? 'text-lg' : 'text-sm'}`}>WEN AI Tutor</span>
                            </div>
                            <div className="flex items-center gap-1">
                                {!isMinimized && (
                                    <button
                                        onClick={() => setIsFullscreen(!isFullscreen)}
                                        className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/70"
                                        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                                    >
                                        {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                                    </button>
                                )}
                                {!isFullscreen && (
                                    <button
                                        onClick={() => setIsMinimized(!isMinimized)}
                                        className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/70"
                                    >
                                        {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                                    </button>
                                )}
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setIsFullscreen(false);
                                    }}
                                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/70"
                                >
                                    <X className={`${isFullscreen ? 'w-6 h-6' : 'w-4 h-4'}`} />
                                </button>
                            </div>
                        </div>

                        {!isMinimized && (
                            <>
                                {/* Chat Area */}
                                <div
                                    ref={scrollRef}
                                    className={`flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/20 ${isFullscreen ? 'px-8 md:px-20 py-10' : ''}`}
                                >
                                    {messages.map((m, i) => (
                                        <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''} ${isFullscreen ? 'max-w-[70%]' : ''}`}>
                                                <div className={`${isFullscreen ? 'w-10 h-10' : 'w-8 h-8'} rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-accent-600' : 'bg-primary-600'
                                                    }`}>
                                                    {m.role === 'user' ? <User className={isFullscreen ? 'w-5 h-5 text-white' : 'w-4 h-4 text-white'} /> : <Bot className={isFullscreen ? 'w-5 h-5 text-white' : 'w-4 h-4 text-white'} />}
                                                </div>
                                                <div className={`p-4 rounded-2xl ${isFullscreen ? 'text-base leading-relaxed' : 'text-sm'} ${m.role === 'user'
                                                    ? 'bg-accent-600/10 border border-accent-500/20 text-slate-200 rounded-tr-none'
                                                    : 'bg-white/5 border border-white/10 text-slate-300 rounded-tl-none'
                                                    }`}>
                                                    {m.content}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Input Area */}
                                <div className={`p-4 bg-slate-900 border-t border-white/5 ${isFullscreen ? 'p-8 md:px-20' : ''}`}>
                                    <div className="relative group max-w-4xl mx-auto w-full">
                                        <input
                                            type="text"
                                            placeholder="Ask a question..."
                                            className={`w-full bg-slate-950 border border-white/10 rounded-2xl pl-6 pr-14 text-white focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all font-sans ${isFullscreen ? 'py-5 text-lg' : 'py-3 text-sm'}`}
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                        />
                                        <button
                                            onClick={handleSend}
                                            className={`absolute right-3 top-1/2 -translate-y-1/2 bg-accent-600 text-white rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-transform ${isFullscreen ? 'p-3' : 'p-2'}`}
                                        >
                                            <Send className={isFullscreen ? 'w-6 h-6' : 'w-4 h-4'} />
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-slate-500 mt-2 text-center uppercase tracking-widest font-bold">Powered by WEN Intellect</p>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {!isFullscreen && (
                <button
                    onClick={() => {
                        setIsOpen(true);
                        setIsMinimized(false);
                    }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:scale-110 active:scale-95 transition-all group relative overflow-hidden pointer-events-auto"
                >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Sparkles className="w-6 h-6 md:w-7 md:h-7" />
                </button>
            )}
        </div>
    );
}
