import { useState, useEffect } from 'react';
import { Clock, AlertTriangle, CheckCircle, ChevronRight, Play, Square, RefreshCcw, Trophy } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function MockExams() {
    const [isExamActive, setIsExamActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(7200); // 2 hours
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [examSubmitted, setExamSubmitted] = useState(false);

    useEffect(() => {
        let timer;
        if (isExamActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleFinish();
        }
        return () => clearInterval(timer);
    }, [isExamActive, timeLeft]);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const handleStart = () => {
        setIsExamActive(true);
        setExamSubmitted(false);
    };

    const handleFinish = () => {
        setIsExamActive(false);
        setExamSubmitted(true);
    };

    const handleReset = () => {
        setIsExamActive(false);
        setTimeLeft(7200);
        setAnswers({});
        setExamSubmitted(false);
    };

    if (examSubmitted) {
        return (
            <PageTransition>
                <div className="section-lg container-custom text-center">
                    <ScrollReveal>
                        <div className="max-w-xl mx-auto">
                            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                                <Trophy className="w-10 h-10 text-green-400" />
                            </div>
                            <h1 className="text-4xl font-display font-bold text-white mb-4">Exam Completed!</h1>
                            <p className="text-slate-400 mb-12">Congratulations on completing the Mathematics AA HL Paper 1 Mock Exam.</p>

                            <div className="grid grid-cols-2 gap-4 mb-12 text-left">
                                <Card variant="glassDark" className="p-6">
                                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">Time Used</div>
                                    <div className="text-2xl font-bold text-white">{formatTime(7200 - timeLeft)}</div>
                                </Card>
                                <Card variant="glassDark" className="p-6">
                                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">Estimated Score</div>
                                    <div className="text-2xl font-bold text-accent-400">82%</div>
                                </Card>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="accent" icon={Play}>Review Answers</Button>
                                <Button variant="outline" icon={RefreshCcw} onClick={handleReset}>Try Another Paper</Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-950 flex flex-col pt-16">
                {!isExamActive ? (
                    /* Exam Lobby */
                    <div className="flex-1 flex items-center justify-center p-6">
                        <ScrollReveal>
                            <Card variant="glassDark" className="max-w-2xl w-full p-8 md:p-12 border border-white/5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-600/20 border border-accent-500/20 text-accent-400 text-xs font-bold mb-8 uppercase tracking-widest">
                                    Timed Simulation
                                </div>
                                <h1 className="text-4xl font-display font-bold text-white mb-4">Mathematics AA HL</h1>
                                <p className="text-slate-400 mb-8 text-lg">Paper 1 (Non-Calculator) • Mock Exam #3</p>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <Clock className="w-5 h-5 text-accent-400" />
                                        <div>
                                            <div className="text-sm font-bold text-white">2 Hours Duration</div>
                                            <div className="text-xs text-slate-500">The timer will start automatically</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <AlertTriangle className="w-5 h-5 text-orange-400" />
                                        <div>
                                            <div className="text-sm font-bold text-white">Standard Exam Rules</div>
                                            <div className="text-xs text-slate-500">No calculators permitted for this paper</div>
                                        </div>
                                    </div>
                                </div>

                                <Button variant="accent" size="lg" className="w-full" icon={Play} onClick={handleStart}>
                                    Start Exam Session
                                </Button>
                            </Card>
                        </ScrollReveal>
                    </div>
                ) : (
                    /* Active Exam Mode */
                    <div className="flex-1 flex flex-col animate-fadeIn">
                        {/* Exam Top Bar */}
                        <div className="bg-slate-900 border-b border-white/10 p-4 sticky top-16 z-20">
                            <div className="container-custom flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Question {currentQuestion + 1} of 12</span>
                                    <div className="h-2 w-32 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-accent-600 transition-all duration-500" style={{ width: `${((currentQuestion + 1) / 12) * 100}%` }}></div>
                                    </div>
                                </div>
                                <div className={`flex items-center gap-2 font-mono text-xl font-bold ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                                    <Clock className="w-5 h-5" />
                                    {formatTime(timeLeft)}
                                </div>
                                <Button variant="mixed" size="sm" icon={Square} onClick={handleFinish}>Submit Exam</Button>
                            </div>
                        </div>

                        {/* Exam Content */}
                        <div className="flex-1 container-custom py-12 px-6">
                            <div className="max-w-4xl mx-auto">
                                <ScrollReveal key={currentQuestion}>
                                    <div className="space-y-8">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-3xl font-bold text-white">Calculus: Integration</h2>
                                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">8 Marks</span>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 shadow-2xl">
                                            <p className="text-xl text-slate-200 leading-relaxed italic mb-8">
                                                Evaluate the integral ∫ (3x² - 4x + 1) dx from 1 to 3.
                                            </p>
                                            <textarea
                                                placeholder="Write your working out here..."
                                                className="w-full h-64 bg-slate-950/50 border border-white/10 rounded-2xl p-6 text-white text-lg focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none font-mono"
                                            ></textarea>
                                        </div>

                                        <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                            <Button
                                                variant="outline"
                                                disabled={currentQuestion === 0}
                                                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                                            >
                                                Previous Question
                                            </Button>
                                            <div className="flex gap-2">
                                                {[...Array(12)].map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setCurrentQuestion(i)}
                                                        className={`w-2 h-2 rounded-full transition-all ${i === currentQuestion ? 'bg-accent-500 w-6' : 'bg-white/20'}`}
                                                    ></button>
                                                ))}
                                            </div>
                                            <Button
                                                variant="accent"
                                                icon={ChevronRight}
                                                iconPosition="right"
                                                disabled={currentQuestion === 11}
                                                onClick={() => setCurrentQuestion(prev => Math.min(11, prev + 1))}
                                            >
                                                Next Question
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </PageTransition>
    );
}
