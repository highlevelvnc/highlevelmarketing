import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: 'Lisboa',
    niche: 'Imobiliária',
    goal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Olá! Preenchi o formulário de contacto:
    
Nome: ${formData.name}
Empresa: ${formData.company || 'Não informado'}
Email: ${formData.email}
WhatsApp: ${formData.phone}
Cidade: ${formData.city}
Nicho: ${formData.niche}
Objectivo: ${formData.goal}

Aguardo retorno!`;

    const whatsappUrl = `https://wa.me/351934071660?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert('Obrigado! Redirecionando para WhatsApp...');
  };

  return (
    <div className="pt-32 pb-20">
      <section className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-display font-bold mb-6">
              <span className="text-gradient">{t('contact.title')}</span>
            </h1>
            <p className="text-xl text-gray-400">{t('contact.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-tech">
              <h2 className="text-2xl font-bold mb-6">Enviar Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-surface border border-gray-800 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors text-white"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-300">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-surface border border-gray-800 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors text-white"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-surface border border-gray-800 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-surface border border-gray-800 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors text-white"
                      placeholder="+351 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2 text-gray-300">
                    Cidade
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-surface border border-gray-800 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors text-white"
                  >
                    <option value="Lisboa">Lisboa</option>
                    <option value="Cascais">Cascais</option>
                    <option value="Oeiras">Oeiras</option>
                    <option value="Porto">Porto</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="niche" className="block text-sm font-medium mb-2 text-gray-300">
                    Nicho
                  </label>
                  <select
                    id="niche"
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-surface border border-gray-800 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors text-white"
                  >
                    <option value="Imobiliária">Imobiliária</option>
                    <option value="Restaurante">Restaurante</option>
                    <option value="Escola">Escola</option>
                    <option value="Estética">Estética</option>
                    <option value="Barbearia">Barbearia</option>
                    <option value="Construção">Construção</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Comércio">Comércio</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goal" className="block text-sm font-medium mb-2 text-gray-300">
                    Objectivo *
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    required
                    rows="4"
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-surface border border-gray-800 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors text-white resize-none"
                    placeholder="Ex: Gerar leads para imóveis em Lisboa"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-lg py-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar via WhatsApp
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com a mensagem pré-preenchida
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="card-tech mb-6">
                <h3 className="text-xl font-bold mb-6">{t('contact.direct_contacts')}</h3>
                <div className="space-y-5">
                  <a
                    href="mailto:vinicius.highlevelmkt@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-orange-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-primary/10 flex items-center justify-center group-hover:bg-orange-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-orange-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Email</div>
                      <div className="font-medium">vinicius.highlevelmkt@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="tel:+351934071660"
                    className="flex items-center gap-3 text-gray-300 hover:text-orange-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-primary/10 flex items-center justify-center group-hover:bg-orange-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-orange-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Telefone / WhatsApp</div>
                      <div className="font-medium">+351 934 071 660</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/351934071660?text=Olá! Vi o site da HighLevelMKT e quero saber mais."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-orange-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">WhatsApp Direto</div>
                      <div className="font-medium">Iniciar Conversa</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 text-gray-300 pt-4 border-t border-gray-800">
                    <div className="w-12 h-12 rounded-full bg-orange-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orange-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Localização</div>
                      <div className="font-medium">
                        Lisboa, Cascais, Oeiras<br />
                        <span className="text-gray-400 text-sm">Portugal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-tech">
                <h3 className="text-xl font-bold mb-4">{t('contact.schedule')}</h3>
                <div className="space-y-3 text-gray-400">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                    <span>Segunda a Sexta</span>
                    <span className="font-semibold text-orange-primary">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sábado e Domingo</span>
                    <span className="font-semibold text-gray-500">Fechado</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-dark-surface rounded-lg border border-gray-800">
                  <p className="text-sm text-gray-400">
                    <span className="text-orange-primary font-semibold">💡 Dica:</span> Para respostas mais rápidas, 
                    entre em contacto via WhatsApp durante o horário comercial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 card-tech text-center p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Resposta Rápida Garantida</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Respondemos todos os contactos em até 24 horas úteis. Para casos urgentes, 
              utilize o WhatsApp para uma resposta ainda mais rápida.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
