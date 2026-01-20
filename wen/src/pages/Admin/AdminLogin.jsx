import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, AlertCircle } from 'lucide-react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import FormInput from '../../components/ui/FormInput';
import toast from 'react-hot-toast';

export default function AdminLogin() {
    const navigate = useNavigate();
    const { login } = useAdminAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        const result = await login(formData.username, formData.password);

        if (result.success) {
            toast.success('Login successful!');
            navigate('/admin/dashboard');
        } else {
            setError(result.error || 'Login failed');
            toast.error('Invalid credentials');
        }

        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900">
            <div className="w-full max-w-md px-4">
                <div className="text-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 flex items-center justify-center mx-auto mb-4 shadow-2xl">
                        <Lock className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
                    <p className="text-slate-300">Sign in to access the dashboard</p>
                </div>

                <Card variant="glass-dark" className="border-white/10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-red-200">{error}</p>
                            </div>
                        )}

                        <FormInput
                            name="username"
                            label="Username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                            className="bg-white/5 border-white/10 text-white placeholder:text-slate-400"
                        />

                        <div>
                            <label className="block text-sm font-medium text-slate-200 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full px-4 py-2.5 pl-10 rounded-lg border bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            variant="mixed"
                            size="lg"
                            className="w-full"
                            loading={isSubmitting}
                        >
                            {isSubmitting ? 'Signing in...' : 'Sign In'}
                        </Button>

                        <div className="text-center pt-4 border-t border-white/10">
                            <p className="text-sm text-slate-400">
                                Demo credentials: <span className="text-white font-mono">admin / admin123</span>
                            </p>
                        </div>
                    </form>
                </Card>

                <div className="mt-6 text-center">
                    <a href="/" className="text-sm text-slate-300 hover:text-white transition-colors">
                        ← Back to Main Site
                    </a>
                </div>
            </div>
        </div>
    );
}
