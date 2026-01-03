import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Trophy, Calendar } from 'lucide-react';
import { Section } from '../ui/Section';

interface AchievementItem {
  title: string;
  organizer: string;
  year: string;
  description: string;
}

export function Achievements() {
  const { t } = useTranslation();
  const items = t('achievements.items', { returnObjects: true }) as AchievementItem[];

  return (
    <Section id="achievements" title={t('achievements.title')}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--border-light)] transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-md bg-[var(--bg-tertiary)]">
                <Trophy className="w-5 h-5 text-[var(--text-primary)]" />
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Calendar className="w-4 h-4" />
                {item.year}
              </div>
            </div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-3">{item.organizer}</p>
            <p className="text-sm text-[var(--text-muted)]">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
