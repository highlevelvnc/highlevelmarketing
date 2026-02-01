import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Check, TrendingUp, Target, Award, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import clientsData from '../data/clients.json';

const nicheData = {
  real_estate: {
    title: 'Marketing Digital para Imobiliárias em Lisboa',
    hero: 'Gere Leads Qualificados para Compra, Venda e Arrendamento',
    pain: 'Está a gastar em anúncios mas não recebe leads qualificados? O telefone não toca?',
    promises: [
      'Leads qualificados de compradores e arrendatários reais',
      'Campanhas optimizadas para Lisboa, Cascais e Oeiras',
      'CPL entre 10-30€ (faixa típica do mercado)'
    ],
    kpis: { cpl: '10-30€', conversion: '8-12%', timeline: '14-30 dias para dados sólidos' },
    strategy: [
      'Meta Ads segmentados por localização e perfil de comprador',
      'Google Ads para pesquisas de intenção (ex: "apartamento lisboa")',
      'Landing pages optimizadas para conversão',
      'Remarketing para visitantes que não converteram'
    ],
    deliverables: ['Setup completo de campanhas', 'Criativos testados', 'Landing page dedicada', 'Integração WhatsApp', 'Relatórios semanais'],
    clients: clientsData.clients.filter(c => c.niche === 'real_estate'),
    whatsappMsg: 'Olá! Quero uma proposta para geração de leads imobiliários em Lisboa.',
    seo: { title: 'Marketing Digital Imobiliário Lisboa | Geração de Leads', keywords: 'marketing imobiliário lisboa, leads imobiliárias, tráfego pago imobiliário' }
  },
  restaurant: {
    title: 'Marketing Digital para Restaurantes em Lisboa',
    hero: 'Encha o Seu Restaurante com Reservas Todos os Dias',
    pain: 'Mesas vazias? Depende só de clientes de passagem?',
    promises: [
      'Aumento de reservas diretas (sem comissões)',
      'Presença digital forte em Lisboa/Cascais',
      'CPL entre 2-7€ por reserva'
    ],
    kpis: { cpl: '2-7€', conversion: '10-15%', timeline: '7-14 dias' },
    strategy: [
      'Meta Ads com vídeos e fotos dos pratos',
      'Google My Business optimizado',
      'Social media com engagement',
      'Promoções estratégicas para dias fracos'
    ],
    deliverables: ['Campanhas Meta e Google', 'Gestão redes sociais', 'Fotos profissionais', 'Sistema de reservas', 'Relatórios semanais'],
    clients: clientsData.clients.filter(c => c.niche === 'restaurant'),
    whatsappMsg: 'Olá! Quero aumentar reservas no meu restaurante em Lisboa.',
    seo: { title: 'Marketing para Restaurantes Lisboa | Mais Reservas', keywords: 'marketing restaurantes lisboa, aumentar reservas, tráfego pago restauração' }
  },
  education: {
    title: 'Marketing Digital para Escolas e Cursos em Portugal',
    hero: 'Capte Mais Pedidos de Matrícula e Informação',
    pain: 'Poucas inscrições? Concorrência forte?',
    promises: [
      'Leads de pais interessados em matrículas',
      'Campanhas para todo Portugal',
      'CPL entre 8-25€'
    ],
    kpis: { cpl: '8-25€', conversion: '12-18%', timeline: '14-21 dias' },
    strategy: [
      'Meta Ads segmentados por idade dos filhos',
      'Google Ads para pesquisas educacionais',
      'Landing pages com info completa',
      'Remarketing para decisores'
    ],
    deliverables: ['Campanhas completas', 'Landing pages', 'Criativos educacionais', 'CRM básico', 'Follow-up automático'],
    clients: clientsData.clients.filter(c => c.niche === 'education'),
    whatsappMsg: 'Olá! Quero captar pedidos de matrícula em Portugal.',
    seo: { title: 'Marketing para Escolas Portugal | Captação de Alunos', keywords: 'marketing escolas portugal, captação alunos, leads educação' }
  },
  aesthetics: {
    title: 'Marketing Digital para Clínicas de Estética em Lisboa',
    hero: 'Gere Marcações para a Sua Clínica ou Spa',
    pain: 'Agenda com espaços vazios? Dificuldade em reter clientes?',
    promises: [
      'Marcações qualificadas de novos clientes',
      'Fidelização através de campanhas',
      'CPL entre 6-20€'
    ],
    kpis: { cpl: '6-20€', conversion: '10-15%', timeline: '7-14 dias' },
    strategy: [
      'Meta Ads com antes/depois',
      'Google Ads para tratamentos específicos',
      'Promoções sazonais',
      'Programa de fidelização'
    ],
    deliverables: ['Campanhas Meta e Google', 'Criativos visuais', 'Sistema de marcações', 'Email marketing', 'Relatórios'],
    clients: clientsData.clients.filter(c => c.niche === 'aesthetics'),
    whatsappMsg: 'Olá! Quero gerar marcações para a minha clínica em Lisboa.',
    seo: { title: 'Marketing para Clínicas Estética Lisboa | Mais Clientes', keywords: 'marketing estética lisboa, clínica beleza, leads spa' }
  },
  barbershop: {
    title: 'Marketing Digital para Barbearias em Lisboa',
    hero: 'Mantenha a Agenda Cheia Todos os Dias',
    pain: 'Horários vazios? Depende de clientes habituais?',
    promises: [
      'Novos clientes todas as semanas',
      'Sistema de agendamento online',
      'CPL entre 2-6€'
    ],
    kpis: { cpl: '2-6€', conversion: '15-20%', timeline: '7 dias' },
    strategy: [
      'Meta Ads com fotos de cortes',
      'Google My Business',
      'Instagram para portfolio',
      'Promoções para novos clientes'
    ],
    deliverables: ['Campanhas locais', 'Gestão Instagram', 'Sistema agendamento', 'Fotos profissionais', 'Relatórios'],
    clients: clientsData.clients.filter(c => c.niche === 'barbershop'),
    whatsappMsg: 'Olá! Quero encher a agenda na minha barbearia.',
    seo: { title: 'Marketing para Barbearias Lisboa | Agenda Cheia', keywords: 'marketing barbearias lisboa, clientes barbearia, tráfego pago' }
  },
  construction: {
    title: 'Marketing Digital para Construção e Remodelação em Lisboa',
    hero: 'Receba Pedidos de Orçamento Qualificados',
    pain: 'Poucos pedidos? Orçamentos de baixa qualidade?',
    promises: [
      'Leads de projetos reais de remodelação',
      'Orçamentos de alto valor',
      'CPL entre 12-40€'
    ],
    kpis: { cpl: '12-40€', conversion: '5-10%', timeline: '21-30 dias' },
    strategy: [
      'Google Ads para pesquisas locais',
      'Meta Ads com portfolio',
      'Landing pages por serviço',
      'Follow-up estruturado'
    ],
    deliverables: ['Campanhas Google', 'Landing pages', 'Portfolio digital', 'CRM', 'Relatórios mensais'],
    clients: clientsData.clients.filter(c => c.niche === 'construction'),
    whatsappMsg: 'Olá! Quero pedidos de orçamento para remodelações em Lisboa.',
    seo: { title: 'Marketing Construção Lisboa | Pedidos de Orçamento', keywords: 'marketing construção lisboa, leads remodelação, tráfego pago obras' }
  }
};

