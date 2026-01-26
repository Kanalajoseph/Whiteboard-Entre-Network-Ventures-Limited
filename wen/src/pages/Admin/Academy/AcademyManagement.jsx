import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, GraduationCap, Users, BookOpen, Clock, FileText, Settings, Sparkles } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { academyData } from '../../../data/academyData';

export default function AcademyManagement() {
    const [activeTab, setActiveTab] = useState('questions');

    const stats = [
        { label: 'Total Questions', value: academyData.questions.length, icon: BookOpen, color: 'text-blue-400' },
        { label: 'Active Students', value: '3,820', icon: Users, color: 'text-accent-400' },
        { label: 'Mock Exams', value: '48', icon: GraduationCap, color: 'text-green-400' },
        { label: 'Avg. Study Time', value: '45m', icon: Clock, color: 'text-purple-400' },
    ];

    return (
        <div className="space-y-8 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Academy Management</h1>
                    <p className="text-slate-400">Manage curriculum, questions, past papers, and AI tutor settings</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" icon={FileText}>Import Data</Button>
                    <Button variant="accent" icon={Plus}>Add New Question</Button>
                </div>
            </div>

            {/* Academy Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.label} variant="glassDark" className="border border-white/5">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">{stat.label}</p>
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Management Portal */}
            <Card variant="glassDark" className="border border-white/5 overflow-hidden p-0">
                <div className="flex border-b border-white/5 bg-slate-900/50">
                    {[
                        { id: 'questions', label: 'Question Bank', icon: BookOpen },
                        { id: 'papers', label: 'Past Papers', icon: FileText },
                        { id: 'concepts', label: 'Key Concepts', icon: GraduationCap },
                        { id: 'ai', label: 'WEN AI Settings', icon: Sparkles },
                        { id: 'settings', label: 'Curriculum', icon: Settings },
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-4 font-medium transition-all relative ${activeTab === tab.id ? 'text-accent-400' : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                            {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-600 shadow-lg shadow-accent-600/50" />}
                        </button>
                    ))}
                </div>

                <div className="p-6">
                    {activeTab === 'questions' && (
                        <>
                            <div className="flex items-center justify-between mb-6">
                                <div className="relative group max-w-md w-full">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input
                                        type="text"
                                        placeholder="Search by ID, Topic or Content..."
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 text-white"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-accent-500">
                                        <option>All Subjects</option>
                                        <option>Mathematics AA</option>
                                        <option>Physics</option>
                                    </select>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-white/5 text-slate-400 text-xs uppercase tracking-widest font-bold">
                                        <tr>
                                            <th className="px-6 py-4">ID</th>
                                            <th className="px-6 py-4">Title</th>
                                            <th className="px-6 py-4">Topic</th>
                                            <th className="px-6 py-4">Difficulty</th>
                                            <th className="px-6 py-4">Steps</th>
                                            <th className="px-6 py-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-slate-300">
                                        {academyData.questions.map(q => (
                                            <tr key={q.id} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-6 py-4 font-mono text-[10px] text-accent-500">{q.id}</td>
                                                <td className="px-6 py-4 font-medium max-w-xs truncate">{q.title}</td>
                                                <td className="px-6 py-4 text-sm text-slate-400">{q.subtopic}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${q.difficulty === 'Hard' ? 'bg-red-500/20 text-red-400' :
                                                            q.difficulty === 'Medium' ? 'bg-accent-500/20 text-accent-400' :
                                                                'bg-green-500/20 text-green-400'
                                                        }`}>
                                                        {q.difficulty}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-bold">{q.steps.length} Steps</td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-all">
                                                            <Edit2 className="w-4 h-4" />
                                                        </button>
                                                        <button className="p-2 hover:bg-red-500/20 rounded-lg text-slate-400 hover:text-red-400 transition-all">
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                    {activeTab !== 'questions' && (
                        <div className="text-center py-20 bg-white/5 rounded-2xl border border-dashed border-white/10">
                            <GraduationCap className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                            <h3 className="text-white font-bold mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h3>
                            <p className="text-slate-400 text-sm max-w-xs mx-auto">Interface for managing this content type is currently in development.</p>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}
