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
            <section className="section-lg bg-transparent">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                                About <span className="text-accent-500">WEN</span>
                            </h1>
                            <p className="text-2xl font-semibold text-accent-500 mb-3">
                                Well rounded individuals and groups!
                            </p>
                            <p className="text-xl text-white/90 leading-relaxed">
                                Whiteboard Entre-Network Ventures Limited is a multi-service organization
                                delivering excellence across education, tax consultancy, general supply,
                                construction & real estate, and financial services.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="left">
                            <div className="relative">
                                <div className="w-full aspect-video flex items-center justify-center p-8">
                                    <img
                                        src={wenLogo}
                                        alt="WEN Logo"
                                        className="h-64 w-auto object-contain mx-auto shadow-2xl rounded-2xl glass p-4"
                                    />
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div>
                                <h2 className="text-4xl font-display font-bold text-white mb-6">
                                    Who We Are
                                </h2>
                                <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                                    Whiteboard Entre-Network Ventures Limited (WEN) is a professional multi-service
                                    organization based in Lusaka, Zambia. We combine expertise, innovation, and
                                    dedication to deliver comprehensive solutions across multiple sectors.
                                </p>
                                <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                                    Our diverse team of certified professionals brings years of experience in
                                    education, finance, supply chain, construction, and consultancy services.
                                    We serve corporate clients, institutions, NGOs, government bodies, and individuals.
                                </p>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    At WEN, we believe in building lasting relationships through quality service,
                                    transparency, and commitment to excellence.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                                Our Core <span className="gradient-text">Values</span>
                            </h2>
                            <p className="text-lg text-slate-300">
                                The principles that guide our work and define our culture.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <ScrollReveal key={value.title} delay={index * 0.1} direction="up">
                                    <Card variant="glass-dark" hover={true} className="text-center h-full">
                                        <div className="w-16 h-16 rounded-xl bg-accent-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-accent-600/20">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-slate-300">
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
            <section className="section bg-transparent">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                                Our <span className="gradient-text">Team Structure</span>
                            </h2>
                            <p className="text-lg text-slate-300">
                                Led by experienced professionals across all departments, ensuring excellence in every service area.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="max-w-4xl mx-auto">
                        {/* Board and CEO */}
                        <ScrollReveal>
                            <div className="mb-8">
                                <Card variant="glass-dark" className="text-center">
                                    <div className="inline-block px-6 py-3 rounded-lg bg-accent-600 text-white font-bold mb-2 shadow-lg shadow-accent-600/20">
                                        Board of Directors
                                    </div>
                                    <div className="mt-4">
                                        <div className="inline-block px-6 py-3 rounded-lg bg-accent-500/10 text-accent-400 border border-accent-500/20 font-semibold">
                                            Chief Executive Officer (CEO)
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </ScrollReveal>

                        {/* Department Directors */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <ScrollReveal delay={0.1}>
                                <Card variant="glass-dark" hover={true}>
                                    <h3 className="font-bold text-white mb-1">Director of Education</h3>
                                    <p className="text-sm text-slate-400">Training Consultants</p>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal delay={0.15}>
                                <Card variant="glass-dark" hover={true}>
                                    <h3 className="font-bold text-white mb-1">Director of Construction</h3>
                                    <p className="text-sm text-slate-400">Site Managers</p>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <Card variant="glass-dark" hover={true}>
                                    <h3 className="font-bold text-white mb-1">Director of Supply</h3>
                                    <p className="text-sm text-slate-400">Logistics Team</p>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal delay={0.25}>
                                <Card variant="glass-dark" hover={true}>
                                    <h3 className="font-bold text-white mb-1">Finance Director</h3>
                                    <p className="text-sm text-slate-400">Accountants</p>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <Card variant="glass-dark" hover={true}>
                                    <h3 className="font-bold text-white mb-1">Public Relations Manager</h3>
                                    <p className="text-sm text-slate-400">Brand & Communications</p>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal delay={0.35}>
                                <Card variant="glass-dark" hover={true}>
                                    <h3 className="font-bold text-white mb-1">Legal Counsel</h3>
                                    <p className="text-sm text-slate-400">Compliance & Contracts</p>
                                </Card>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="section bg-transparent">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                                Industries We <span className="gradient-text">Serve</span>
                            </h2>
                            <p className="text-lg text-slate-300">
                                Our expertise spans across multiple sectors, serving diverse clients with tailored solutions.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {industries.map((industry, index) => (
                            <ScrollReveal key={industry} delay={index * 0.05} direction="up">
                                <div className="glass-dark rounded-lg p-4 text-center hover-lift hover:shadow-lg transition-all border border-white/10">
                                    <CheckCircle2 className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                                    <p className="font-medium text-slate-200">{industry}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
