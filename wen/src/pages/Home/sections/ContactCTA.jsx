import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Button from '../../../components/ui/Button';
import ScrollReveal from '../../../components/ScrollReveal';

export default function ContactCTA() {
    return (
        <section className="section-lg bg-transparent text-white relative overflow-hidden">

            <div className="container-custom relative z-10">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Let us help you achieve your goals with our comprehensive range of professional services.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <Button
                                as={Link}
                                to="/contact"
                                variant="accent"
                                size="lg"
                                icon={ArrowRight}
                                iconPosition="right"
                            >
                                Request a Quote
                            </Button>
                            <Button
                                as={Link}
                                to="/services"
                                variant="white"
                                size="lg"
                            >
                                View All Services
                            </Button>
                        </div>

                        {/* Contact Options */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-white/10">
                            <a
                                href="tel:+260973414769"
                                className="flex items-center gap-3 text-slate-300 hover:text-accent-400 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm text-slate-300">Call us at</div>
                                    <div className="font-semibold">+260 973 414 769</div>
                                </div>
                            </a>

                            <a
                                href="mailto:whiteboard289@gmail.com"
                                className="flex items-center gap-3 text-slate-300 hover:text-accent-400 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm text-slate-300">Email us at</div>
                                    <div className="font-semibold">whiteboard289@gmail.com</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

        </section>
    );
}
