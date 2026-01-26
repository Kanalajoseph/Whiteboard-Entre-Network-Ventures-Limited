import { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, CheckCircle2, ChevronRight, PlayCircle, HelpCircle, Trophy, Lightbulb } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { academyData } from '../../data/academyData';

export default function QuestionBank() {
    const [selectedSubject, setSelectedSubject] = useState('math-aa');
    const [selectedTopic, setSelectedTopic] = useState('aa-5');
    const [difficultyFilter, setDifficultyFilter] = useState('All');
    const [showSolution, setShowSolution] = useState(null);
    const [expandedSteps, setExpandedSteps] = useState({});

    const subject = academyData.subjects[selectedSubject];
    const topics = subject.topics;

    const filteredQuestions = useMemo(() => {
        return academyData.questions.filter(q =>
            q.subjectId === selectedSubject &&
            q.topicId === selectedTopic &&
            (difficultyFilter === 'All' || q.difficulty === difficultyFilter)
        );
    }, [selectedSubject, selectedTopic, difficultyFilter]);

    const toggleStep = (questionId, stepIndex) => {
        const key = `${questionId} -${stepIndex} `;
        setExpandedSteps(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <PageTransition>
            <div className="flex min-h-screen bg-slate-950">
                {/* Syllabus Sidebar */}
                <aside className="w-80 border-r border-white/5 bg-slate-900/50 p-6 hidden lg:block overflow-y-auto mt-16">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-6">
                            <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                                <Trophy className="w-4 h-4" />
                                {subject.name}
                            </Button>
                        </div>

                        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">Syllabus Topics</h2>
                        <div className="space-y-1">
                            {topics.map((topic) => (
                                <button
                                    key={topic.id}
                                    onClick={() => {
                                        setSelectedTopic(topic.id);
                                        setShowSolution(null);
                                    }}
                                    className={`w - full flex items - center justify - between px - 3 py - 2.5 rounded - lg text - sm transition - all ${selectedTopic === topic.id
                                        ? 'bg-accent-600 text-white shadow-lg'
                                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                        } `}
                                >
                                    <div className="flex items-center gap-3 text-nowrap">
                                        <BookOpen className="w-4 h-4" />
                                        {topic.title}
                                    </div>
                                    <ChevronRight className={`w - 3 h - 3 transition - transform ${selectedTopic === topic.id ? 'rotate-90' : ''} `} />
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 md:p-12 overflow-y-auto mt-16">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                            <div>
                                <h1 className="text-4xl font-display font-bold text-white mb-2">Question Bank</h1>
                                <p className="text-slate-400">{subject.name} • {topics.find(t => t.id === selectedTopic)?.title}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                {/* Revision Ladder Filter */}
                                <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
                                    {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
                                        <button
                                            key={diff}
                                            onClick={() => setDifficultyFilter(diff)}
                                            className={`px - 4 py - 1.5 rounded - md text - xs font - bold transition - all ${difficultyFilter === diff
                                                ? 'bg-accent-600 text-white shadow-lg'
                                                : 'text-slate-500 hover:text-white'
                                                } `}
                                        >
                                            {diff}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Question List */}
                    <div className="space-y-8 max-w-4xl mx-auto">
                        {filteredQuestions.length > 0 ? (
                            filteredQuestions.map((q, index) => (
                                <ScrollReveal key={q.id} delay={index * 0.1}>
                                    <Card variant="glassDark" className="border border-white/5 hover:border-accent-500/20 transition-all">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center gap-3">
                                                <span className={`px - 2.5 py - 1 rounded - full text - [10px] font - bold uppercase tracking - widest ${q.difficulty === 'Hard' ? 'bg-red-500/20 text-red-100 border border-red-500/30' :
                                                    q.difficulty === 'Medium' ? 'bg-accent-500/20 text-accent-100 border border-accent-500/30' :
                                                        'bg-green-500/20 text-green-100 border border-green-500/30'
                                                    } `}>
                                                    {q.difficulty}
                                                </span>
                                                <span className="text-xs text-slate-500 font-mono">{q.id} • {q.subtopic}</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs font-bold text-slate-500 uppercase">{q.marks} Marks</div>
                                                <div className="text-[10px] text-slate-600 font-medium">{q.year} {q.session} • {q.paper}</div>
                                            </div>
                                        </div>

                                        {/* Question Text */}
                                        <div className="bg-slate-900/40 rounded-2xl p-6 border border-white/5 mb-8 shadow-inner">
                                            <p className="text-lg text-slate-200 leading-relaxed font-medium">
                                                {q.questionText}
                                            </p>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-wrap items-center gap-4">
                                            <Button
                                                variant={showSolution === q.id ? 'accent' : 'outline'}
                                                size="sm"
                                                icon={showSolution === q.id ? CheckCircle2 : HelpCircle}
                                                onClick={() => setShowSolution(showSolution === q.id ? null : q.id)}
                                            >
                                                {showSolution === q.id ? 'Close Solution' : 'Reveal Step-by-Step'}
                                            </Button>
                                            {q.videoUrl && (
                                                <Button variant="ghost" size="sm" icon={PlayCircle} className="text-blue-400">
                                                    Video Tutorial
                                                </Button>
                                            )}
                                        </div>

                                        {/* Step-by-Step Solution Reveal */}
                                        {showSolution === q.id && (
                                            <div className="mt-8 pt-8 border-t border-white/5 animate-slideUp">
                                                <div className="flex items-center justify-between mb-6">
                                                    <h4 className="text-accent-400 font-bold flex items-center gap-2">
                                                        <CheckCircle2 className="w-5 h-5" />
                                                        Detailed Worked Solution
                                                    </h4>
                                                </div>

                                                <div className="space-y-6">
                                                    {q.steps.map((step, sIndex) => (
                                                        <div key={sIndex} className="relative pl-8 border-l-2 border-white/10 group">
                                                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-white/10 group-hover:border-accent-500 transition-colors" />

                                                            <div className="mb-2 flex items-start justify-between gap-4">
                                                                <h5 className="text-sm font-bold text-white flex items-center gap-2">
                                                                    Step {sIndex + 1}: {step.description}
                                                                </h5>
                                                                {step.hint && (
                                                                    <button
                                                                        onClick={() => toggleStep(q.id, sIndex)}
                                                                        className="text-[10px] flex items-center gap-1 text-blue-400 hover:text-blue-300 font-bold uppercase tracking-tighter"
                                                                    >
                                                                        <Lightbulb className="w-3 h-3" />
                                                                        {expandedSteps[`${q.id} -${sIndex} `] ? 'Hide Hint' : 'Show Hint'}
                                                                    </button>
                                                                )}
                                                            </div>

                                                            {expandedSteps[`${q.id} -${sIndex} `] && step.hint && (
                                                                <div className="mb-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200 animate-fadeIn italic">
                                                                    {step.hint}
                                                                </div>
                                                            )}

                                                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 font-mono text-sm text-slate-300 group-hover:border-white/10 transition-colors">
                                                                {step.working.split('\n').map((line, lIdx) => (
                                                                    <p key={lIdx}>{line}</p>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Mark Scheme Summary */}
                                                <div className="mt-10 p-6 rounded-2xl bg-accent-600/5 border border-accent-500/10 shadow-lg">
                                                    <h5 className="text-xs font-black text-accent-500 uppercase tracking-[0.2em] mb-4">Mark Scheme Breakdown</h5>
                                                    <div className="space-y-3">
                                                        {q.markScheme.map((m, mIdx) => (
                                                            <div key={mIdx} className="flex items-center justify-between text-xs">
                                                                <span className="text-slate-400">{m.point}</span>
                                                                <span className="font-bold text-accent-400">+{m.marks}M</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Card>
                                </ScrollReveal>
                            ))
                        ) : (
                            <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                                <HelpCircle className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                                <p className="text-slate-500">No questions found for this topic/difficulty.</p>
                                <Button variant="ghost" className="mt-4" onClick={() => setDifficultyFilter('All')}>Clear Filters</Button>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </PageTransition>
    );
}
