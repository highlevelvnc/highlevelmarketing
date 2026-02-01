import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, Tag } from 'lucide-react';
import blogData from '../data/blog.json';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20">
      <section className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-display font-bold mb-6 text-center">
            <span className="text-gradient">{t('blog.title')}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
          
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {blogData.categories.slice(0, 8).map((category, i) => (
              <button
                key={i}
                className="px-4 py-2 bg-dark-card border border-gray-800 rounded-full text-sm hover:border-orange-primary hover:text-orange-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.articles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="card-tech block group hover:scale-105 transition-all h-full"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-orange-primary/20 via-dark-surface to-dark-card rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 bg-orange-primary text-white text-xs font-bold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('pt-PT')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>

                  {/* Read More */}
                  <span className="text-orange-primary text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    {t('blog.read_article')} →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* SEO Keywords Section */}
          <div className="mt-20 card-tech p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Tópicos Populares</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'Marketing Digital Lisboa',
                'Tráfego Pago Portugal',
                'Meta Ads',
                'Google Ads',
                'SEO Local',
                'Geração de Leads',
                'Marketing para Restaurantes',
                'Marketing Imobiliário',
                'Instagram para Empresas',
                'ROI Marketing',
                'Landing Pages',
                'WhatsApp Business',
                'Email Marketing',
                'Remarketing',
                'Google My Business'
              ].map((keyword, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-dark-surface text-gray-400 text-sm rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
