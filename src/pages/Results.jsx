import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Users, Globe, Briefcase, Star, TrendingUp, Building2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  clientsData, 
  getTotalClients, 
  getTotalCountries, 
  getTotalProjects,
  getCountryCounts,
  getCategoryCounts,
  getClientsByCountry,
  searchClients 
} from '../data/clientsPortfolio';

const Results = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Todos');

  const countries = ['Todos', 'Brasil', 'Portugal', 'Estados Unidos'];
  
  // KPIs
  const totalClients = getTotalClients();
  const totalCountries = getTotalCountries();
  const totalProjects = getTotalProjects();
  
  // Filtered clients
  const filteredClients = useMemo(() => {
    let clients = getClientsByCountry(selectedCountry);
    if (searchTerm) {
      clients = searchClients(searchTerm).filter(c => 
        selectedCountry === 'Todos' || c.country === selectedCountry
      );
    }
    return clients;
  }, [searchTerm, selectedCountry]);

  // Data for charts
  const countryCounts = getCountryCounts();
  const categoryCounts = getCategoryCounts();
  
  // Calculate percentages for country distribution
  const countryPercentages = {
    'Brasil': Math.round((countryCounts['Brasil'] / totalClients) * 100),
    'Portugal': Math.round((countryCounts['Portugal'] / totalClients) * 100),
    'Estados Unidos': Math.round((countryCounts['Estados Unidos'] / totalClients) * 100)
  };

  // Get top categories
  const topCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const kpis = [
    { 
      icon: Users, 
      value: totalClients, 
      label: 'Clientes Atendidos', 
      color: 'text-orange-primary',
      bgColor: 'bg-orange-primary/10'
    },
    { 
      icon: Globe, 
      value: totalCountries, 
      label: 'Países', 
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    { 
      icon: Briefcase, 
      value: totalProjects, 
      label: 'Projetos Entregues', 
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    { 
      icon: Star, 
      value: '4.9/5', 
      label: 'Satisfação', 
      sublabel: 'baseada em feedbacks internos',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    }
  ];

  const getCountryFlag = (country) => {
    const flags = {
      'Brasil': '🇧🇷',
      'Portugal': '🇵🇹',
      'Estados Unidos': '🇺🇸'
    };
    return flags[country] || '🌍';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Imobiliária': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Saúde/Vet': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Educação': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Automotivo': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Lazer/Turismo': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'Construção': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Música/Gravadoras': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      'Restaurante/Alimentação': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'E-commerce/Moda': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      'Serviços': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      'Fitness/Bem-estar': 'bg-teal-500/20 text-teal-400 border-teal-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="section-container text-center mb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">{t('results.title')}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            {t('results.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Clientes Atendidos Section */}
      <section className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Clientes Atendidos</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Algumas marcas e negócios que já confiaram no nosso trabalho
            </p>
          </div>

          {/* KPIs Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {kpis.map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-tech text-center group hover:scale-105 transition-transform"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${kpi.bgColor} flex items-center justify-center`}>
                  <kpi.icon className={`w-8 h-8 ${kpi.color}`} />
                </div>
                <div className={`text-4xl font-display font-bold mb-2 ${kpi.color}`}>
                  {kpi.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">{kpi.label}</div>
                {kpi.sublabel && (
                  <div className="text-xs text-gray-600 mt-1">{kpi.sublabel}</div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Country Distribution - Donut Chart (CSS) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-tech"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-orange-primary" />
                Distribuição por País
              </h3>
              
              {/* Simple Donut Chart with CSS */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#1a1a1a" strokeWidth="20" />
                    
                    {/* Brasil segment */}
                    <circle 
                      cx="50" cy="50" r="40" 
                      fill="none" 
                      stroke="#22c55e" 
                      strokeWidth="20"
                      strokeDasharray={`${countryPercentages['Brasil'] * 2.51} 251`}
                      className="transition-all duration-500"
                    />
                    
                    {/* Portugal segment */}
                    <circle 
                      cx="50" cy="50" r="40" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="20"
                      strokeDasharray={`${countryPercentages['Portugal'] * 2.51} 251`}
                      strokeDashoffset={`-${countryPercentages['Brasil'] * 2.51}`}
                      className="transition-all duration-500"
                    />
                    
                    {/* Estados Unidos segment */}
                    <circle 
                      cx="50" cy="50" r="40" 
                      fill="none" 
                      stroke="#f59e0b" 
                      strokeWidth="20"
                      strokeDasharray={`${countryPercentages['Estados Unidos'] * 2.51} 251`}
                      strokeDashoffset={`-${(countryPercentages['Brasil'] + countryPercentages['Portugal']) * 2.51}`}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-primary">{totalClients}</div>
                      <div className="text-xs text-gray-500">clientes</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-300">🇧🇷 Brasil</span>
                  </div>
                  <span className="text-gray-400 font-semibold">
                    {countryCounts['Brasil']} ({countryPercentages['Brasil']}%)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-gray-300">🇵🇹 Portugal</span>
                  </div>
                  <span className="text-gray-400 font-semibold">
                    {countryCounts['Portugal']} ({countryPercentages['Portugal']}%)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-gray-300">🇺🇸 EUA</span>
                  </div>
                  <span className="text-gray-400 font-semibold">
                    {countryCounts['Estados Unidos']} ({countryPercentages['Estados Unidos']}%)
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Category Distribution - Bar Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-tech"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-orange-primary" />
                Distribuição por Segmento
              </h3>
              
              <div className="space-y-4">
                {topCategories.map(([category, count], i) => {
                  const percentage = Math.round((count / totalClients) * 100);
                  return (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-300">{category}</span>
                        <span className="text-sm text-gray-400 font-semibold">
                          {count} ({percentage}%)
                        </span>
                      </div>
                      <div className="h-2 bg-dark-surface rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-gradient-to-r from-orange-primary to-orange-hover rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar cliente por nome, categoria ou país..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-dark-card border border-gray-800 rounded-xl focus:border-orange-primary outline-none transition-colors text-white placeholder-gray-500"
              />
            </div>

            {/* Country Filters */}
            <div className="flex flex-wrap gap-3">
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCountry === country
                      ? 'bg-orange-primary text-white shadow-lg shadow-orange-glow'
                      : 'bg-dark-card border border-gray-800 text-gray-400 hover:border-orange-primary hover:text-orange-primary'
                  }`}
                >
                  {country !== 'Todos' && getCountryFlag(country)} {country}
                  {country !== 'Todos' && (
                    <span className="ml-2 text-xs opacity-70">
                      ({countryCounts[country] || 0})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Clients Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {filteredClients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.02, 0.3) }}
                className="card-tech group hover:border-orange-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-white group-hover:text-orange-primary transition-colors line-clamp-2">
                    {client.name}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-dark-surface text-gray-300 text-xs rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {getCountryFlag(client.country)} {client.country}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryColor(client.category)}`}>
                    {client.category}
                  </span>
                </div>

                {client.tags && (
                  <div className="flex flex-wrap gap-1">
                    {client.tags.slice(0, 2).map((tag, j) => (
                      <span key={j} className="px-2 py-0.5 bg-dark-bg text-gray-500 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredClients.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">Nenhum cliente encontrado com os filtros selecionados.</p>
            </div>
          )}

          {/* Footer Text */}
          <div className="text-center mb-12">
            <p className="text-gray-400 text-lg italic">
              E muito mais — projetos sob demanda e parcerias contínuas.
            </p>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card-tech text-center p-12 bg-gradient-to-br from-dark-card to-dark-surface border-orange-primary"
          >
            <TrendingUp className="w-16 h-16 text-orange-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Quer Fazer Parte desta Lista?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Entre em contacto e descubra como podemos ajudar o seu negócio a crescer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/351934071660?text=Olá! Vi a página de resultados e quero saber mais sobre os serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Falar no WhatsApp
              </a>
              <Link to="/planos" className="btn-secondary text-lg">
                Ver Portfólio Completo
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Results;
