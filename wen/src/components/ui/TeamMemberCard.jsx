import Card from './Card';

export default function TeamMemberCard({
    name,
    title,
    bio,
    image,
    department
}) {
    return (
        <Card variant="glass" hover={true} className="text-center group">
            <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-accent-400 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        {image ? (
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                                <span className="text-3xl font-bold text-primary-600">
                                    {name.charAt(0)}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
                {name}
            </h3>

            <p className="text-sm font-medium text-primary-600 mb-1">
                {title}
            </p>

            {department && (
                <p className="text-xs text-accent-600 font-medium mb-3">
                    {department}
                </p>
            )}

            {bio && (
                <p className="text-sm text-slate-600 leading-relaxed">
                    {bio}
                </p>
            )}
        </Card>
    );
}
