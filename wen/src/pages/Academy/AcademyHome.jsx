import { GraduationCap, BookOpen, FileCheck, Brain, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';
import PageTransition from '../../components/PageTransition';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const modules = [
    {
        icon: BookOpen,
        title: 'Question Bank',
        description: 'Practice thousands of exam-style questions categorized by topic and difficulty.',
        link: '/academy/questions',
        color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    {
        icon: FileCheck,
        title: 'Mock Exams',
        description: 'Test your knowledge with full-length timed exams under real exam conditions.',
        link: '/academy/exams',
        color: 'bg-accent-500/10 text-accent-400 border-accent-500/20'
    },
    {
        icon: GraduationCap,
        title: 'Past Papers',
        description: 'Access worked solutions to past exam papers with step-by-step video tutorials.',
        link: '/academy/papers',
        color: 'bg-green-500/10 text-green-400 border-green-500/20'
    },
    {
        icon: Brain,
        title: 'Smart Flashcards',
        description: 'Master key concepts with interactive flashcards designed for long-term retention.',
        link: '/academy/flashcards',
        color: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    }
];

export default function AcademyHome() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="section-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
                <div className="container-custom relative z-10">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/5 mb-6 shadow-2xl">
                                <Sparkles className="w-4 h-4 text-accent-400" />
                                <span className="text-sm font-medium text-white">Introducing WEN Academy</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                                Master Your Exams with <span className="text-accent-500">Confidence</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                                The ultimate online learning platform for students. Access a comprehensive question bank,
                                worked solutions, and an AI-powered personal tutor.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button variant="accent" size="lg">Get Started for Free</Button>
                                <Button variant="outline" size="lg">Browse Courses</Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Modules Grid */}
            <section className="section bg-transparent pt-0">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {modules.map((module, index) => {
                            const Icon = module.icon;
                            return (
                                <ScrollReveal key={module.title} delay={index * 0.1} direction="up">
                                    <Link to={module.link}>
                                        <Card variant="glassDark" hover={true} className="h-full flex flex-col group">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-transform duration-300 group-hover:scale-110 ${module.color}`}>
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                                                {module.title}
                                            </h3>
                                            <p className="text-slate-300 mb-6 flex-1">
                                                {module.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-accent-400 font-semibold text-sm">
                                                Start Learning
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </Card>
                                    </Link>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* WEN AI Section */}
            <section className="section bg-transparent border-t border-white/5">
                <div className="container-custom">
                    <Card variant="default" className="p-8 md:p-12 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-accent-600/10"></div>
                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-600/20 border border-accent-500/20 text-accent-400 text-sm font-medium mb-6">
                                    Adaptive Learning
                                </div>
                                <h2 className="text-4xl font-display font-bold text-white mb-6">
                                    Meet Your AI Personal Tutor
                                </h2>
                                <p className="text-lg text-slate-300 mb-8">
                                    WEN AI provides instant feedback on your answers, explains complex concepts in simple terms,
                                    and creates personalized revision plans based on your performance.
                                </p>
                                <Button variant="accent" icon={ArrowRight} iconPosition="right"> Try WEN AI Now </Button>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl bg-slate-900 border border-white/10 p-6 shadow-2xl">
                                    {/* Mock AI Interface */}
                                    <div className="space-y-4">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-sm">
                                            <p className="text-accent-400 font-bold mb-1">Student</p>
                                            <p className="text-slate-200">How do I solve quadratic equations using the formula?</p>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-primary-600/20 border border-primary-500/20 text-sm">
                                            <p className="text-primary-400 font-bold mb-1">WEN AI</p>
                                            <p className="text-slate-200">The quadratic formula is x = (-b ± √(b² - 4ac)) / (2a). For ax² + bx + c = 0, identify a, b, and c...</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="flex-1 h-10 rounded-full bg-white/5 border border-white/10 px-4 flex items-center text-slate-500 text-xs text-nowrap">Type your question here...</div>
                                            <div className="w-10 h-10 rounded-full bg-accent-600 flex items-center justify-center text-white"><ArrowRight className="w-5 h-5" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </PageTransition>
    );
}