const NicheLanding = ({ niche }) => {
  const data = nicheData[niche];
  
  useEffect(() => {
    document.title = data.seo.title + ' | HighLevelMKT';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = data.hero;
  }, [data]);

  const whatsappUrl = `https://wa.me/351934071660?text=${encodeURIComponent(data.whatsappMsg)}`;

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="section-container mb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">{data.hero}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-4">{data.title}</p>
          <p className="text-lg text-orange-primary font-semibold mb-8">{data.pain}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <Link to="/contacto" className="btn-secondary text-lg">Pedir Proposta</Link>
          </div>
        </motion.div>
      </section>

      {/* Promises */}
      <section className="section-container mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {data.promises.map((promise, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-tech text-center">
              <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <p className="text-gray-300">{promise}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* KPIs */}
      <section className="section-container mb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-tech">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Resultados Típicos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-orange-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">{data.kpis.cpl}</div>
              <p className="text-gray-400">Custo por Lead</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">{data.kpis.conversion}</div>
              <p className="text-gray-400">Taxa de Conversão</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">{data.kpis.timeline}</div>
              <p className="text-gray-400">Para Resultados</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Strategy */}
      <section className="section-container mb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-display font-bold mb-8 text-center">A Nossa Estratégia</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-tech">
              <h3 className="text-xl font-bold mb-4">Como Fazemos</h3>
              <ul className="space-y-3">
                {data.strategy.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-tech">
              <h3 className="text-xl font-bold mb-4">O Que Recebe</h3>
              <ul className="space-y-3">
                {data.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Social Proof */}
      {data.clients.length > 0 && (
        <section className="section-container mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Clientes do Sector</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.clients.map(client => (
                <div key={client.id} className="card-tech text-center p-6">
                  <p className="text-gray-300 font-medium">{client.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* CTA Final */}
      <section className="section-container">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="card-tech text-center p-12 border-orange-primary">
          <h2 className="text-4xl font-display font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-xl text-gray-400 mb-8">Fale connosco hoje e receba uma proposta personalizada</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <Link to="/planos" className="btn-secondary text-lg">Ver Planos</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default NicheLanding;
