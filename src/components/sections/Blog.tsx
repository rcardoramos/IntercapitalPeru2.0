import React from 'react';
import { Container } from '../shared/Container';
import { SectionTitle } from '../shared/SectionTitle';
import { BlogCard } from '../ui/BlogCard';
import { blogArticles } from '../../data/mockData';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const Blog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-100">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-cyan-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <Container>
        {/* Title */}
        <SectionTitle
          badge="Blog & Educación"
          title="Recursos y Consejos Financieros"
          subtitle="Toma decisiones informadas. Explora guías y artículos preparados por nuestros expertos sobre préstamos hipotecarios, finanzas personales e inversiones."
          lightBg={true}
        />

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <BlogCard
                image={article.image}
                category={article.category}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                readTime={article.readTime}
                lightBg={true}
                onClick={() => {
                  navigate(`/blog/${article.id}`);
                }}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
