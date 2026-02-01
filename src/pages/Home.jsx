import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Target, TrendingUp, Users, Award, ChevronRight, Star, 
  Building2, UtensilsCrossed, GraduationCap, Sparkles, Scissors, Hammer
} from 'lucide-react';
import clientsData from '../data/clients.json';

const Home = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Target, title: t('services.paid_traffic.title'), desc: t('services.paid_traffic.description'), link: '/servicos#trafego-pago' },
    { icon: TrendingUp, title: t('services.social_media.title'), desc: t('services.social_media.description'), link: '/servicos#social-media' },
    { icon: Users, title: t('services.content.title'), desc: t('services.content.description'), link: '/servicos#conteudo' },
  ];

  const niches = [
    { icon: Building2, title: t('niches.real_estate.title'), desc: t('niches.real_estate.description'), link: '/marketing-imobiliario-lisboa', color: 'blue' },
    { icon: UtensilsCrossed, title: t('niches.restaurants.title'), desc: t('niches.restaurants.description'), link: '/marketing-restaurantes-lisboa', color: 'orange' },
    { icon: GraduationCap, title: t('niches.schools.title'), desc: t('niches.schools.description'), link: '/marketing-escolas-portugal', color: 'green' },
    { icon: Sparkles, title: t('niches.aesthetics.title'), desc: t('niches.aesthetics.description'), link: '/marketing-estetica-lisboa', color: 'pink' },
    { icon: Scissors, title: t('niches.barbershops.title'), desc: t('niches.barbershops.description'), link: '/marketing-barbearias-lisboa', color: 'purple' },
    { icon: Hammer, title: t('niches.construction.title'), desc: t('niches.construction.description'), link: '/marketing-construcao-lisboa', color: 'yellow' },
  ];

  const testimonials = [
    { name: 'João Silva', company: 'PataBrava', text: 'Aumentámos as leads qualificadas em 340% nos primeiros 60 dias. A equipa é muito profissional e transparente.', rating: 5 },
    { name: 'Maria Costa', company: 'Latina Grill', text: 'Passámos de 15 para 45 reservas por semana. O investimento compensou logo no primeiro mês.', rating: 5 },
    { name: 'Pedro Lopes', company: 'OT Remodelações', text: 'Recebemos 8-12 pedidos de orçamento qualificados por mês. ROI muito positivo.', rating: 5 },
  ];

  const faqs = [
    { q: 'Quanto tempo até ver resultados?', a: 'Dados iniciais aparecem em 7-14 dias. Optimização sólida em 30-45 dias. Resultados consistentes em 60-90 dias.' },
    { q: 'Qual é o investimento mínimo em anúncios?', a: 'Recomendamos mínimo de 300€/mês para começar a ter dados relevantes. Para campanhas mais agressivas, 500-1000€/mês.' },
    { q: 'Trabalham com qual tipo de negócio?', a: 'Focamos em negócios locais: imobiliárias, restaurantes, escolas, estética, barbearias, construção e serviços.' },
    { q: 'O que está incluído nos relatórios?', a: 'KPIs de campanha, custos, leads gerados, análise de público, recomendações de optimização e próximos passos.' },
  ];

  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Services Section */}
      <section className="section-container py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-gradient">{t('home.services_section.title')}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t('home.services_section.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-tech group hover:scale-105 transition-all">
                <service.icon className="w-12 h-12 text-orange-primary mb-4" />
                <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.desc}</p>
                <Link to={service.link} className="text-orange-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
                  {t('common.learn_more')} <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos" className="btn-primary">{t('home.services_section.view_all')}</Link>
          </div>
        </motion.div>
      </section>

      {/* Niches Section */}
      <section className="section-container py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{t('home.niches_section.title')}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t('home.niches_section.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {niches.map((niche, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={niche.link} className="card-tech block group hover:border-orange-primary transition-all">
                  <niche.icon className="w-10 h-10 text-orange-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-display font-bold mb-2">{niche.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{niche.desc}</p>
                  <span className="text-orange-primary text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t('home.niches_section.view_strategies')} <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="section-container py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">{t('home.social_proof.title')}</h2>
            <p className="text-gray-400">{t('home.social_proof.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {clientsData.clients.slice(0, 12).map((client) => (
              <div key={client.id} className="card-tech flex items-center justify-center p-6 hover:border-orange-primary/50 transition-all">
                <span className="text-gray-300 font-medium text-center text-sm">{client.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/resultados" className="btn-secondary">{t('home.social_proof.view_cases')}</Link>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="section-container py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">{t('home.testimonials_section.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-tech">
                <div className="flex gap-1 mb-4">
                  {[...Array(test.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-orange-primary text-orange-primary" />)}
                </div>
                <p className="text-gray-300 mb-4 italic">"{test.text}"</p>
                <div>
                  <p className="font-bold">{test.name}</p>
                  <p className="text-sm text-gray-400">{test.company}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/depoimentos" className="btn-secondary">{t('home.testimonials_section.view_more')}</Link>
          </div>
        </motion.div>
      </section>

      {/* Plans Preview */}
      <section className="section-container py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">{t('home.plans_section.title')}</h2>
            <p className="text-xl text-gray-400">{t('home.plans_section.subtitle')}</p>
          </div>

          <div className="text-center">
            <Link to="/planos" className="btn-primary text-lg">{t('home.plans_section.view_pricing')}</Link>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-container py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">{t('home.faq.title')}</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-tech">
                <h3 className="text-lg font-bold text-orange-primary mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="section-container py-20">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="card-tech text-center p-12 bg-gradient-to-br from-dark-card to-dark-surface border-orange-primary">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{t('home.final_cta.title')}</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('home.final_cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="btn-primary text-lg">{t('home.final_cta.cta_primary')}</Link>
            <a href="https://wa.me/351934071660" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg">
              {t('home.final_cta.cta_secondary')}
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
