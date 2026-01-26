import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Check, Phone, Mail, MessageSquare, MapPin, Maximize, Bed, Bath } from 'lucide-react';
import { getPropertyById } from '../../data/mockData';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import FormInput from '../../components/ui/FormInput';
import FormTextarea from '../../components/ui/FormTextarea';
import toast from 'react-hot-toast';

export default function PropertyDetails() {
    const { id } = useParams();
    const property = getPropertyById(id);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        interestedIn: property?.transactionType || 'Sale',
    });

    if (!property) {
        return (
            <PageTransition>
                <div className="min-h-screen flex items-center justify-center bg-transparent">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-white mb-4">Property Not Found</h1>
                        <Link to="/properties" className="text-accent-400 hover:text-accent-500">
                            ← Back to Properties
                        </Link>
                    </div>
                </div>
            </PageTransition>
        );
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-ZM', {
            style: 'currency',
            currency: 'ZMW',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Property enquiry submitted:', { ...formData, propertyId: property.id });
        toast.success('Thank you! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '', interestedIn: property.transactionType });
        setIsSubmitting(false);
    };

    const handleInputChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <PageTransition>
            {/* Header */}
            <section className="section-sm bg-transparent border-b border-white/5">
                <div className="container-custom">
                    <Link to="/properties" className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-500 mb-4 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Properties
                    </Link>
                </div>
            </section>

            <section className="section bg-transparent">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Property Title */}
                            <ScrollReveal>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${property.transactionType === 'Sale'
                                            ? 'bg-accent-600/20 text-accent-400'
                                            : 'bg-accent-500/20 text-accent-300'
                                            }`}>
                                            For {property.transactionType}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${property.status === 'Available'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                            }`}>
                                            {property.status}
                                        </span>
                                    </div>
                                    <h1 className="text-4xl font-display font-bold text-white mb-2">
                                        {property.title}
                                    </h1>
                                    <p className="text-xl text-slate-400 flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-accent-500" />
                                        {property.address}, {property.district}
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Image */}
                            <ScrollReveal>
                                <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                                    {property.mainImage ? (
                                        <img
                                            src={property.mainImage}
                                            alt={property.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-6xl">🏠</span>
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>

                            {/* Quick Facts */}
                            <ScrollReveal>
                                <Card variant="glassDark" className="border border-white/5">
                                    <h2 className="text-2xl font-bold text-white mb-4">Property Details</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-accent-600/10 flex items-center justify-center">
                                                <Bed className="w-6 h-6 text-accent-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-400">Bedrooms</p>
                                                <p className="text-lg font-semibold text-white">
                                                    {property.bedrooms || 'N/A'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-accent-600/10 flex items-center justify-center">
                                                <Bath className="w-6 h-6 text-accent-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-400">Bathrooms</p>
                                                <p className="text-lg font-semibold text-white">
                                                    {property.bathrooms || 'N/A'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-accent-600/10 flex items-center justify-center">
                                                <Maximize className="w-6 h-6 text-accent-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-400">Area</p>
                                                <p className="text-lg font-semibold text-white">
                                                    {property.areaSqm ? `${property.areaSqm} m²` : 'N/A'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-accent-600/10 flex items-center justify-center">
                                                <MapPin className="w-6 h-6 text-accent-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-400">Type</p>
                                                <p className="text-lg font-semibold text-white">
                                                    {property.propertyType}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </ScrollReveal>

                            {/* Features */}
                            {property.features && property.features.length > 0 && (
                                <ScrollReveal>
                                    <Card variant="glassDark" className="border border-white/5">
                                        <h2 className="text-2xl font-bold text-white mb-4">Features & Amenities</h2>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {property.features.map((feature, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <Check className="w-5 h-5 text-accent-500 flex-shrink-0" />
                                                    <span className="text-slate-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </ScrollReveal>
                            )}

                            {/* Description */}
                            {property.description && (
                                <ScrollReveal>
                                    <Card variant="glassDark" className="border border-white/5">
                                        <h2 className="text-2xl font-bold text-white mb-4">About This Property</h2>
                                        <p className="text-slate-300 leading-relaxed">{property.description}</p>
                                    </Card>
                                </ScrollReveal>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Pricing Card */}
                            <ScrollReveal>
                                <Card variant="glassDark" className="sticky top-24 border border-white/10 shadow-accent-500/5">
                                    <h3 className="text-2xl font-bold text-white mb-4">Price</h3>
                                    <div className="mb-6">
                                        <span className="text-3xl font-bold text-accent-400">
                                            {formatPrice(property.price)}
                                        </span>
                                        {property.transactionType === 'Rent' && (
                                            <span className="text-lg text-slate-400 ml-2">/month</span>
                                        )}
                                    </div>

                                    {/* Enquiry Form */}
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <h4 className="font-semibold text-white flex items-center gap-2">
                                            <MessageSquare className="w-5 h-5 text-accent-500" />
                                            Send Enquiry
                                        </h4>

                                        <FormInput
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />

                                        <FormInput
                                            name="email"
                                            type="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />

                                        <FormInput
                                            name="phone"
                                            type="tel"
                                            placeholder="Your Phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />

                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Interested In
                                            </label>
                                            <select
                                                name="interestedIn"
                                                value={formData.interestedIn}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all"
                                            >
                                                <option value="Sale">Buying</option>
                                                <option value="Rent">Renting</option>
                                                <option value="Viewing">Viewing</option>
                                            </select>
                                        </div>

                                        <FormTextarea
                                            name="message"
                                            placeholder="Tell us about your requirements..."
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={3}
                                        />

                                        <Button
                                            type="submit"
                                            variant="mixed"
                                            size="lg"
                                            loading={isSubmitting}
                                            className="w-full"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                                        </Button>
                                    </form>

                                    {/* Contact Info */}
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <p className="text-sm text-slate-400 mb-3">Or contact us directly:</p>
                                        <div className="space-y-2 text-sm">
                                            <a href="tel:+260973414769" className="flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors">
                                                <Phone className="w-4 h-4" />
                                                +260 973 414 769
                                            </a>
                                            <a href="mailto:whiteboardzambia@gmail.com" className="flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors">
                                                <Mail className="w-4 h-4" />
                                                whiteboardzambia@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </Card>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
