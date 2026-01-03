import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Section } from '../ui/Section';

interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  focus: string;
}

export function Education() {
  const { t } = useTranslation();
  const items = t('education.items', { returnObjects: true }) as EducationItem[];

  return (
    <Section id="education" title={t('education.title')}>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border-color)] md:-translate-x-px" />
        
        <div className="space-y-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--text-primary)] -translate-x-1/2 mt-6 md:mt-0 md:top-1/2 md:-translate-y-1/2" />
              
              <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className={`p-6 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] ${
                  index % 2 === 0 ? 'md:ml-auto' : ''
                } max-w-md`}>
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="p-2 rounded-md bg-[var(--bg-tertiary)]">
                      <GraduationCap className="w-5 h-5 text-[var(--text-primary)]" />
                    </div>
                    <span className="text-sm text-[var(--text-muted)]">{item.year}</span>
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">{item.institution}</h3>
                  <p className="text-[var(--text-secondary)] mb-2">{item.degree}</p>
                  <p className="text-sm text-[var(--text-muted)]">{item.focus}</p>
                </div>
              </div>
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
