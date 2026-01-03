import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';
import { Section } from '../ui/Section';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export function Experience() {
  const { t } = useTranslation();
  const items = t('experience.items', { returnObjects: true }) as ExperienceItem[];

  return (
    <Section id="experience" title={t('experience.title')}>
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--border-light)] transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
              <div className="p-3 rounded-md bg-[var(--bg-tertiary)] shrink-0">
                <Briefcase className="w-6 h-6 text-[var(--text-primary)]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">{item.role}</h3>
                  <span className="text-sm text-[var(--text-muted)] shrink-0">{item.period}</span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4">{item.company}</p>
                <p className="text-[var(--text-secondary)] mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                      <CheckCircle className="w-4 h-4 text-[var(--text-secondary)] shrink-0 mt-0.5" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
