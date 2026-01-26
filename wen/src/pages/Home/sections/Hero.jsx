import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import ScrollReveal from '../../../components/ScrollReveal';

// Import images
import corporateSkillsImg from '../../../images/corporate-skills.png';
import educationImg from '../../../images/education.jpg';
import taxImg from '../../../images/Tax.jpg';
import constructionImg from '../../../images/construction.jpg';
import realEstateImg from '../../../images/real-estatet.png';
import loanImg from '../../../images/Loan.jpg';
import carHireImg from '../../../images/car hire.jpg';


const carouselSlides = [
    {
        image: corporateSkillsImg,
        title: 'Corporate Skills',
        subtitle: 'Strategic Planning & Leadership Development',
        tagline: 'Empowering Organizations for Success',
    },
    {
        image: educationImg,
        title: 'Education Services',
        subtitle: 'Research, Academic Support & Skills Development',
        tagline: 'Empowering Minds, Building Futures',
    },
    {
        image: taxImg,
        title: 'Tax Consultancy',
        subtitle: 'Professional Tax Planning & Compliance',
        tagline: 'Navigate Taxes with Confidence',
    },
    {
        image: constructionImg,
        title: 'Construction Services',
        subtitle: 'Building Construction & Infrastructure',
        tagline: 'Building Excellence, Creating Landmarks',
    },
    {
        image: realEstateImg,
        title: 'Real Estate',
        subtitle: 'Property Development & Management',
        tagline: 'Your Partner in Property Success',
    },
    {
        image: loanImg,
        title: 'Financial Solutions',
        subtitle: 'Collateral-Based Loans & Financing',
        tagline: 'Flexible Financing for Your Goals',
    },
    {
        image: carHireImg,
        title: 'Car Hire Services',
        subtitle: 'Reliable Vehicle Rental Solutions',
        tagline: 'Your Journey, Our Commitment',
    },
];


export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
        }, 6000); // Change slide every 6 seconds for more professional pacing

        return () => clearInterval(interval);
    }, []);

    const currentSlide = carouselSlides[currentIndex];

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Image Carousel Background */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for smooth, professional fade
                        }}
                        className="absolute inset-0"
                    >
                        <img
                            src={currentSlide.image}
                            alt={currentSlide.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Decorative gradient overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(249,115,22,0.15),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(59,130,246,0.15),transparent_60%)]"></div>

            {/* Content */}
            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/5 mb-6 animate-slideDown shadow-2xl">
                            <Sparkles className="w-4 h-4 text-accent-400" />
                            <span className="text-sm font-medium text-white">
                                Multi-Service Solutions for Your Success
                            </span>
                        </div>
                    </ScrollReveal>

                    {/* Dynamic Title based on carousel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.43, 0.13, 0.23, 0.96]
                            }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-tight">
                                {currentSlide.title}
                            </h1>
                            <p className="text-2xl md:text-3xl font-semibold gradient-text mb-3">
                                {currentSlide.tagline}
                            </p>
                            <p className="text-xl text-slate-200 mb-8">
                                {currentSlide.subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <ScrollReveal delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link to="/contact">
                                <Button
                                    variant="mixed"
                                    size="lg"
                                    icon={ArrowRight}
                                    iconPosition="right"
                                >
                                    Request a Quote
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button
                                    variant="white"
                                    size="lg"
                                >
                                    Explore All Services
                                </Button>
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Carousel Indicators */}
                    <ScrollReveal delay={0.4}>
                        <div className="flex items-center gap-2">
                            {carouselSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'w-8 bg-accent-500'
                                        : 'w-4 bg-white/40 hover:bg-white/60'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Stats */}
                    <ScrollReveal delay={0.5}>
                        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">500+</div>
                                <div className="text-sm text-slate-300">Clients Served</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">6</div>
                                <div className="text-sm text-slate-300">Service Areas</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">100%</div>
                                <div className="text-sm text-slate-300">Satisfaction</div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-primary-600/5 rounded-full blur-[140px] pointer-events-none"></div>
        </section>
    );
}

