import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="section-container text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-display font-bold mb-6"><span className="text-gradient">Depoimentos</span></h1>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">O que os nossos clientes dizem</p>
          <div className="card-tech p-12">
            <p className="text-gray-400">Conteúdo em desenvolvimento.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Testimonials;
