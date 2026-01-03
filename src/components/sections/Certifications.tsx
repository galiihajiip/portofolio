import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { Section } from '../ui/Section';

type Category = 'all' | 'web' | 'ml' | 'general';

interface CertItem {
  name: string;
  issuer: string;
  year: string;
  category: Category;
  skills: string[];
  relevance: string;
}

export function Certifications() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const items = t('certifications.items', { returnObjects: true }) as CertItem[];
  const filters: Category[] = ['all', 'web', 'ml', 'general'];
  
  const filteredItems = activeFilter === 'all' ? items : items.filter(item => item.category === activeFilter);

  return (
    <Section id="certifications" title={t('certifications.title')}>
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
            }`}
          >
            {t(`certifications.filters.${filter}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="p-6 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--border-light)] transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-md bg-[var(--bg-tertiary)]">
                <Award className="w-5 h-5 text-[var(--text-primary)]" />
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Calendar className="w-4 h-4" />
                {item.year}
              </div>
            </div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-1">{item.name}</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">{item.issuer}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-sm text-[var(--text-muted)]">{item.relevance}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
