import { servicesData } from '../../data/servicesData';
import ServiceCard from '../../components/ui/ServiceCard';
import ScrollReveal from '../../components/ScrollReveal';
import PageTransition from '../../components/PageTransition';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Services() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="section-lg bg-gradient-to-br from-primary-50 via-slate-50 to-accent-50/30">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                                Our <span className="gradient-text">Services</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                Comprehensive multi-service solutions tailored to meet the unique needs of
                                businesses, institutions, and individuals across various sectors.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {servicesData.map((service, index) => (
                            <ScrollReveal key={service.id} delay={index * 0.1} direction="up">
                                <ServiceCard
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.shortDescription}
                                    link={`/services/${service.slug}`}
                                    gradient={index % 2 === 0}
                                />
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <ScrollReveal>
                        <div className="text-center max-w-2xl mx-auto glass-primary rounded-2xl p-8">
                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                                Need a Custom Solution?
                            </h2>
                            <p className="text-lg text-slate-600 mb-6">
                                We tailor our services to meet your specific requirements. Get in touch to discuss your needs.
                            </p>
                            <Link to="/contact">
                                <Button
                                    variant="mixed"
                                    size="lg"
                                    icon={ArrowRight}
                                    iconPosition="right"
                                >
                                    Request a Consultation
                                </Button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
