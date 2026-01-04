import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, MessageCircle, Github, Linkedin, Instagram } from 'lucide-react';
import { Section } from '../ui/Section';

const socialLinks = [
  { icon: Github, href: 'https://github.com/galiihajiip', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/galiihajiip', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/galiihajiip', label: 'Instagram' },
];

export function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const email = '24081010123@student.upnjatim.ac.id';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" title={t('contact.title')}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-[var(--text-secondary)] mb-8">{t('contact.description')}</p>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-[var(--text-secondary)]" />
              <a href={`mailto:${email}`} className="text-lg text-[var(--text-primary)] hover:underline">
                {email}
              </a>
            </div>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {copied ? <><Check className="w-4 h-4" />{t('contact.copied')}</> : <><Copy className="w-4 h-4" />{t('contact.copyEmail')}</>}
            </button>
          </motion.div>

          <motion.a
            href="https://wa.me/6282265588823"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-3 p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--border-light)] transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-[var(--text-secondary)]" />
            <span className="text-[var(--text-primary)]">{t('contact.whatsapp')}</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm text-[var(--text-muted)] mb-4">{t('contact.social')}</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-light)] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
