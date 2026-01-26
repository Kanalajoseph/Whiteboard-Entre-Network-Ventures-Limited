import { clsx } from 'clsx';

export default function Card({
    children,
    className,
    variant = 'default',
    hover = false,
    ...props
}) {
    const variants = {
        default: 'bg-slate-950/40 border border-white/5 shadow-2xl backdrop-blur-xl',
        glass: 'glass shadow-lg',
        glassDark: 'glass-dark shadow-lg border border-white/5',
        glassPrimary: 'glass-accent shadow-lg',
        glassAccent: 'glass-accent shadow-lg',
        primary: 'bg-accent-500/10 border border-accent-500/20 shadow-md',
        accent: 'bg-accent-500/10 border border-accent-500/20 shadow-md',
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
