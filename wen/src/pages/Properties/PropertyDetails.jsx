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
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">Property Not Found</h1>
                        <Link to="/properties" className="text-primary-600 hover:text-primary-700">
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
            <section className="section-sm bg-gradient-to-br from-primary-50 to-slate-50">
                <div className="container-custom">
                    <Link to="/properties" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-4">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Properties
                    </Link>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Property Title */}
                            <ScrollReveal>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${property.transactionType === 'Sale'
                                                ? 'bg-primary-100 text-primary-700'
                                                : 'bg-accent-100 text-accent-700'
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
                                    <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">
                                        {property.title}
                                    </h1>
                                    <p className="text-xl text-slate-600 flex items-center gap-2">
                                        <MapPin className="w-5 h-5" />
                                        {property.address}, {property.district}
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Image */}
                            <ScrollReveal>
                                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden shadow-2xl">
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
                                <Card variant="glass">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Property Details</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                                                <Bed className="w-6 h-6 text-primary-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-600">Bedrooms</p>
                                                <p className="text-lg font-semibold text-slate-900">
                                                    {property.bedrooms || 'N/A'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                                                <Bath className="w-6 h-6 text-primary-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-600">Bathrooms</p>
                                                <p className="text-lg font-semibold text-slate-900">
                                                    {property.bathrooms || 'N/A'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                                                <Maximize className="w-6 h-6 text-primary-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-600">Area</p>
                                                <p className="text-lg font-semibold text-slate-900">
                                                    {property.areaSqm ? `${property.areaSqm} m²` : 'N/A'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                                                <MapPin className="w-6 h-6 text-primary-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-600">Type</p>
                                                <p className="text-lg font-semibold text-slate-900">
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
                                    <Card variant="glass">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Features & Amenities</h2>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {property.features.map((feature, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                    <span className="text-slate-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </ScrollReveal>
                            )}

                            {/* Description */}
                            {property.description && (
                                <ScrollReveal>
                                    <Card variant="glass">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Property</h2>
                                        <p className="text-slate-600 leading-relaxed">{property.description}</p>
                                    </Card>
                                </ScrollReveal>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Pricing Card */}
                            <ScrollReveal>
                                <Card variant="glassPrimary" className="sticky top-24">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Price</h3>
                                    <div className="mb-6">
                                        <span className="text-3xl font-bold text-primary-600">
                                            {formatPrice(property.price)}
                                        </span>
                                        {property.transactionType === 'Rent' && (
                                            <span className="text-lg text-slate-600 ml-2">/month</span>
                                        )}
                                    </div>

                                    {/* Enquiry Form */}
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                                            <MessageSquare className="w-5 h-5 text-primary-600" />
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
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Interested In
                                            </label>
                                            <select
                                                name="interestedIn"
                                                value={formData.interestedIn}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                                    <div className="mt-6 pt-6 border-t border-slate-200">
                                        <p className="text-sm text-slate-600 mb-3">Or contact us directly:</p>
                                        <div className="space-y-2 text-sm">
                                            <a href="tel:+260973414769" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                                                <Phone className="w-4 h-4" />
                                                +260 973 414 769
                                            </a>
                                            <a href="mailto:whiteboardzambia@gmail.com" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
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
