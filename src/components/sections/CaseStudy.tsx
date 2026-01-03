import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AlertCircle, Target, Lightbulb, AlertTriangle, CheckCircle2, TrendingUp, RefreshCw } from 'lucide-react';
import { Section } from '../ui/Section';

interface CaseStudyItem {
  title: string;
  problem: string;
  importance: string;
  approach: string;
  challenges: string;
  solution: string;
  results: string;
  reflection: string;
}

const sectionIcons = {
  problem: AlertCircle,
  importance: Target,
  approach: Lightbulb,
  challenges: AlertTriangle,
  solution: CheckCircle2,
  results: TrendingUp,
  reflection: RefreshCw,
};

const sectionLabels: Record<string, string> = {
  problem: 'Problem',
  importance: 'Why It Matters',
  approach: 'Approach',
  challenges: 'Challenges',
  solution: 'Solution',
  results: 'Results',
  reflection: 'Reflection',
};

export function CaseStudy() {
  const { t } = useTranslation();
  const items = t('caseStudy.items', { returnObjects: true }) as CaseStudyItem[];
  const sections = ['problem', 'importance', 'approach', 'challenges', 'solution', 'results', 'reflection'] as const;

  return (
    <Section id="case-study" title={t('caseStudy.title')}>
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">{item.title}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((section, sIndex) => {
                const Icon = sectionIcons[section];
                return (
                  <motion.div
                    key={section}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: sIndex * 0.05 }}
                    className={`p-5 rounded-lg bg-[var(--bg-tertiary)] ${
                      section === 'results' || section === 'reflection' ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-md bg-[var(--bg-secondary)]">
                        <Icon className="w-4 h-4 text-[var(--text-primary)]" />
                      </div>
                      <h4 className="font-semibold text-[var(--text-primary)]">{sectionLabels[section]}</h4>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item[section]}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
