import Hero from './sections/Hero';
import ServicesOverview from './sections/ServicesOverview';
import WhyChooseWEN from './sections/WhyChooseWEN';
import ContactCTA from './sections/ContactCTA';
import PageTransition from '../../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <ServicesOverview />
      <WhyChooseWEN />
      <ContactCTA />
    </PageTransition>
  );
}

