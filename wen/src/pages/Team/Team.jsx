import TeamMemberCard from '../../components/ui/TeamMemberCard';
import ScrollReveal from '../../components/ScrollReveal';
import PageTransition from '../../components/PageTransition';

// Placeholder team data - client should provide actual photos and details
const teamMembers = {
    board: [
        {
            name: 'Board of Directors',
            title: 'Governance & Strategic Oversight',
            department: 'Executive Board',
            bio: 'Experienced professionals providing strategic guidance and governance.',
        },
    ],
    executive: [
        {
            name: 'Chief Executive Officer',
            title: 'CEO',
            department: 'Executive Leadership',
            bio: 'Leading WEN with vision, innovation, and commitment to excellence.',
        },
    ],
    directors: [
        {
            name: 'Director of Education Services',
            title: 'Director',
            department: 'Education',
            bio: 'Overseeing research, academic support, and skills development programs.',
        },
        {
            name: 'Director of Tax & Finance',
            title: 'Director',
            department: 'Tax Consultancy',
            bio: 'Managing tax compliance, accounting, and financial advisory services.',
        },
        {
            name: 'Director of Supply Chain',
            title: 'Director',
            department: 'General Supply',
            bio: 'Coordinating procurement and supply chain operations.',
        },
        {
            name: 'Director of Construction',
            title: 'Director',
            department: 'Construction & Real Estate',
            bio: 'Leading construction projects and real estate development.',
        },
    ],
};

export default function Team() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="section-lg bg-gradient-to-br from-primary-50 via-slate-50 to-accent-50/30">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                                Meet Our <span className="gradient-text">Team</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Experienced professionals dedicated to delivering excellence across all our service areas.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Board of Directors */}
            <section className="section bg-white">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 text-center">
                            Board of Directors
                        </h2>
                    </ScrollReveal>
                    <div className="max-w-md mx-auto">
                        {teamMembers.board.map((member, index) => (
                            <ScrollReveal key={member.name} delay={index * 0.1}>
                                <TeamMemberCard {...member} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CEO */}
            <section className="section bg-gradient-to-br from-slate-50 to-primary-50/20">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 text-center">
                            Executive Leadership
                        </h2>
                    </ScrollReveal>
                    <div className="max-w-md mx-auto">
                        {teamMembers.executive.map((member, index) => (
                            <ScrollReveal key={member.name} delay={index * 0.1}>
                                <TeamMemberCard {...member} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Directors */}
            <section className="section bg-white">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 text-center">
                            Department Directors
                        </h2>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.directors.map((member, index) => (
                            <ScrollReveal key={member.name} delay={index * 0.1} direction="up">
                                <TeamMemberCard {...member} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Note Section */}
            <section className="section bg-slate-900 text-white">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="max-w-2xl mx-auto text-center">
                            <p className="text-slate-300 italic">
                                Our team includes certified professionals, consultants, and support personnel
                                committed to delivering exceptional service quality across all areas.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
