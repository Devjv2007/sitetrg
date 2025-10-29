import { Hero } from '../components/hero';
import { TRGSection } from '../components/trgsection';
import { ServicesSection } from '../components/ServicesSection'; 
import { AboutSection } from '../components/AboutSection'; 
import { ContactSection } from '../components/ContactSection';
import { Header } from '../components/Header';

export const Home = () => {
  return (
    <div className="relative bg-[#F6F2E9]">
      <Header />
      <Hero />
      <TRGSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};
