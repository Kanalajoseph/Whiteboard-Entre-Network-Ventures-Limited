import { useState } from 'react';
import { Play, Clock, BookOpen, Search, Filter, PlayCircle, Eye, Star } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { academyData } from '../../data/academyData';

export default function KeyConcepts() {
    const [selectedTopic, setSelectedTopic] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const topics = ['All', ...new Set(academyData.concepts.map(c => c.topic))];

    const filteredConcepts = academyData.concepts.filter(c =>
        (selectedTopic === 'All' || c.topic === selectedTopic) &&
        (c.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <PageTransition>
            <section className="section-lg bg-transparent">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-3xl mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 uppercase tracking-widest">
                                Video Library
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Master Key <span className="text-accent-500">Concepts</span>
                            </h1>
                            <p className="text-xl text-slate-300">
                                Short, focused video lessons designed to simplify complex topics and strengthen your fundamental understanding.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Search and Filters */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
                        <div className="relative flex-1 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-accent-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search concepts (e.g. Differentiation, Calculus)..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all shadow-xl"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                            {topics.map(topic => (
                                <button
                                    key={topic}
                                    onClick={() => setSelectedTopic(topic)}
                                    className={`px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all border ${selectedTopic === topic
                                            ? 'bg-accent-600 border-accent-500 text-white shadow-lg'
                                            : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                                        }`}
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Concepts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredConcepts.map((concept, index) => (
                            <ScrollReveal key={concept.id} delay={index * 0.1}>
                                <Card variant="glassDark" hover={true} className="flex flex-col group overflow-hidden p-0 border border-white/5">
                                    {/* Thumbnail Placeholder */}
                                    <div className="relative aspect-video bg-slate-900 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
                                        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-accent-600 group-hover:border-accent-400 transition-all shadow-2xl">
                                                <Play className="w-6 h-6 text-white fill-current" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 right-4 px-2 py-1 bg-slate-950/80 backdrop-blur-md rounded text-[10px] font-bold text-white border border-white/10">
                                            12:45
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-2 py-1 bg-accent-600/90 backdrop-blur-md rounded text-[10px] font-black text-white uppercase tracking-widest border border-accent-400 shadow-lg">
                                                {concept.topic}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                                            {concept.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-6 flex-1">
                                            {concept.summary}
                                        </p>

                                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                            <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                                                <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> 1.2k</span>
                                                <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-accent-500" /> 4.9</span>
                                            </div>
                                            <Button variant="ghost" size="sm" className="text-accent-400 group-hover:translate-x-1 transition-transform">
                                                Watch Now
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
