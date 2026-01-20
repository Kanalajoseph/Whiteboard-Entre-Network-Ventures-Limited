import { Car, Home, DollarSign, MessageSquare, TrendingUp, Users } from 'lucide-react';
import Card from '../../components/ui/Card';

export default function AdminDashboard() {
    // Mock statistics
    const stats = [
        { icon: Car, label: 'Total Cars', value: '6', change: '+2 this month', color: 'bg-blue-500' },
        { icon: Home, label: 'Total Properties', value: '6', change: '+1 this month', color: 'bg-green-500' },
        { icon: DollarSign, label: 'Loan Applications', value: '12', change: '+5 pending', color: 'bg-yellow-500' },
        { icon: MessageSquare, label: 'Enquiries', value: '24', change: '+8 new', color: 'bg-purple-500' },
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
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
                <p className="text-slate-600">Welcome back! Here's what's happening with your business today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={index} variant="glass" hover={true}>
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                                    <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                                    <p className="text-xs text-slate-500">{stat.change}</p>
                                </div>
                                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card variant="glass">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-start gap-3 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                                <div className={`w-2 h-2 rounded-full mt-2 ${activity.status === 'pending' ? 'bg-yellow-500' :
                                        activity.status === 'new' ? 'bg-blue-500' :
                                            activity.status === 'approved' ? 'bg-green-500' :
                                                'bg-slate-400'
                                    }`} />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-900">{activity.title}</p>
                                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full ${activity.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                        activity.status === 'new' ? 'bg-blue-100 text-blue-700' :
                                            activity.status === 'approved' ? 'bg-green-100 text-green-700' :
                                                'bg-slate-100 text-slate-700'
                                    }`}>
                                    {activity.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Quick Stats */}
                <Card variant="glass">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Stats</h2>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-slate-600">Available Cars</span>
                                <span className="text-sm font-semibold text-slate-900">6/6</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-slate-600">Available Properties</span>
                                <span className="text-sm font-semibold text-slate-900">6/6</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-slate-600">Pending Loan Reviews</span>
                                <span className="text-sm font-semibold text-slate-900">5/12</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-slate-600">Unread Enquiries</span>
                                <span className="text-sm font-semibold text-slate-900">8/24</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Quick Actions */}
            <Card variant="glass">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <button className="p-4 rounded-lg border-2 border-dashed border-slate-300 hover:border-primary-600 hover:bg-primary-50 transition-all text-center">
                        <Car className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                        <p className="text-sm font-medium text-slate-900">Add New Car</p>
                    </button>
                    <button className="p-4 rounded-lg border-2 border-dashed border-slate-300 hover:border-primary-600 hover:bg-primary-50 transition-all text-center">
                        <Home className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                        <p className="text-sm font-medium text-slate-900">Add New Property</p>
                    </button>
                    <button className="p-4 rounded-lg border-2 border-dashed border-slate-300 hover:border-primary-600 hover:bg-primary-50 transition-all text-center">
                        <MessageSquare className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                        <p className="text-sm font-medium text-slate-900">View Enquiries</p>
                    </button>
                    <button className="p-4 rounded-lg border-2 border-dashed border-slate-300 hover:border-primary-600 hover:bg-primary-50 transition-all text-center">
                        <DollarSign className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                        <p className="text-sm font-medium text-slate-900">Review Loans</p>
                    </button>
                </div>
            </Card>
        </div>
    );
}
