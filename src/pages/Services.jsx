import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Users, FileText, Palette, Globe, Search, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'trafego-pago',
      icon: Target,
      title: t('services.paid_traffic.title'),
      description: t('services.paid_traffic.description'),
      forWho: t('services.paid_traffic.for_who'),
      deliverables: t('services.paid_traffic.deliverables', { returnObjects: true }),
    },
    {
      id: 'social-media',
      icon: Users,
      title: t('services.social_media.title'),
      description: t('services.social_media.description'),
      forWho: t('services.social_media.for_who'),
      deliverables: t('services.social_media.deliverables', { returnObjects: true }),
    },
    {
      id: 'conteudo',
      icon: FileText,
      title: t('services.content.title'),
      description: t('services.content.description'),
      forWho: t('services.content.for_who'),
      deliverables: t('services.content.deliverables', { returnObjects: true }),
    },
    {
      id: 'criativos',
      icon: Palette,
      title: t('services.creatives.title'),
      description: t('services.creatives.description'),
      forWho: t('services.creatives.for_who'),
      deliverables: t('services.creatives.deliverables', { returnObjects: true }),
    },
    {
      id: 'websites',
      icon: Globe,
      title: t('services.websites.title'),
      description: t('services.websites.description'),
      forWho: t('services.websites.for_who'),
      deliverables: t('services.websites.deliverables', { returnObjects: true }),
    },
    {
      id: 'seo',
      icon: Search,
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      forWho: t('services.seo.for_who'),
      deliverables: t('services.seo.deliverables', { returnObjects: true }),
    },
    {
      id: 'automacao',
      icon: Zap,
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      forWho: t('services.automation.for_who'),
      deliverables: t('services.automation.deliverables', { returnObjects: true }),
    },
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="section-container mb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">{t('services.title')}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">{t('services.subtitle')}</p>
          <Link to="/contacto" className="btn-primary">{t('common.cta_primary')}</Link>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <div className="space-y-16">
          {services.map((service, i) => (
            <motion.div key={service.id} id={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-tech">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <service.icon className="w-16 h-16 text-orange-primary mb-4" />
                  <h2 className="text-3xl font-display font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="bg-dark-surface p-4 rounded-lg mb-6">
                    <h3 className="font-bold text-orange-primary mb-2">Para quem:</h3>
                    <p className="text-gray-300">{service.forWho}</p>
                  </div>
                  <Link to="/contacto" className="btn-secondary">
                    Pedir Proposta <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Entregáveis:</h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-orange-primary mt-1">✓</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container mt-20">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="card-tech text-center p-12 border-orange-primary">
          <h2 className="text-3xl font-display font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-gray-400 mb-8">Escolha o seu plano ou fale connosco para uma solução personalizada.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/planos" className="btn-primary">Ver Planos</Link>
            <Link to="/contacto" className="btn-secondary">Falar com Especialista</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
