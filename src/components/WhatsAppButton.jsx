import { MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const WhatsAppButton = ({ message = 'Olá! Quero saber mais sobre os serviços da HighLevelMKT.' }) => {
  const whatsappNumber = '351934071660'; // ✅ sem "+" (wa.me prefere só números)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // ✅ Evita animação de entrada (melhora CLS/LCP em mobile)
      initial={false}
      animate={reduceMotion ? undefined : { opacity: 1 }}
      whileHover={reduceMotion ? undefined : { scale: 1.06 }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
      style={{ width: 56, height: 56 }} // ✅ reserva tamanho fixo (evita qualquer variação)
    >
      {/* ✅ Ícone sempre acima de qualquer efeito */}
      <MessageCircle className="w-7 h-7 relative z-10" />

      {/* ✅ Pulse mais leve e sem animate-ping (evita “pintura gigante” no mobile) */}
      {!reduceMotion && (
        <span
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            transform: 'scale(1.15)',
            animation: 'whatsPulse 1.8s ease-out infinite',
          }}
          aria-hidden="true"
        />
      )}

      {/* Tooltip (só desktop / hover) */}
      <span className="hidden md:block absolute right-full mr-3 px-3 py-2 bg-dark-card text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
        Falar no WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
