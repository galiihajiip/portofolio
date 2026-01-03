import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  title?: string;
}

export function Section({ children, id, className = '', title }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[var(--text-primary)]">
              {title}
            </h2>
          )}
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
