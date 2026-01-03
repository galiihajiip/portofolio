import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--text-secondary)] mb-6">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-[var(--text-muted)] mb-8 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="w-5 h-5" />
                {t('hero.downloadCV')}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-color)] text-[var(--text-primary)] rounded-md font-medium hover:bg-[var(--bg-secondary)] transition-colors"
              >
                {t('hero.contactMe')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-secondary)]" />
              <div className="absolute inset-2 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
