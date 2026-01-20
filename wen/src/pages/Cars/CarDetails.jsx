import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Check, Phone, Mail, MessageSquare } from 'lucide-react';
import { getCarById } from '../../data/mockData';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import FormInput from '../../components/ui/FormInput';
import FormTextarea from '../../components/ui/FormTextarea';
import toast from 'react-hot-toast';

export default function CarDetails() {
    const { id } = useParams();
    const car = getCarById(id);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        rentalPeriod: 'daily',
    });

    if (!car) {
        return (
            <PageTransition>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">Car Not Found</h1>
                        <Link to="/cars" className="text-primary-600 hover:text-primary-700">
                            ← Back to Cars
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

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Enquiry submitted:', { ...formData, carId: car.id });
        toast.success('Thank you! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '', rentalPeriod: 'daily' });
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
                    <Link to="/cars" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-4">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Cars
                    </Link>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Car Title */}
                            <ScrollReveal>
                                <div>
                                    <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">
                                        {car.year} {car.make} {car.model}
                                    </h1>
                                    <p className="text-xl text-slate-600">{car.color} • {car.transmission}</p>
                                </div>
                            </ScrollReveal>

                            {/* Image */}
                            <ScrollReveal>
                                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden shadow-2xl">
                                    {car.mainImage ? (
                                        <img
                                            src={car.mainImage}
                                            alt={`${car.make} ${car.model}`}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-6xl text-primary-300">🚗</span>
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>

                            {/* Specifications */}
                            <ScrollReveal>
                                <Card variant="glass">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Specifications</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="text-slate-600">Year</span>
                                            <span className="font-semibold text-slate-900">{car.year}</span>
                                        </div>
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="text-slate-600">Transmission</span>
                                            <span className="font-semibold text-slate-900">{car.transmission}</span>
                                        </div>
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="text-slate-600">Fuel Type</span>
                                            <span className="font-semibold text-slate-900">{car.fuelType}</span>
                                        </div>
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="text-slate-600">Seats</span>
                                            <span className="font-semibold text-slate-900">{car.seats}</span>
                                        </div>
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="text-slate-600">Color</span>
                                            <span className="font-semibold text-slate-900">{car.color}</span>
                                        </div>
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="text-slate-600">Status</span>
                                            <span className={`font-semibold ${car.availability === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
                                                {car.availability}
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            </ScrollReveal>

                            {/* Features */}
                            {car.features && car.features.length > 0 && (
                                <ScrollReveal>
                                    <Card variant="glass">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Features</h2>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {car.features.map((feature, index) => (
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
                            {car.description && (
                                <ScrollReveal>
                                    <Card variant="glass">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Car</h2>
                                        <p className="text-slate-600 leading-relaxed">{car.description}</p>
                                    </Card>
                                </ScrollReveal>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Pricing Card */}
                            <ScrollReveal>
                                <Card variant="glassPrimary" className="sticky top-24">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Pricing</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-slate-200">
                                            <span className="text-slate-600">Daily Rate</span>
                                            <span className="text-2xl font-bold text-primary-600">
                                                {formatPrice(car.dailyRate)}
                                            </span>
                                        </div>
                                        {car.weeklyRate && (
                                            <div className="flex justify-between items-center py-3 border-b border-slate-200">
                                                <span className="text-slate-600">Weekly Rate</span>
                                                <span className="text-xl font-semibold text-slate-900">
                                                    {formatPrice(car.weeklyRate)}
                                                </span>
                                            </div>
                                        )}
                                        {car.monthlyRate && (
                                            <div className="flex justify-between items-center py-3">
                                                <span className="text-slate-600">Monthly Rate</span>
                                                <span className="text-xl font-semibold text-slate-900">
                                                    {formatPrice(car.monthlyRate)}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Enquiry Form */}
                                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                                                Rental Period
                                            </label>
                                            <select
                                                name="rentalPeriod"
                                                value={formData.rentalPeriod}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            >
                                                <option value="daily">Daily</option>
                                                <option value="weekly">Weekly</option>
                                                <option value="monthly">Monthly</option>
                                            </select>
                                        </div>

                                        <FormTextarea
                                            name="message"
                                            placeholder="Tell us about your rental needs..."
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
