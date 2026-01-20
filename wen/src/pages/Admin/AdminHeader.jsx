import { useAdminAuth } from '../../contexts/AdminAuthContext';
import { User } from 'lucide-react';

export default function AdminHeader() {
    const { admin } = useAdminAuth();

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50">
            <div className="h-full px-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-mixed flex items-center justify-center">
                        <span className="text-white font-bold text-lg">W</span>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg text-slate-900">WEN Admin Portal</h1>
                        <p className="text-xs text-slate-500">Manage your business</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <p className="text-sm font-medium text-slate-900">{admin?.username}</p>
                        <p className="text-xs text-slate-500">{admin?.role}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary-600" />
                    </div>
                </div>
            </div>
        </header>
    );
}
