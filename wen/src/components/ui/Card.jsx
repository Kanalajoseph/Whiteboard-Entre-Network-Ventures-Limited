import { clsx } from 'clsx';

export default function Card({
    children,
    className,
    variant = 'default',
    hover = false,
    ...props
}) {
    const variants = {
        default: 'bg-white border border-slate-200 shadow-md',
        glass: 'glass shadow-lg',
        glassPrimary: 'glass-primary shadow-lg',
        glassAccent: 'glass-accent shadow-lg',
        primary: 'bg-primary-50 border border-primary-200 shadow-md',
        accent: 'bg-accent-50 border border-accent-200 shadow-md',
    };

    return (
        <div
            className={clsx(
                'rounded-xl p-6',
                variants[variant],
                hover && 'hover-lift hover:shadow-xl transition-all duration-300',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
