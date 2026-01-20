import { Link } from 'react-router-dom';
import { Car, Fuel, Users, Settings } from 'lucide-react';
import Card from './Card';

export default function CarCard({ car }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-ZM', {
            style: 'currency',
            currency: 'ZMW',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <Link to={`/cars/${car.id}`}>
            <Card variant="glass" hover={true} className="h-full overflow-hidden">
                {/* Car Image */}
                <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    {car.mainImage ? (
                        <img
                            src={car.mainImage}
                            alt={`${car.make} ${car.model}`}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <Car className="w-24 h-24 text-primary-300" />
                        </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${car.availability === 'Available'
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                            }`}>
                            {car.availability}
                        </span>
                    </div>
                </div>

                {/* Car Details */}
                <div className="p-5">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {car.year} {car.make} {car.model}
                    </h3>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-3 mb-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                            <Settings className="w-4 h-4 text-primary-600" />
                            <span>{car.transmission}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Fuel className="w-4 h-4 text-primary-600" />
                            <span>{car.fuelType}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-primary-600" />
                            <span>{car.seats} Seats</span>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-slate-200 pt-4">
                        <div className="flex items-baseline justify-between">
                            <div>
                                <span className="text-2xl font-bold text-primary-600">
                                    {formatPrice(car.dailyRate)}
                                </span>
                                <span className="text-sm text-slate-600 ml-1">/day</span>
                            </div>
                            <div className="text-right text-sm text-slate-500">
                                <div>{formatPrice(car.weeklyRate)}/week</div>
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
