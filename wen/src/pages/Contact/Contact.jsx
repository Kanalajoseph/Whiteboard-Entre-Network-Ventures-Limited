import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import FormInput from '../../components/ui/FormInput';
import FormTextarea from '../../components/ui/FormTextarea';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import ScrollReveal from '../../components/ScrollReveal';
import PageTransition from '../../components/PageTransition';
import toast from 'react-hot-toast';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        // Simulate form submission - replace with actual API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log('Form data:', data);
        toast.success('Thank you! We will contact you soon.');
        reset();
        setIsSubmitting(false);
    };

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="section-lg bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                                Get In <span className="text-accent-100">Touch</span>
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                Ready to discuss your project? Contact us today for professional service solutions.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <ScrollReveal direction="left">
                            <Card variant="glass">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                                    Send Us a Message
                                </h2>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <FormInput
                                        label="Full Name"
                                        placeholder="Enter your name"
                                        required
                                        error={errors.name?.message}
                                        {...register('name', { required: 'Name is required' })}
                                    />

                                    <FormInput
                                        label="Email Address"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        required
                                        error={errors.email?.message}
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address',
                                            },
                                        })}
                                    />

                                    <FormInput
                                        label="Phone Number"
                                        type="tel"
                                        placeholder="+260 XXX XXX XXX"
                                        error={errors.phone?.message}
                                        {...register('phone')}
                                    />

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Service Interest
                                        </label>
                                        <select
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                            {...register('service')}
                                        >
                                            <option value="">Select a service</option>
                                            <option value="education">Education Services</option>
                                            <option value="tax">Tax Consultancy</option>
                                            <option value="supply">General Supply</option>
                                            <option value="construction">Construction & Real Estate</option>
                                            <option value="loans">Loans / Car Hire</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <FormTextarea
                                        label="Message"
                                        placeholder="Tell us about your project or inquiry..."
                                        required
                                        rows={5}
                                        error={errors.message?.message}
                                        {...register('message', { required: 'Message is required' })}
                                    />

                                    <Button
                                        type="submit"
                                        variant="mixed"
                                        size="lg"
                                        icon={Send}
                                        iconPosition="right"
                                        loading={isSubmitting}
                                        className="w-full"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            </Card>
                        </ScrollReveal>

                        {/* Contact Information */}
                        <ScrollReveal direction="right">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                                        Contact Information
                                    </h2>
                                    <p className="text-slate-600 mb-8">
                                        Reach out to us through any of the following channels. We're here to help!
                                    </p>
                                </div>

                                <Card variant="glass" hover={true}>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg gradient-mixed flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                                            <div className="space-y-1">
                                                <div>
                                                    <a
                                                        href="tel:+260973414769"
                                                        className="text-primary-600 hover:text-primary-700 block"
                                                    >
                                                        +260 973 414 769
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="tel:+260770706706"
                                                        className="text-primary-600 hover:text-primary-700 block"
                                                    >
                                                        +260 770 706 706
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <Card variant="glass" hover={true}>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg gradient-mixed flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                                            <div className="space-y-1">
                                                <div>
                                                    <a
                                                        href="mailto:whiteboardzambia@gmail.com"
                                                        className="text-primary-600 hover:text-primary-700 break-all block"
                                                    >
                                                        whiteboardzambia@gmail.com
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="mailto:wenventuresltd@gmail.com"
                                                        className="text-primary-600 hover:text-primary-700 break-all block"
                                                    >
                                                        wenventuresltd@gmail.com
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <Card variant="glass" hover={true}>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg gradient-mixed flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                                            <p className="text-slate-600">
                                                Plot No. 25, 1st Floor, Room 104<br />
                                                Design House, Cairo Road<br />
                                                Lusaka, Zambia
                                            </p>
                                        </div>
                                    </div>
                                </Card>

                                {/* Office Hours */}
                                <Card variant="glassPrimary">
                                    <h3 className="font-semibold text-slate-900 mb-3">Office Hours</h3>
                                    <div className="space-y-2 text-sm text-slate-600">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday:</span>
                                            <span className="font-medium">8:00 AM - 5:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday:</span>
                                            <span className="font-medium">9:00 AM - 1:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday:</span>
                                            <span className="font-medium">Closed</span>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
