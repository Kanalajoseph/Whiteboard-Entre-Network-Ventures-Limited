import { useState } from 'react';
import { FileText, Download, PlayCircle, ExternalLink, Calendar, Search, Filter } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const subjects = [
    { id: 'math-aa', name: 'Math Analysis and Approaches' },
    { id: 'physics', name: 'Physics' },
    { id: 'business-man', name: 'Business and Management' }
];

const sessions = ['May', 'November'];
const years = ['2023', '2022', '2021', '2020'];

const mockPapers = [
    {
        id: 'P-AA-23-M1',
        subject: 'Math AA HL',
        year: '2023',
        session: 'May',
        paper: 'Paper 1 (Non-Calculator)',
        duration: '2h',
        marks: 110,
    },
    {
        id: 'P-AA-23-M2',
        subject: 'Math AA HL',
        year: '2023',
        session: 'May',
        paper: 'Paper 2 (Calculator)',
        duration: '2h',
        marks: 110,
    }
];

export default function PastPapers() {
    const [selectedYear, setSelectedYear] = useState('2023');
    const [selectedSession, setSelectedSession] = useState('May');

    return (
        <PageTransition>
            <section className="section-lg bg-transparent">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-3xl mb-16">
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Past Paper <span className="text-accent-500">Archive</span>
                            </h1>
                            <p className="text-xl text-slate-300">
                                Master your timing and technique with our extensive collection of past papers and expert worked solutions.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-white/5 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-xl">
                        <div className="flex-1 min-w-[200px]">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Select Year</label>
                            <div className="flex gap-2">
                                {years.map(y => (
                                    <button
                                        key={y}
                                        onClick={() => setSelectedYear(y)}
                                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${selectedYear === y ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/20' : 'text-slate-400 hover:bg-white/5'
                                            }`}
                                    >
                                        {y}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="min-w-[150px]">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Session</label>
                            <div className="flex gap-2">
                                {sessions.map(s => (
                                    <button
                                        key={s}
                                        onClick={() => setSelectedSession(s)}
                                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${selectedSession === s ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/20' : 'text-slate-400 hover:bg-white/5'
                                            }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-auto mt-4 md:mt-0">
                            <Button variant="outline" className="w-full" icon={Filter}>More Filters</Button>
                        </div>
                    </div>

                    {/* Papers Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockPapers.map((paper, index) => (
                            <ScrollReveal key={paper.id} delay={index * 0.1}>
                                <Card variant="glassDark" hover={true} className="flex flex-col group">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-accent-600/20 flex items-center justify-center border border-accent-500/20">
                                            <FileText className="w-6 h-6 text-accent-400" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{paper.id}</div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">{paper.paper}</h3>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400 flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Exam Date</span>
                                            <span className="text-white font-medium">{paper.session} {paper.year}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400 flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> Duration</span>
                                            <span className="text-white font-medium">{paper.duration}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400 flex items-center gap-2"><Trophy className="w-3.5 h-3.5" /> Total Marks</span>
                                            <span className="text-white font-medium">{paper.marks} Marks</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-3">
                                        <Button variant="accent" className="w-full" icon={PlayCircle}>View Worked Solutions</Button>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" className="flex-1" icon={Download}>Question Paper</Button>
                                            <Button variant="outline" size="sm" className="flex-1" icon={Download}>Mark Scheme</Button>
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

function Clock(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
