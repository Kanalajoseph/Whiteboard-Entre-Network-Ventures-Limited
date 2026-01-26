import Card from '../../components/ui/Card';
import ScrollReveal from '../../components/ScrollReveal';
import PageTransition from '../../components/PageTransition';
import { Building2, Heart, Briefcase, GraduationCap } from 'lucide-react';

// Placeholder client data - client should provide actual logos
const industries = [
    { name: 'Education & Training', icon: GraduationCap, color: 'primary' },
    { name: 'Corporate Sector', icon: Briefcase, color: 'accent' },
    { name: 'NGOs & CSOs', icon: Heart, color: 'primary' },
    { name: 'Government Bodies', icon: Building2, color: 'accent' },
];

const clients = [
    { name: 'TOLUMI EXPRESS LIMITED' },
    { name: 'Kudu Consulting' },
    { name: 'Vigour Enviro Solutions' },
    { name: 'SOUTHPARK FUN ZONE' },
    { name: 'INFLUX LIMITED INVESTMENTS' },
    { name: 'WORK THE WORLD' },
    { name: 'International School of Lusaka' },
    { name: 'Wastemat Zambia' },
    { name: 'ZAMBIA DAILY MAIL LIMITED' },
    { name: 'BLOOM BUSINESS ENTERPRISE' },
];

const testimonials = [
    {
        name: 'International School of Lusaka',
        sector: 'Education',
        quote: 'WEN provided exceptional support for our research and development initiatives.',
    },
    {
        name: 'Kudu Consulting',
        sector: 'Business',
        quote: 'Professional tax consultancy and reliable supply chain solutions.',
    },
    {
        name: 'Vigour Enviro Solutions',
        sector: 'Infrastructure',
        quote: 'Quality construction services delivered on time and within budget.',
    },
];

export default function Clients() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="section-lg bg-transparent">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                                Our <span className="text-accent-100">Clients</span>
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                Trusted by businesses, institutions, and organizations across multiple sectors.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Industries Served */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-4xl font-display font-bold text-white mb-12 text-center">
                            Industries We <span className="text-accent-500">Serve</span>
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((industry, index) => {
                            const Icon = industry.icon;
                            return (
                                <ScrollReveal key={industry.name} delay={index * 0.1} direction="up">
                                    <Card variant="glassDark" hover={true} className="text-center border border-white/5">
                                        <div className={`w-16 h-16 rounded-xl bg-accent-600/10 flex items-center justify-center mx-auto mb-4`}>
                                            <Icon className={`w-8 h-8 text-accent-500`} />
                                        </div>
                                        <h3 className="font-bold text-white">{industry.name}</h3>
                                    </Card>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="section bg-transparent border-t border-white/5">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-4xl font-display font-bold text-white mb-12 text-center">
                            Client <span className="text-accent-500">Testimonials</span>
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <ScrollReveal key={testimonial.name} delay={index * 0.1} direction="up">
                                <Card variant="glassDark" className="h-full border border-white/5">
                                    <div className="mb-4">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-5 h-5 text-accent-500">★</div>
                                            ))}
                                        </div>
                                        <p className="text-slate-300 italic leading-relaxed mb-4">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                    <div className="border-t border-white/10 pt-4">
                                        <p className="font-semibold text-white">{testimonial.name}</p>
                                        <p className="text-sm text-accent-500">{testimonial.sector}</p>
                                    </div>
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
                                Join Our Growing List of Satisfied Clients
                            </h2>
                            <p className="text-xl text-slate-300 mb-8">
                                Experience professional service excellence across education, tax, supply, construction, and finance.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-accent text-white font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
