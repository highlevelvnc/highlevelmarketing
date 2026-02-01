import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: t('nav.about'), path: '/sobre' },
      { label: t('nav.services'), path: '/servicos' },
      { label: t('nav.plans'), path: '/planos' },
      { label: t('nav.results'), path: '/resultados' },
    ],
    resources: [
      { label: t('nav.blog'), path: '/blog' },
      { label: t('nav.testimonials'), path: '/depoimentos' },
      { label: 'FAQ', path: '/#faq' },
      { label: t('nav.contact'), path: '/contacto' },
    ],
    niches: [
      { label: 'Imobiliárias', path: '/marketing-imobiliario-lisboa' },
      { label: 'Restaurantes', path: '/marketing-restaurantes-lisboa' },
      { label: 'Escolas', path: '/marketing-escolas-portugal' },
      { label: 'Estética', path: '/marketing-estetica-lisboa' },
      { label: 'Barbearias', path: '/marketing-barbearias-lisboa' },
      { label: 'Construção', path: '/marketing-construcao-lisboa' },
    ],
  };

  return (
    <footer className="bg-dark-card border-t border-gray-800 mt-20">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-display font-bold">
                <span className="text-white">High</span>
                <span className="text-gradient">Level</span>
                <span className="text-white">MKT</span>
              </h3>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
            <div className="space-y-3">
              <a
                href="mailto:vinicius.highlevelmkt@gmail.com"
                className="flex items-center text-gray-400 hover:text-orange-primary transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                vinicius.highlevelmkt@gmail.com
              </a>
              <a
                href="tel:+351934071660"
                className="flex items-center text-gray-400 hover:text-orange-primary transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +351 934 071 660
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span>Lisboa, Cascais, Oeiras<br />Portugal</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Niches */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.niches_title')}</h4>
            <ul className="space-y-2">
              {footerLinks.niches.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} HighLevelMKT. {t('footer.copyright')}
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
