import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug } from '../../data/servicesData';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import ScrollReveal from '../../components/ScrollReveal';
import PageTransition from '../../components/PageTransition';

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = getServiceBySlug(slug);

    if (!service) {
        return (
            <PageTransition>
                <div className="container-custom section text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
                    <Link to="/services">
                        <Button variant="primary">View All Services</Button>
                    </Link>
                </div>
            </PageTransition>
        );
    }

    const Icon = service.icon;

    return (
        <PageTransition>
            {/* Breadcrumb */}
            <div className="bg-transparent border-b border-white/5 py-4">
                <div className="container-custom">
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Services
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="section-lg bg-transparent">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <Icon className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-4xl font-display font-bold text-white mb-8 text-center">
                                What We <span className="text-accent-500">Offer</span>
                            </h2>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-4">
                            {service.features.map((feature, index) => (
                                <ScrollReveal key={feature} delay={index * 0.05} direction="up">
                                    <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/30 border border-white/5 hover:bg-slate-800/50 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-slate-300 leading-relaxed">{feature}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section bg-transparent border-t border-white/5">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-4xl font-display font-bold text-white mb-8 text-center">
                            Why Choose <span className="text-accent-500">Us</span>
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {service.benefits.map((benefit, index) => (
                            <ScrollReveal key={benefit} delay={index * 0.1} direction="up">
                                <Card variant="glassDark" hover={true} className="text-center border border-white/5">
                                    <div className="w-12 h-12 rounded-full bg-accent-600 flex items-center justify-center mx-auto mb-3">
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <p className="font-semibold text-slate-200">{benefit}</p>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-transparent border-t border-white/5 text-white">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl font-display font-bold mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl text-slate-300 mb-8">
                                Contact us today to discuss how we can help with your {service.title.toLowerCase()} needs.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link to="/contact">
                                    <Button
                                        variant="accent"
                                        size="lg"
                                        icon={ArrowRight}
                                        iconPosition="right"
                                    >
                                        Request a Quote
                                    </Button>
                                </Link>
                                <Link to="/services">
                                    <Button variant="white" size="lg">
                                        View All Services
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
