import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="navbar__logo-icon">
                <img src={logoImg} alt="E_Akademi" className="navbar__logo-img" />
              </div>
              <span className="navbar__logo-text">E_Akademi</span>
            </div>
            <p className="footer__desc">{t('heroSubtitle')}</p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">{t('navHome')}</h4>
            <Link to="/" className="footer__link">{t('navHome')}</Link>
            <Link to="/download" className="footer__link">{t('navDownload')}</Link>
            <Link to="/about" className="footer__link">{t('navAbout')}</Link>
          </div>

          {/* Info */}
          <div className="footer__col">
            <h4 className="footer__heading">Info</h4>
            <span className="footer__info">{t('university')}</span>
            <span className="footer__info">{t('faculty')}</span>
            <span className="footer__info">{t('department')}</span>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 E_Akademi. {t('footerRights')}</p>
          <p className="footer__made">
            {t('footerMadeWith').split('❤️')[0]}
            <Heart size={14} className="footer__heart" fill="var(--error)" color="var(--error)" />
            {t('footerMadeWith').split('❤️')[1]}
          </p>
        </div>
      </div>
    </footer>
  );
}
