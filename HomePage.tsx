import React from 'react';
import Hero from '../components/Hero';
import NeedSection from '../components/NeedSection';
import WhyUsSection from '../components/WhyUsSection';
import OfferingsSection from '../components/OfferingsSection';
import KeyRolesSection from '../components/KeyRolesSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  React.useEffect(() => {
    document.title = ' TWINC | Home';
  }, []);

  return (
    <>
      <Hero />
      <NeedSection />
      <WhyUsSection />
      <OfferingsSection />
      <KeyRolesSection />
      <CTASection />
    </>
  );
};

export default HomePage