import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './i18n';
import './styles/index.css';

import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ParticleBackground from './components/ParticleBackground';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Plans = lazy(() => import('./pages/Plans'));
const Results = lazy(() => import('./pages/Results'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const NicheLanding = lazy(() => import('./pages/NicheLanding'));

// Page loader
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="loading-pulse text-orange-primary text-2xl font-display">Carregando...</div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-dark-bg text-white">
        <ParticleBackground />
        <Header />
        
        <main className="relative z-10">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/planos" element={<Plans />} />
                <Route path="/resultados" element={<Results />} />
                <Route path="/depoimentos" element={<Testimonials />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contacto" element={<Contact />} />
                
                {/* Niche landing pages */}
                <Route path="/marketing-imobiliario-lisboa" element={<NicheLanding niche="real_estate" />} />
                <Route path="/marketing-restaurantes-lisboa" element={<NicheLanding niche="restaurant" />} />
                <Route path="/marketing-escolas-portugal" element={<NicheLanding niche="education" />} />
                <Route path="/marketing-estetica-lisboa" element={<NicheLanding niche="aesthetics" />} />
                <Route path="/marketing-barbearias-lisboa" element={<NicheLanding niche="barbershop" />} />
                <Route path="/marketing-construcao-lisboa" element={<NicheLanding niche="construction" />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
