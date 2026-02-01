import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import plansData from '../data/plans.json';

const Plans = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="section-container mb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">Planos & Preços</span>
          </h1>
          <p className="text-xl text-gray-400">Escolha o plano ideal para o seu negócio. Sem permanência. Cancele quando quiser.</p>
        </motion.div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plansData.plans.map((plan, i) => (
            <motion.div key={plan.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`card-tech ${plan.recommended ? 'border-orange-primary scale-105' : ''}`}>
              {plan.recommended && (
                <div className="bg-orange-primary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  RECOMENDADO
                </div>
              )}
              <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-orange-primary">{plan.price}{plan.currency}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
              {plan.adBudgetNote && (
                <p className="text-sm text-orange-primary/80 mb-4">{plan.adBudgetNote}</p>
              )}
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.length > 0 && plan.notIncluded.map((item, j) => (
                  <li key={`not-${j}`} className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contacto" state={{ selectedPlan: plan.name }} className={plan.recommended ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}>
                Escolher Plano
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-tech overflow-x-auto">
          <h3 className="text-2xl font-display font-bold mb-6">Comparação Completa</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-2">Funcionalidade</th>
                {plansData.plans.map(plan => (
                  <th key={plan.id} className="text-center py-4 px-2">{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plansData.comparisonTable.map((row, i) => (
                <tr key={i} className="border-b border-gray-800/50">
                  <td className="py-3 px-2 text-gray-300">{row.feature}</td>
                  <td className="py-3 px-2 text-center">
                    {typeof row.basic === 'boolean' ? (
                      row.basic ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      <span className="text-gray-400">{row.basic}</span>
                    )}
                  </td>
                  <td className="py-3 px-2 text-center">
                    {typeof row.growth === 'boolean' ? (
                      row.growth ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      <span className="text-gray-400">{row.growth}</span>
                    )}
                  </td>
                  <td className="py-3 px-2 text-center">
                    {typeof row.complete === 'boolean' ? (
                      row.complete ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      <span className="text-gray-400">{row.complete}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="section-container mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: 'Há permanência?', a: 'Não. Pode cancelar quando quiser sem penalização.' },
              { q: 'A verba de anúncios está incluída?', a: 'Não. Os planos Leads & Movimento e Crescimento Local exigem verba adicional para anúncios (mínimo 300€ e 500€ respectivamente).' },
              { q: 'Posso mudar de plano depois?', a: 'Sim. Pode fazer upgrade ou downgrade a qualquer momento.' },
              { q: 'Como são os pagamentos?', a: 'Mensalidade via transferência bancária ou MB WAY. Pagamento até dia 5 de cada mês.' },
            ].map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-tech">
                <h3 className="font-bold text-orange-primary mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
