import { useAdminAuth } from '../../contexts/AdminAuthContext';
import { User } from 'lucide-react';

export default function AdminHeader() {
    const { admin } = useAdminAuth();

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-slate-950 border-b border-white/5 z-50">
            <div className="h-full px-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-600 flex items-center justify-center shadow-lg shadow-accent-600/20">
                        <span className="text-white font-bold text-lg">W</span>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg text-white">WEN Admin Portal</h1>
                        <p className="text-xs text-slate-400">Manage your business</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <p className="text-sm font-medium text-white">{admin?.username}</p>
                        <p className="text-xs text-slate-400">{admin?.role}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent-600/10 flex items-center justify-center border border-accent-600/20">
                        <User className="w-5 h-5 text-accent-500" />
                    </div>
                </div>
            </div>
        </header>
    );
}
