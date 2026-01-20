import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { carsData, filterCars } from '../../data/mockData';
import CarCard from '../../components/ui/CarCard';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';

export default function Cars() {
    const [filters, setFilters] = useState({
        transmission: '',
        fuelType: '',
        minPrice: '',
        maxPrice: '',
        seats: '',
        search: '',
    });
    const [showFilters, setShowFilters] = useState(false);

    const filteredCars = filterCars(filters).filter(car => {
        if (!filters.search) return true;
        const searchLower = filters.search.toLowerCase();
        return (
            car.make.toLowerCase().includes(searchLower) ||
            car.model.toLowerCase().includes(searchLower) ||
            car.color.toLowerCase().includes(searchLower)
        );
    });

    const handleFilterChange = (name, value) => {
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const clearFilters = () => {
        setFilters({
            transmission: '',
            fuelType: '',
            minPrice: '',
            maxPrice: '',
            seats: '',
            search: '',
        });
    };

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="section-lg bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                                Car <span className="text-accent-100">Hire</span>
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed mb-8">
                                Find the perfect vehicle for your journey. From economy to luxury, we have options for every need.
                            </p>

                            {/* Search Bar */}
                            <div className="max-w-2xl mx-auto">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search by make, model, or color..."
                                        value={filters.search}
                                        onChange={(e) => handleFilterChange('search', e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Cars Listing */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                Available Vehicles
                            </h2>
                            <p className="text-slate-600 mt-1">
                                {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'} available
                            </p>
                        </div>

                        {/* Filter Toggle Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors"
                        >
                            <SlidersHorizontal className="w-5 h-5" />
                            Filters
                        </button>
                    </div>

                    {/* Filters Panel */}
                    {showFilters && (
                        <ScrollReveal>
                            <div className="glass rounded-xl p-6 mb-8">
                                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                                    {/* Transmission */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Transmission
                                        </label>
                                        <select
                                            value={filters.transmission}
                                            onChange={(e) => handleFilterChange('transmission', e.target.value)}
                                            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        >
                                            <option value="">All</option>
                                            <option value="Automatic">Automatic</option>
                                            <option value="Manual">Manual</option>
                                        </select>
                                    </div>

                                    {/* Fuel Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Fuel Type
                                        </label>
                                        <select
                                            value={filters.fuelType}
                                            onChange={(e) => handleFilterChange('fuelType', e.target.value)}
                                            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        >
                                            <option value="">All</option>
                                            <option value="Petrol">Petrol</option>
                                            <option value="Diesel">Diesel</option>
                                            <option value="Hybrid">Hybrid</option>
                                            <option value="Electric">Electric</option>
                                        </select>
                                    </div>

                                    {/* Min Price */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Min Price (Daily)
                                        </label>
                                        <input
                                            type="number"
                                            value={filters.minPrice}
                                            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                                            placeholder="0"
                                            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        />
                                    </div>

                                    {/* Max Price */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Max Price (Daily)
                                        </label>
                                        <input
                                            type="number"
                                            value={filters.maxPrice}
                                            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                                            placeholder="1000"
                                            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        />
                                    </div>

                                    {/* Seats */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Min Seats
                                        </label>
                                        <select
                                            value={filters.seats}
                                            onChange={(e) => handleFilterChange('seats', e.target.value)}
                                            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        >
                                            <option value="">Any</option>
                                            <option value="5">5+</option>
                                            <option value="7">7+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-4">
                                    <button
                                        onClick={clearFilters}
                                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Cars Grid */}
                    {filteredCars.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCars.map((car, index) => (
                                <ScrollReveal key={car.id} delay={index * 0.1} direction="up">
                                    <CarCard car={car} />
                                </ScrollReveal>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-lg text-slate-600">
                                No cars found matching your criteria. Try adjusting your filters.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-slate-900 text-white">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl font-display font-bold mb-6">
                                Need Help Choosing?
                            </h2>
                            <p className="text-xl text-slate-300 mb-8">
                                Contact our team for personalized recommendations based on your needs and budget.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-accent text-white font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                            >
                                Contact Us
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
