import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Instagram, Mail, Download } from 'lucide-react';
import { Container } from '../ui/Container';

const socialLinks = [
  { icon: Github, href: 'https://github.com/galihajipangestu', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/galihajipangestu', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/galihajipangestu', label: 'Instagram' },
];

const quickLinks = [
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'experience', href: '#experience' },
  { key: 'contact', href: '#contact' },
];

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
              Galih Aji Pangestu
            </h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4">Software Developer</p>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              {t('footer.downloadCV')}
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href="mailto:galih@example.com"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              galih@example.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-color)] text-center">
          <p className="text-[var(--text-muted)] text-sm">
            {t('footer.copyright')} © {currentYear} Galih Aji Pangestu. {t('footer.allRights')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
