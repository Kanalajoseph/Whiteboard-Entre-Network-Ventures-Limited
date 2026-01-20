import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { realEstateData, filterProperties } from '../../data/mockData';
import PropertyCard from '../../components/ui/PropertyCard';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';

export default function Properties() {
    const [filters, setFilters] = useState({
        propertyType: '',
        transactionType: '',
        minPrice: '',
        maxPrice: '',
        bedrooms: '',
        district: '',
        search: '',
    });
    const [showFilters, setShowFilters] = useState(false);

    const filteredProperties = filterProperties(filters).filter(property => {
        if (!filters.search) return true;
        const searchLower = filters.search.toLowerCase();
        return (
            property.title.toLowerCase().includes(searchLower) ||
            property.description?.toLowerCase().includes(searchLower) ||
            property.district.toLowerCase().includes(searchLower)
        );
    });

    const handleFilterChange = (name, value) => {
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const clearFilters = () => {
        setFilters({
            propertyType: '',
            transactionType: '',
            minPrice: '',
            maxPrice: '',
            bedrooms: '',
            district: '',
            search: '',
        });
    };

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="section-lg bg-gradient-to-br from-primary-50 via-slate-50 to-accent-50/30">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                                Real <span className="gradient-text">Estate</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                Discover your dream property in Lusaka. From residential homes to commercial spaces, find the perfect match.
                            </p>

                            {/* Search Bar */}
                            <div className="max-w-2xl mx-auto">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search properties..."
                                        value={filters.search}
                                        onChange={(e) => handleFilterChange('search', e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Properties Listing */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                Available Properties
                            </h2>
                            <p className="text-slate-600 mt-1">
                                {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} available
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
                                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                                    {/* Property Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Property Type
                                        </label>
                                        <select
                                            value={filters.propertyType}
                                            onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                                            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        >
                                            <option value="">All Types</option>
                                            <option value="House">House</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Land">Land</option>
                                            <option value="Commercial">Commercial</option>
                                            <option value="Office">Office</option>
                                        </select>
                                    </div>

                                    {/* Transaction Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Transaction
                                        </label>
                                        <select
                                            value={filters.transactionType}
                                            onChange={(e) => handleFilterChange('transactionType', e.target.value)}
                                            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        >
                                            <option value="">All</option>
                                            <option value="Sale">For Sale</option>
                                            <option value="Rent">For Rent</option>
                                        </select>
                                    </div>

                                    {/* Min Price */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Min Price
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
                                            Max Price
                                        </label>
                                        <input
                                            type="number"
                                            value={filters.maxPrice}
                                            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                                            placeholder="5000000"
                                            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        />
                                    </div>

                                    {/* Bedrooms */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Min Bedrooms
                                        </label>
                                        <select
                                            value={filters.bedrooms}
                                            onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                                            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        >
                                            <option value="">Any</option>
                                            <option value="1">1+</option>
                                            <option value="2">2+</option>
                                            <option value="3">3+</option>
                                            <option value="4">4+</option>
                                        </select>
                                    </div>

                                    {/* District */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            District
                                        </label>
                                        <select
                                            value={filters.district}
                                            onChange={(e) => handleFilterChange('district', e.target.value)}
                                            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        >
                                            <option value="">All Areas</option>
                                            <option value="Kabulonga">Kabulonga</option>
                                            <option value="Woodlands">Woodlands</option>
                                            <option value="Rhodes Park">Rhodes Park</option>
                                            <option value="Meanwood">Meanwood</option>
                                            <option value="Chalala">Chalala</option>
                                            <option value="CBD">CBD</option>
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

                    {/* Properties Grid */}
                    {filteredProperties.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProperties.map((property, index) => (
                                <ScrollReveal key={property.id} delay={index * 0.1} direction="up">
                                    <PropertyCard property={property} />
                                </ScrollReveal>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-lg text-slate-600">
                                No properties found matching your criteria. Try adjusting your filters.
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
                                Looking for Something Specific?
                            </h2>
                            <p className="text-xl text-slate-300 mb-8">
                                Our team can help you find the perfect property that matches your exact requirements and budget.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-accent text-white font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                            >
                                Contact Our Real Estate Team
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
