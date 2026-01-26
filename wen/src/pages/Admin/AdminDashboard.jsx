import { Car, Home, DollarSign, MessageSquare, TrendingUp, Users } from 'lucide-react';
import Card from '../../components/ui/Card';

export default function AdminDashboard() {
    // Mock statistics
    const stats = [
        { icon: Car, label: 'Total Cars', value: '6', change: '+2 this month', color: 'bg-accent-600' },
        { icon: Home, label: 'Total Properties', value: '6', change: '+1 this month', color: 'bg-accent-700' },
        { icon: DollarSign, label: 'Loan Applications', value: '12', change: '+5 pending', color: 'bg-orange-600' },
        { icon: MessageSquare, label: 'Enquiries', value: '24', change: '+8 new', color: 'bg-amber-600' },
    ];

    const recentActivity = [
        { type: 'loan', title: 'New Loan Application', time: '2 hours ago', status: 'pending' },
        { type: 'car', title: 'Car Enquiry - Toyota Corolla', time: '4 hours ago', status: 'new' },
        { type: 'property', title: 'Property Enquiry - Kabulonga House', time: '6 hours ago', status: 'new' },
        { type: 'loan', title: 'Loan Application Approved', time: '1 day ago', status: 'approved' },
        { type: 'car', title: 'Car Listed - Mercedes E-Class', time: '2 days ago', status: 'completed' },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                <p className="text-slate-400">Welcome back! Here's what's happening with your business today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={index} variant="glassDark" hover={true} className="border border-white/5">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">{stat.label}</p>
                                    <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                                    <p className="text-xs text-accent-500">{stat.change}</p>
                                </div>
                                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center shadow-lg shadow-accent-600/10`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card variant="glassDark" className="border border-white/5">
                    <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-start gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                <div className={`w-2 h-2 rounded-full mt-2 ${activity.status === 'pending' ? 'bg-orange-500' :
                                    activity.status === 'new' ? 'bg-accent-500' :
                                        activity.status === 'approved' ? 'bg-green-500' :
                                            'bg-slate-600'
                                    }`} />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-white">{activity.title}</p>
                                    <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full ${activity.status === 'pending' ? 'bg-orange-500/20 text-orange-400' :
                                    activity.status === 'new' ? 'bg-accent-500/20 text-accent-400' :
                                        activity.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                                            'bg-slate-800 text-slate-400'
                                    }`}>
                                    {activity.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Quick Stats */}
                <Card variant="glassDark" className="border border-white/5">
                    <h2 className="text-xl font-bold text-white mb-4">Quick Stats</h2>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-slate-400">Available Cars</span>
                                <span className="text-sm font-semibold text-white">6/6</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                                <div className="bg-accent-600 h-2 rounded-full shadow-lg shadow-accent-600/20" style={{ width: '100%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-slate-400">Available Properties</span>
                                <span className="text-sm font-semibold text-white">6/6</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                                <div className="bg-accent-600 h-2 rounded-full shadow-lg shadow-accent-600/20" style={{ width: '100%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-slate-400">Pending Loan Reviews</span>
                                <span className="text-sm font-semibold text-white">5/12</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-slate-400">Unread Enquiries</span>
                                <span className="text-sm font-semibold text-white">8/24</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Quick Actions */}
            <Card variant="glassDark" className="border border-white/5">
                <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <button className="p-4 rounded-lg border-2 border-dashed border-white/10 hover:border-accent-600 hover:bg-accent-600/5 transition-all text-center">
                        <Car className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                        <p className="text-sm font-medium text-white">Add New Car</p>
                    </button>
                    <button className="p-4 rounded-lg border-2 border-dashed border-white/10 hover:border-accent-600 hover:bg-accent-600/5 transition-all text-center">
                        <Home className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                        <p className="text-sm font-medium text-white">Add New Property</p>
                    </button>
                    <button className="p-4 rounded-lg border-2 border-dashed border-white/10 hover:border-accent-600 hover:bg-accent-600/5 transition-all text-center">
                        <MessageSquare className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                        <p className="text-sm font-medium text-white">View Enquiries</p>
                    </button>
                    <button className="p-4 rounded-lg border-2 border-dashed border-white/10 hover:border-accent-600 hover:bg-accent-600/5 transition-all text-center">
                        <DollarSign className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                        <p className="text-sm font-medium text-white">Review Loans</p>
                    </button>
                </div>
            </Card>
        </div>
    );
}
