import { clsx } from 'clsx';

export default function FormInput({
    label,
    error,
    className,
    required = false,
    ...props
}) {
    return (
        <div className={className}>
            {label && (
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    {label}
                    {required && <span className="text-accent-500 ml-1">*</span>}
                </label>
            )}

            <input
                className={clsx(
                    'w-full px-4 py-2.5 rounded-lg border transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-offset-1',
                    'placeholder:text-slate-400',
                    error
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-slate-300 focus:border-primary-500 focus:ring-primary-500 hover:border-slate-400'
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
