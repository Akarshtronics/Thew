import React from 'react';
import Hero from './Hero';
import NeedSection from './NeedSection';
import WhyUsSection from './WhyUsSection';
import OfferingsSection from './OfferingsSection';
import KeyRolesSection from './KeyRolesSection';
import CTASection from './CTASection';

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