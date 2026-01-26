import { CheckCircle, Users, Award, Zap } from 'lucide-react';
import Card from '../../../components/ui/Card';
import ScrollReveal from '../../../components/ScrollReveal';

const features = [
    {
        icon: CheckCircle,
        title: 'Proven Excellence',
        description: 'Years of experience delivering quality services across multiple sectors.',
    },
    {
        icon: Users,
        title: 'Expert Team',
        description: 'Certified professionals dedicated to your success and growth.',
    },
    {
        icon: Award,
        title: 'Quality Assured',
        description: 'Commitment to the highest standards in every project we undertake.',
    },
    {
        icon: Zap,
        title: 'Fast Delivery',
        description: 'Efficient processes ensuring timely completion of all services.',
    },
];

export default function WhyChooseWEN() {
    return (
        <section className="section bg-transparent">
            <div className="container-custom">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Why Choose <span className="gradient-text">WEN</span>
                        </h2>
                        <p className="text-lg text-slate-300">
                            We combine expertise, dedication, and innovation to deliver exceptional value to our clients.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <ScrollReveal key={feature.title} delay={index * 0.1} direction="up">
                                <Card variant="glassDark" hover={true} className="text-center h-full">
                                    <div className="w-16 h-16 rounded-xl bg-accent-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-accent-600/20">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-300">
                                        {feature.description}
                                    </p>
                                </Card>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
