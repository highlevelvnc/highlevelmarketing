import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const steps = [
    { key: 'diagnosis', icon: '1' },
    { key: 'strategy', icon: '2' },
    { key: 'execution', icon: '3' },
    { key: 'optimization', icon: '4' },
    { key: 'reporting', icon: '5' }
  ];

  const values = [
    { key: 'results', icon: Target },
    { key: 'speed', icon: Zap },
    { key: 'transparency', icon: Users },
    { key: 'improvement', icon: Award }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-display font-bold mb-6 text-center">
            <span className="text-gradient">{t('about.title')}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-16">
            {t('about.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t('about.method_title')}</h2>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="card-tech"
                  >
                    <h3 className="font-bold text-orange-primary mb-2">
                      {i + 1}. {t(`about.steps.${step.key}.title`)}
                    </h3>
                    <p className="text-gray-400">{t(`about.steps.${step.key}.description`)}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4">{t('about.values_title')}</h2>
              <div className="space-y-6">
                {values.map((value, i) => {
                  const IconComponent = value.icon;
                  return (
                    <motion.div
                      key={value.key}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="card-tech"
                    >
                      <IconComponent className="w-10 h-10 text-orange-primary mb-3" />
                      <h3 className="font-bold mb-2">{t(`about.values.${value.key}.title`)}</h3>
                      <p className="text-gray-400">{t(`about.values.${value.key}.description`)}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
