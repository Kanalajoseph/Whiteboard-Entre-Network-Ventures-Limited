import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import Card from '../../components/ui/Card';
import ScrollReveal from '../../components/ScrollReveal';
import PageTransition from '../../components/PageTransition';
import wenLogo from '../../images/wen_logo2.jpg';

const values = [
    {
        icon: CheckCircle2,
        title: 'Efficiency and Reliability',
        description: 'We deliver consistent, dependable services with optimal resource utilization and timely execution.',
    },
    {
        icon: Heart,
        title: 'Quality Service',
        description: 'Excellence in every interaction, ensuring the highest standards across all our service offerings.',
    },
];

const industries = [
    'Education & Training',
    'Business & Finance',
    'Healthcare & Medical',
    'Construction & Infrastructure',
    'Government & Public Sector',
    'NGOs & Development',
    'Agriculture & Supply Chain',
    'Technology & Innovation',
];

export default function About() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="section-lg bg-gradient-to-br from-primary-50 to-slate-50">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                                About <span className="gradient-text">WEN</span>
                            </h1>
                            <p className="text-2xl font-semibold gradient-text mb-3">
                                Well rounded individuals and groups!
                            </p>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Whiteboard Entre-Network Ventures Limited is a multi-service organization
                                delivering excellence across education, tax consultancy, general supply,
                                construction & real estate, and financial services.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="left">
                            <div className="relative">
                                <div className="w-full aspect-video rounded-2xl gradient-mixed flex items-center justify-center shadow-2xl p-8">
                                    <div className="text-white text-center">
                                        <img
                                            src={wenLogo}
                                            alt="WEN Logo"
                                            className="h-32 w-auto object-contain mx-auto mb-4"
                                        />
                                        <p className="text-lg font-medium">Excellence in Service</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div>
                                <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
                                    Who We Are
                                </h2>
                                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                                    Whiteboard Entre-Network Ventures Limited (WEN) is a professional multi-service
                                    organization based in Lusaka, Zambia. We combine expertise, innovation, and
                                    dedication to deliver comprehensive solutions across multiple sectors.
                                </p>
                                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                                    Our diverse team of certified professionals brings years of experience in
                                    education, finance, supply chain, construction, and consultancy services.
                                    We serve corporate clients, institutions, NGOs, government bodies, and individuals.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    At WEN, we believe in building lasting relationships through quality service,
                                    transparency, and commitment to excellence.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section bg-slate-900 text-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        <ScrollReveal delay={0}>
                            <Card variant="glass-dark" className="h-full border-white/10">
                                <Eye className="w-12 h-12 text-accent-400 mb-4" />
                                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    To envision a world where services transcend boundaries, nurturing curiosity,
                                    innovation, and lifelong success for all.
                                </p>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <Card variant="glass-dark" className="h-full border-white/10">
                                <Target className="w-12 h-12 text-primary-400 mb-4" />
                                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    To empower individuals and organizations through accessible and dynamic solutions
                                    across education, mining, construction, transport, real estate, and general supply of goods.
                                </p>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section bg-white">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                                Our Core <span className="gradient-text">Values</span>
                            </h2>
                            <p className="text-lg text-slate-600">
                                The principles that guide our work and define our culture.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <ScrollReveal key={value.title} delay={index * 0.1} direction="up">
                                    <Card variant="glassPrimary" hover={true} className="text-center h-full">
                                        <div className="w-16 h-16 rounded-xl gradient-mixed flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-slate-600">
                                            {value.description}
                                        </p>
                                    </Card>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Organizational Structure */}
            <section className="section bg-white">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                                Our <span className="gradient-text">Team Structure</span>
                            </h2>
                            <p className="text-lg text-slate-600">
                                Led by experienced professionals across all departments, ensuring excellence in every service area.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="max-w-4xl mx-auto">
                        {/* Board and CEO */}
                        <ScrollReveal>
                            <div className="mb-8">
                                <Card variant="glass" className="text-center">
                                    <div className="inline-block px-6 py-3 rounded-lg gradient-mixed text-white font-bold mb-2">
                                        Board of Directors
                                    </div>
                                    <div className="mt-4">
                                        <div className="inline-block px-6 py-3 rounded-lg bg-primary-100 text-primary-900 font-semibold">
                                            Chief Executive Officer (CEO)
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </ScrollReveal>

                        {/* Department Directors */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <ScrollReveal delay={0.1}>
                                <Card variant="glassPrimary" hover={true}>
                                    <h3 className="font-bold text-slate-900 mb-1">Director of Education</h3>
                                    <p className="text-sm text-slate-600">Training Consultants</p>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal delay={0.15}>
                                <Card variant="glassPrimary" hover={true}>
                                    <h3 className="font-bold text-slate-900 mb-1">Director of Construction</h3>
                                    <p className="text-sm text-slate-600">Site Managers</p>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <Card variant="glassPrimary" hover={true}>
                                    <h3 className="font-bold text-slate-900 mb-1">Director of Supply</h3>
                                    <p className="text-sm text-slate-600">Logistics Team</p>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal delay={0.25}>
                                <Card variant="glassPrimary" hover={true}>
                                    <h3 className="font-bold text-slate-900 mb-1">Finance Director</h3>
                                    <p className="text-sm text-slate-600">Accountants</p>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <Card variant="glassPrimary" hover={true}>
                                    <h3 className="font-bold text-slate-900 mb-1">Public Relations Manager</h3>
                                    <p className="text-sm text-slate-600">Brand & Communications</p>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal delay={0.35}>
                                <Card variant="glassPrimary" hover={true}>
                                    <h3 className="font-bold text-slate-900 mb-1">Legal Counsel</h3>
                                    <p className="text-sm text-slate-600">Compliance & Contracts</p>
                                </Card>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="section bg-gradient-to-br from-slate-50 to-accent-50/20">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                                Industries We <span className="gradient-text">Serve</span>
                            </h2>
                            <p className="text-lg text-slate-600">
                                Our expertise spans across multiple sectors, serving diverse clients with tailored solutions.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {industries.map((industry, index) => (
                            <ScrollReveal key={industry} delay={index * 0.05} direction="up">
                                <div className="glass rounded-lg p-4 text-center hover-lift hover:shadow-lg transition-all">
                                    <CheckCircle2 className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                                    <p className="font-medium text-slate-700">{industry}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
