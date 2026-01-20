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
            <section className="section-lg bg-gradient-to-br from-primary-50 via-slate-50 to-accent-50/30">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                                Our <span className="gradient-text">Clients</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Trusted by businesses, institutions, and organizations across multiple sectors.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Industries Served */}
            <section className="section bg-white">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">
                            Industries We <span className="gradient-text">Serve</span>
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((industry, index) => {
                            const Icon = industry.icon;
                            return (
                                <ScrollReveal key={industry.name} delay={index * 0.1} direction="up">
                                    <Card variant="glass" hover={true} className="text-center">
                                        <div className={`w-16 h-16 rounded-xl ${industry.color === 'primary' ? 'bg-primary-100' : 'bg-accent-100'} flex items-center justify-center mx-auto mb-4`}>
                                            <Icon className={`w-8 h-8 ${industry.color === 'primary' ? 'text-primary-600' : 'text-accent-600'}`} />
                                        </div>
                                        <h3 className="font-bold text-slate-900">{industry.name}</h3>
                                    </Card>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="section bg-gradient-to-br from-slate-50 to-primary-50/20">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">
                            Client <span className="gradient-text">Testimonials</span>
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <ScrollReveal key={testimonial.name} delay={index * 0.1} direction="up">
                                <Card variant="glass" className="h-full">
                                    <div className="mb-4">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-5 h-5 text-accent-500">★</div>
                                            ))}
                                        </div>
                                        <p className="text-slate-700 italic leading-relaxed mb-4">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                    <div className="border-t border-slate-200 pt-4">
                                        <p className="font-semibold text-slate-900">{testimonial.name}</p>
                                        <p className="text-sm text-slate-600">{testimonial.sector}</p>
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-slate-900 text-white">
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
