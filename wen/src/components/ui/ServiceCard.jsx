import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Card from './Card';

export default function ServiceCard({
    icon: Icon,
    title,
    description,
    link,
    gradient = false
}) {
    return (
        <Link to={link} className="block">
            <Card
                variant="glassDark"
                hover={true}
                className="h-full group"
            >
                <div className={clsx(
                    'w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg',
                    gradient ? 'bg-accent-600' : 'bg-accent-500/10 border border-accent-500/20'
                )}>
                    <Icon className={clsx(
                        'w-7 h-7',
                        gradient ? 'text-white' : 'text-accent-400'
                    )} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                    {title}
                </h3>

                <p className="text-slate-300 mb-4 line-clamp-3">
                    {description}
                </p>

                <div className="flex items-center gap-2 text-accent-400 font-medium group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                </div>
            </Card>
        </Link>
    );
}

import { clsx } from 'clsx';
