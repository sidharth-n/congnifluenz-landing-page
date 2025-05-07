import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductShowcase from '../components/home/ProductShowcase';
import TechnologySection from '../components/home/TechnologySection';
import UseCases from '../components/home/UseCases';
import TeamSection from '../components/home/TeamSection';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Cognifluenz | Intelligent algorithms to solve deep problems';
  }, []);
  
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <TechnologySection />
      <UseCases />
      <TeamSection />
      <ContactSection />
    </>
  );
};

export default HomePage;