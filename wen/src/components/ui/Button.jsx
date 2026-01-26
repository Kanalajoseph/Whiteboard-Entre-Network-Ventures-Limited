import { clsx } from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500 shadow-lg hover:shadow-xl',
    accent: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500 shadow-lg hover:shadow-xl',
    mixed: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-accent-600 text-accent-500 hover:bg-accent-500/10 focus:ring-accent-500',
    outlineAccent: 'border-2 border-accent-600 text-accent-600 hover:bg-accent-500/10 focus:ring-accent-500',
    ghost: 'text-accent-500 hover:bg-accent-500/10 focus:ring-accent-500',
    white: 'bg-white text-accent-600 hover:bg-slate-50 focus:ring-accent-500 shadow-lg',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md gap-1.5',
    md: 'px-5 py-2.5 text-base rounded-lg gap-2',
    lg: 'px-7 py-3.5 text-lg rounded-xl gap-2.5',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
        </>
      )}
    </button>
  );
}
