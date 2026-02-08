import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// Page loader (fallback do Suspense)
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="loading-pulse text-orange-primary text-2xl font-display">Carregando...</div>
  </div>
);

/**
 * Mostra um overlay de loading SEM bloquear o render inicial (não mata LCP).
 * - Na Home ("/") a gente NÃO mostra overlay pra SEO/performance.
 * - Em páginas internas, pode mostrar se quiser.
 */
function LoadingOverlay({ enabled, onClose }) {
  if (!enabled) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      <LoadingScreen onLoadingComplete={onClose} />
    </div>
  );
}

function AppShell() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Overlay opcional (não bloqueia o render)
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // ✅ Importante: NÃO mostrar loader na Home (melhora LCP)
    if (isHome) {
      setShowOverlay(false);
      return;
    }

    // Em rotas internas, você pode manter uma “sensação premium”
    // e ainda assim não ferrar o LCP da Home.
    // Se não quiser em internas também, basta comentar as 2 linhas abaixo.
    setShowOverlay(true);
  }, [isHome, location.pathname]);

  return (
    <div className="relative min-h-screen bg-dark-bg text-white">
      <ParticleBackground />
      <Header />

      <main className="relative z-10">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
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

      {/* Overlay só em páginas internas (e não bloqueia o render da Home) */}
      <LoadingOverlay enabled={showOverlay} onClose={() => setShowOverlay(false)} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
