import { servicesData } from '../../../data/servicesData';
import ServiceCard from '../../../components/ui/ServiceCard';
import ScrollReveal from '../../../components/ScrollReveal';

export default function ServicesOverview() {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                            Our <span className="gradient-text">Services</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Comprehensive solutions across multiple industries, delivered with expertise and commitment to excellence.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
        </section>
    );
}
