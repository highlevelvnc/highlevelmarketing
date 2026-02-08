import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './i18n';
import './styles/index.css';

import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ParticleBackground from './components/ParticleBackground';

// ✅ VOLTA: Home com lazy (reduz bundle inicial -> melhora TBT no mobile)
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

// ✅ Fallback leve (não ocupa tela toda)
const PageLoader = () => (
  <div className="px-6 pt-24 pb-10">
    <div className="h-9 w-3/4 rounded bg-white/10 animate-pulse" />
    <div className="mt-4 h-5 w-2/3 rounded bg-white/10 animate-pulse" />
    <div className="mt-6 h-11 w-40 rounded bg-white/10 animate-pulse" />
  </div>
);

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

  const [showOverlay, setShowOverlay] = useState(false);

  // ✅ Carregar “enfeites” depois (não mexe no LCP e reduz carga inicial)
  const [deferredUI, setDeferredUI] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDeferredUI(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isHome) {
      setShowOverlay(false);
      return;
    }
    setShowOverlay(true);
  }, [isHome, location.pathname]);

  return (
    <div className="relative min-h-screen bg-dark-bg text-white">
      {/* ✅ IMPORTANTE: deve ser fixed/absolute lá dentro para NÃO causar CLS */}
      {deferredUI && <ParticleBackground />}

      <Header />

      <main className="relative z-10">
        <Suspense fallback={<PageLoader />}>
          {/* ✅ Removi AnimatePresence (framer) para reduzir TBT no mobile */}
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

            <Route path="/marketing-imobiliario-lisboa" element={<NicheLanding niche="real_estate" />} />
            <Route path="/marketing-restaurantes-lisboa" element={<NicheLanding niche="restaurant" />} />
            <Route path="/marketing-escolas-portugal" element={<NicheLanding niche="education" />} />
            <Route path="/marketing-estetica-lisboa" element={<NicheLanding niche="aesthetics" />} />
            <Route path="/marketing-barbearias-lisboa" element={<NicheLanding niche="barbershop" />} />
            <Route path="/marketing-construcao-lisboa" element={<NicheLanding niche="construction" />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      {/* ✅ Deve ser FIXED no componente para não dar CLS */}
      {deferredUI && <WhatsAppButton />}

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
