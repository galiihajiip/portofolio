import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Section } from '../ui/Section';

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  sourceUrl: string;
}

export function Projects() {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true }) as ProjectItem[];

  return (
    <Section id="projects" title={t('projects.title')}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="glow-card group rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden hover:border-[var(--accent-primary)]/50 hover:shadow-xl hover:shadow-[var(--accent-primary)]/10 transition-all duration-300"
          >
            <div className="h-48 bg-[var(--bg-tertiary)] flex items-center justify-center text-6xl">
              {index === 0 ? '🌐' : index === 1 ? '📋' : '🌤️'}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-3">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded text-white hover:opacity-90 transition-opacity"
                  style={{ background: 'var(--accent-gradient)' }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded border border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all"
                >
                  <Github className="w-4 h-4" />
                  Source
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
