import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const links = [
    { path: '/', label: t('navHome') },
    { path: '/download', label: t('navDownload') },
    { path: '/about', label: t('navAbout') },
  ];

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="navbar__inner container">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <img src={logoImg} alt="E_Akademi" className="navbar__logo-img" />
            </div>
            <span className="navbar__logo-text">E_Akademi</span>
          </Link>

          {/* Desktop Links */}
          <div className="navbar__links">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div className="navbar__link-indicator" layoutId="nav-indicator" />
                )}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="navbar__actions">
            <button onClick={toggleLanguage} className="navbar__lang-btn" aria-label="Toggle language">
              <Globe size={18} />
              <span>{language === 'en' ? 'TR' : 'EN'}</span>
            </button>
            <Link to="/download" className="navbar__cta btn-primary">
              {t('heroCta')}
            </Link>
            <button
              className="navbar__hamburger"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`mobile-menu__link ${location.pathname === link.path ? 'mobile-menu__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="mobile-menu__actions">
              <button onClick={toggleLanguage} className="navbar__lang-btn">
                <Globe size={18} />
                <span>{language === 'en' ? 'Türkçe' : 'English'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
