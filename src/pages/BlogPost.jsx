import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import blogData from '../data/blog.json';

const BlogPost = () => {
  const { slug } = useParams();
  const article = blogData.articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-32 pb-20">
        <div className="section-container text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="btn-primary">Voltar ao Blog</Link>
        </div>
      </div>
    );
  }

  const relatedArticles = blogData.articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="pt-32 pb-20">
      <article className="section-container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="px-4 py-2 bg-orange-primary text-white text-sm font-bold rounded-full">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{article.title}</h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-gray-800">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {new Date(article.date).toLocaleDateString('pt-PT', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {article.readTime} de leitura
            </span>
          </div>

          {/* Featured Image */}
          <div className="h-96 bg-gradient-to-br from-orange-primary/20 via-dark-surface to-dark-card rounded-2xl mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
          </div>

          {/* Content */}
          <div className="card-tech p-8 mb-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 mb-6 font-semibold">{article.excerpt}</p>
              
              <p className="text-gray-400 mb-6">{article.content}</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Introdução</h2>
              <p className="text-gray-400 mb-6">
                Este artigo explora em detalhe todos os aspectos de {article.title.toLowerCase()}. 
                Vamos abordar as melhores práticas, estratégias testadas e resultados reais de empresas em Portugal.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Porquê Este Tema é Importante?</h2>
              <p className="text-gray-400 mb-6">
                O mercado português está em constante evolução, e {article.category.toLowerCase()} tornou-se essencial 
                para negócios que querem crescer de forma sustentável.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Estratégias Práticas</h2>
              <ul className="list-none space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-orange-primary mt-1">✓</span>
                  <span className="text-gray-400">Implemente tracking completo desde o início</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-primary mt-1">✓</span>
                  <span className="text-gray-400">Defina KPIs claros e mensuráveis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-primary mt-1">✓</span>
                  <span className="text-gray-400">Teste diferentes abordagens com A/B testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-primary mt-1">✓</span>
                  <span className="text-gray-400">Otimize continuamente baseado em dados</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Resultados Esperados</h2>
              <p className="text-gray-400 mb-6">
                Com a implementação correta destas estratégias, empresas em Portugal têm visto:
              </p>
              <ul className="list-none space-y-2 mb-6">
                <li className="text-gray-400">• Aumento de 150-300% em leads qualificados</li>
                <li className="text-gray-400">• Redução de 30-50% no custo por aquisição</li>
                <li className="text-gray-400">• ROI positivo em 30-60 dias</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusão</h2>
              <p className="text-gray-400 mb-6">
                {article.title} é uma área crucial para o sucesso de negócios em Portugal. 
                Com as estratégias certas e acompanhamento adequado, os resultados aparecem consistentemente.
              </p>

              {/* CTA */}
              <div className="bg-dark-surface p-8 rounded-xl mt-8 border border-orange-primary/30">
                <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda com {article.category}?</h3>
                <p className="text-gray-400 mb-6">
                  A HighLevelMKT é especialista em marketing de performance para negócios locais em Portugal.
                </p>
                <div className="flex gap-4">
                  <Link to="/contacto" className="btn-primary">Falar com Especialista</Link>
                  <Link to="/planos" className="btn-secondary">Ver Planos</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Keywords */}
          <div className="mb-12">
            <h3 className="text-lg font-bold mb-4">Palavras-chave:</h3>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((keyword, i) => (
                <span key={i} className="px-3 py-1 bg-dark-card border border-gray-800 text-gray-400 text-sm rounded-full">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.slug}`}
                    className="card-tech block group hover:scale-105 transition-all"
                  >
                    <div className="h-32 bg-gradient-to-br from-orange-primary/20 to-dark-surface rounded-lg mb-3"></div>
                    <h4 className="font-bold mb-2 group-hover:text-orange-primary transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-sm text-gray-400 line-clamp-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
