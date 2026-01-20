import { Link } from 'react-router-dom';
import { Home, Bed, Bath, Maximize } from 'lucide-react';
import Card from './Card';

export default function PropertyCard({ property }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-ZM', {
            style: 'currency',
            currency: 'ZMW',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <Link to={`/properties/${property.id}`}>
            <Card variant="glass" hover={true} className="h-full overflow-hidden">
                {/* Property Image */}
                <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    {property.mainImage ? (
                        <img
                            src={property.mainImage}
                            alt={property.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <Home className="w-24 h-24 text-primary-300" />
                        </div>
                    )}

                    {/* Transaction Type Badge */}
                    <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${property.transactionType === 'Sale'
                            ? 'bg-primary-600 text-white'
                            : 'bg-accent-600 text-white'
                            }`}>
                            For {property.transactionType}
                        </span>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${property.status === 'Available'
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                            }`}>
                            {property.status}
                        </span>
                    </div>
                </div>

                {/* Property Details */}
                <div className="p-5">
                    {/* Type & Location */}
                    <div className="text-sm text-slate-600 mb-2">
                        {property.propertyType} • {property.district}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                        {property.title}
                    </h3>

                    {/* Features */}
                    {property.bedrooms && (
                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                            {property.bedrooms && (
                                <div className="flex items-center gap-1">
                                    <Bed className="w-4 h-4 text-primary-600" />
                                    <span>{property.bedrooms} Beds</span>
                                </div>
                            )}
                            {property.bathrooms && (
                                <div className="flex items-center gap-1">
                                    <Bath className="w-4 h-4 text-primary-600" />
                                    <span>{property.bathrooms} Baths</span>
                                </div>
                            )}
                            {property.areaSqm && (
                                <div className="flex items-center gap-1">
                                    <Maximize className="w-4 h-4 text-primary-600" />
                                    <span>{property.areaSqm}m²</span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Description */}
                    {property.description && (
                        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                            {property.description}
                        </p>
                    )}

                    {/* Pricing */}
                    <div className="border-t border-slate-200 pt-4">
                        <div className="flex items-baseline justify-between">
                            <div>
                                <span className="text-2xl font-bold text-primary-600">
                                    {formatPrice(property.price)}
                                </span>
                                {property.transactionType === 'Rent' && (
                                    <span className="text-sm text-slate-600 ml-1">/month</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* View Details Button */}
                    <button className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium hover:opacity-90 transition-all">
                        View Details
                    </button>
                </div>
            </Card>
        </Link>
    );
}
