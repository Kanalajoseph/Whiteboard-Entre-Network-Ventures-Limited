import { clsx } from 'clsx';

export default function FormTextarea({
    label,
    error,
    className,
    required = false,
    rows = 4,
    ...props
}) {
    return (
        <div className={className}>
            {label && (
                <label className="block text-sm font-medium text-slate-300 mb-2">
                    {label}
                    {required && <span className="text-accent-400 ml-1">*</span>}
                </label>
            )}

            <textarea
                rows={rows}
                className={clsx(
                    'w-full px-4 py-2.5 rounded-lg border transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-slate-900',
                    'placeholder:text-slate-500 bg-slate-800 text-white resize-none',
                    error
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500'
                        : 'border-white/10 focus:border-accent-500 focus:ring-accent-500 hover:border-white/20'
                )}
                {...props}
            />

            {error && (
                <p className="mt-1.5 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}
