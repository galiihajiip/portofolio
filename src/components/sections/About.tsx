import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Zap, Users, BookOpen } from 'lucide-react';
import { Section } from '../ui/Section';

const highlights = [
  { key: 'highlight1', icon: Zap },
  { key: 'highlight2', icon: Users },
  { key: 'highlight3', icon: BookOpen },
];

export function About() {
  const { t } = useTranslation();

  return (
    <Section id="about" title={t('about.title')}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {t('about.p1')}
          </p>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {t('about.p2')}
          </p>
        </div>

        <div className="space-y-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glow-card p-6 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-primary)]/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    {t(`about.${item.key}Title`)}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {t(`about.${item.key}Desc`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
