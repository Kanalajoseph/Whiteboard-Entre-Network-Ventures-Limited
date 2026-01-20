import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

export default function AdminLayout() {
    return (
        <div className="min-h-screen bg-slate-50">
            <AdminHeader />
            <div className="flex">
                <AdminSidebar />
                <main className="flex-1 p-6 ml-64">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
