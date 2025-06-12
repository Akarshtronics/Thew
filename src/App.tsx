import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import OfferingsPage from '../OfferingsPage';
import ContactPage from '../ContactPage';
import OfferingDetailPage from '../OfferingDetailPage';
import { offerings } from './data/offerings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="offerings" element={<OfferingsPage />} />
        {offerings.map((offering) => (
          <Route 
            key={offering.id} 
            path={`offerings/${offering.slug}`} 
            element={<OfferingDetailPage offeringId={offering.id} />} 
          />
        ))}
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;