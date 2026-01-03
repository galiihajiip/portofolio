import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Star } from 'lucide-react';
import { Section } from '../ui/Section';

interface OrgItem {
  name: string;
  role: string;
  period: string;
  description: string;
  impact: string;
}

export function Organization() {
  const { t } = useTranslation();
  const items = t('organization.items', { returnObjects: true }) as OrgItem[];

  return (
    <Section id="organization" title={t('organization.title')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--border-light)] transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-md bg-[var(--bg-tertiary)]">
                <Users className="w-5 h-5 text-[var(--text-primary)]" />
              </div>
              <span className="text-sm text-[var(--text-muted)]">{item.period}</span>
            </div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-1">{item.name}</h3>
            <p className="text-[var(--text-secondary)] mb-3">{item.role}</p>
            <p className="text-sm text-[var(--text-muted)] mb-4">{item.description}</p>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[var(--text-secondary)]" />
              <span className="text-sm font-medium text-[var(--text-secondary)]">{item.impact}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
