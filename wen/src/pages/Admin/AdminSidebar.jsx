import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Car, Home, DollarSign, MessageSquare, LogOut } from 'lucide-react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import { useNavigate } from 'react-router-dom';

export default function AdminSidebar() {
    const { logout } = useAdminAuth();
    const navigate = useNavigate();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
        { icon: Car, label: 'Cars', path: '/admin/cars' },
        { icon: Home, label: 'Properties', path: '/admin/properties' },
        { icon: DollarSign, label: 'Loan Applications', path: '/admin/loans' },
        { icon: MessageSquare, label: 'Enquiries', path: '/admin/enquiries' },
    ];

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-slate-900 text-white">
            <nav className="p-4 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                    ? 'bg-primary-600 text-white'
                                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`
                            }
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-slate-300 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
}
