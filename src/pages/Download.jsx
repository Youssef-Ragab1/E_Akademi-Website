import { motion } from 'framer-motion';
import { Download as DownloadIcon, Smartphone, Camera, Wifi, HardDrive, ChevronRight, FileDown, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Download.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Download() {
  const { t } = useLanguage();

  const requirements = [
    { icon: <Smartphone size={20} />, text: t('req1') },
    { icon: <Camera size={20} />, text: t('req2') },
    { icon: <Wifi size={20} />, text: t('req3') },
    { icon: <HardDrive size={20} />, text: t('req4') },
  ];

  const installSteps = [
    t('install1'),
    t('install2'),
    t('install3'),
    t('install4'),
    t('install5'),
  ];

  return (
    <main className="download-page">
      <div className="download-page__bg">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container">
        {/* Hero Section */}
        <motion.div
          className="download__hero"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.div className="download__icon-wrap" variants={fadeUp}>
            <div className="download__icon">
              <DownloadIcon size={48} />
            </div>
            <div className="download__icon-ring" />
            <div className="download__icon-ring download__icon-ring--2" />
          </motion.div>

          <motion.h1 className="download__title" variants={fadeUp} custom={1}>
            {t('downloadTitle')} <span className="gradient-text">{t('downloadTitleAccent')}</span>
          </motion.h1>
          <motion.p className="download__subtitle" variants={fadeUp} custom={2}>
            {t('downloadSubtitle')}
          </motion.p>

          <motion.a
            href="/E_Akademi.apk"
            download="E_Akademi.apk"
            className="btn-primary download__btn"
            variants={fadeUp}
            custom={3}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileDown size={22} /> {t('downloadBtn')}
          </motion.a>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          className="download__info-grid"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
        >
          <div className="download__info-card">
            <span className="download__info-label">{t('downloadSize')}</span>
            <span className="download__info-value">52.8 MB</span>
          </div>
          <div className="download__info-card">
            <span className="download__info-label">{t('downloadVersion')}</span>
            <span className="download__info-value">1.0.0</span>
          </div>
          <div className="download__info-card">
            <span className="download__info-label">{t('downloadMinAndroid')}</span>
            <span className="download__info-value">6.0+</span>
          </div>
          <div className="download__info-card">
            <span className="download__info-label">{t('downloadLastUpdated')}</span>
            <span className="download__info-value">Apr 2026</span>
          </div>
        </motion.div>

        {/* Two Column: Requirements + Install */}
        <div className="download__two-col">
          <motion.div
            className="glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="download__section-icon">
              <Shield size={24} />
            </div>
            <h2 className="download__section-title">{t('requirementsTitle')}</h2>
            <ul className="download__req-list">
              {requirements.map((req, i) => (
                <li key={i} className="download__req-item">
                  <span className="download__req-icon">{req.icon}</span>
                  <span>{req.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="download__section-icon download__section-icon--blue">
              <DownloadIcon size={24} />
            </div>
            <h2 className="download__section-title">{t('installTitle')}</h2>
            <ol className="download__install-list">
              {installSteps.map((step, i) => (
                <li key={i} className="download__install-item">
                  <span className="download__install-num">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
