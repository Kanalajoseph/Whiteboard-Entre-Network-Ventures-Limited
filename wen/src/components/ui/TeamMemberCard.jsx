import Card from './Card';

export default function TeamMemberCard({
    name,
    title,
    bio,
    image,
    department
}) {
    return (
        <Card variant="glassDark" hover={true} className="text-center group border border-white/5">
            <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-accent-600 p-1 shadow-lg shadow-accent-600/20">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border border-white/10">
                        {image ? (
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-slate-800">
                                <span className="text-3xl font-bold text-accent-400">
                                    {name.charAt(0)}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
                {name}
            </h3>

            <p className="text-sm font-medium text-accent-400 mb-1">
                {title}
            </p>

            {department && (
                <p className="text-xs text-accent-600 font-medium mb-3">
                    {department}
                </p>
            )}

            {bio && (
                <p className="text-sm text-slate-300 leading-relaxed">
                    {bio}
                </p>
            )}
        </Card>
    );
}
