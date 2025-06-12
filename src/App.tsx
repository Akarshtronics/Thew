import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OfferingsPage from './pages/OfferingsPage';
import ContactPage from './pages/ContactPage';
import OfferingDetailPage from './pages/OfferingDetailPage';
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