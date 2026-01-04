import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'education', href: '#education' },
  { key: 'experience', href: '#experience' },
  { key: 'organization', href: '#organization' },
  { key: 'projects', href: '#projects' },
  { key: 'caseStudy', href: '#case-study' },
  { key: 'certifications', href: '#certifications' },
  { key: 'achievements', href: '#achievements' },
  { key: 'contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(newLang);
    localStorage.setItem('locale', newLang);
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-lg font-bold text-[var(--text-primary)] hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Galih Aji Pangestu
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                }`}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[var(--bg-primary)] border-b border-[var(--border-color)]"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
