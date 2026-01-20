import { createContext, useContext, useState, useEffect } from 'react';

const AdminAuthContext = createContext();

export const useAdminAuth = () => {
    const context = useContext(AdminAuthContext);
    if (!context) {
        throw new Error('useAdminAuth must be used within AdminAuthProvider');
    }
    return context;
};

export const AdminAuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if admin is logged in (check localStorage)
        const storedAdmin = localStorage.getItem('wenAdmin');
        if (storedAdmin) {
            setAdmin(JSON.parse(storedAdmin));
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        // Simple authentication (in production, this would be an API call)
        if (username === 'admin' && password === 'admin123') {
            const adminUser = {
                username: 'admin',
                email: 'admin@wenltd.com',
                role: 'Super Admin',
            };
            localStorage.setItem('wenAdmin', JSON.stringify(adminUser));
            setAdmin(adminUser);
            return { success: true };
        }
        return { success: false, error: 'Invalid credentials' };
    };

    const logout = () => {
        localStorage.removeItem('wenAdmin');
        setAdmin(null);
    };

    const value = {
        admin,
        login,
        logout,
        loading,
        isAuthenticated: !!admin,
    };

    return (
        <AdminAuthContext.Provider value={value}>
            {children}
        </AdminAuthContext.Provider>
    );
};
