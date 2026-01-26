import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, ChevronLeft, ChevronRight, HelpCircle, Layers, Sparkles } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { academyData } from '../../data/academyData';

export default function Flashcards() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState('All');

    const filteredCards = selectedTopic === 'All'
        ? academyData.flashcards
        : academyData.flashcards.filter(c => c.topic === selectedTopic);

    const currentCard = filteredCards[currentIndex];
    const topics = ['All', ...new Set(academyData.flashcards.map(c => c.topic))];

    const nextCard = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
        }, 150);
    };

    const prevCard = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
        }, 150);
    };

    return (
        <PageTransition>
            <section className="section-lg bg-transparent min-h-[90vh] flex flex-col justify-center">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-600/20 border border-primary-500/20 text-primary-400 text-xs font-bold mb-6 uppercase tracking-widest">
                                Active Recall
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Smart <span className="text-accent-500">Flashcards</span>
                            </h1>
                            <p className="text-lg text-slate-300">
                                Master key formulas and concepts through interactive spaced-repetition.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Topic Filter */}
                    <div className="flex justify-center flex-wrap gap-2 mb-12">
                        {topics.map(topic => (
                            <button
                                key={topic}
                                onClick={() => {
                                    setSelectedTopic(topic);
                                    setCurrentIndex(0);
                                    setIsFlipped(false);
                                }}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${selectedTopic === topic
                                        ? 'bg-accent-600 border-accent-500 text-white'
                                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                                    }`}
                            >
                                {topic}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-xl mx-auto relative perspective-1000">
                        {/* Progress */}
                        <div className="flex justify-between items-center mb-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                            <span>Card {currentIndex + 1} of {filteredCards.length}</span>
                            <span>{selectedTopic}</span>
                        </div>

                        {/* Flashcard Component */}
                        <div
                            className="relative h-80 w-full cursor-pointer group"
                            onClick={() => setIsFlipped(!isFlipped)}
                        >
                            <motion.div
                                className="w-full h-full relative preserve-3d transition-all duration-500"
                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                            >
                                {/* Front */}
                                <div className="absolute inset-0 backface-hidden">
                                    <div className="w-full h-full rounded-[2.5rem] bg-slate-900 border-2 border-white/10 p-12 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group-hover:border-accent-500/50 transition-colors">
                                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                            <HelpCircle className="w-20 h-20 text-white" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white relative z-10 leading-tight">
                                            {currentCard.front}
                                        </h2>
                                        <p className="mt-8 text-xs font-bold text-accent-500 uppercase tracking-[0.3em] animate-pulse">Click to Reveal</p>
                                    </div>
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180">
                                    <div className="w-full h-full rounded-[2.5rem] bg-accent-600 border-2 border-accent-400 p-12 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
                                        <div className="absolute -bottom-10 -left-10 opacity-20">
                                            <Sparkles className="w-40 h-40 text-white" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white relative z-10 leading-tight">
                                            {currentCard.back}
                                        </h2>
                                        <p className="mt-8 text-xs font-bold text-white/50 uppercase tracking-[0.3em]">Concept Mastered</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-between mt-12">
                            <Button
                                variant="outline"
                                icon={ChevronLeft}
                                onClick={(e) => { e.stopPropagation(); prevCard(); }}
                            >
                                Previous
                            </Button>

                            <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-accent-600 hover:text-white transition-all">
                                    <RefreshCcw className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white transition-all">
                                    <Layers className="w-4 h-4" />
                                </button>
                            </div>

                            <Button
                                variant="accent"
                                icon={ChevronRight}
                                iconPosition="right"
                                onClick={(e) => { e.stopPropagation(); nextCard(); }}
                            >
                                Next Card
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
