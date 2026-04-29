import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Cpu, Wifi, BarChart3, UserCheck, QrCode, ScanFace, CheckCircle, ChevronRight, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const { t } = useLanguage();

  const features = [
    { icon: <Shield size={28} />, title: t('feature1Title'), desc: t('feature1Desc'), color: '#FACC15' },
    { icon: <Cpu size={28} />, title: t('feature2Title'), desc: t('feature2Desc'), color: '#22C55E' },
    { icon: <Wifi size={28} />, title: t('feature3Title'), desc: t('feature3Desc'), color: '#3B82F6' },
    { icon: <BarChart3 size={28} />, title: t('feature4Title'), desc: t('feature4Desc'), color: '#A855F7' },
  ];

  const steps = [
    { icon: <UserCheck size={28} />, title: t('step1Title'), desc: t('step1Desc'), img: '/screenshots/student face registration.png' },
    { icon: <QrCode size={28} />, title: t('step2Title'), desc: t('step2Desc'), img: '/screenshots/doctor qrcode view.png' },
    { icon: <ScanFace size={28} />, title: t('step3Title'), desc: t('step3Desc'), img: '/screenshots/student homepage.png' },
    { icon: <CheckCircle size={28} />, title: t('step4Title'), desc: t('step4Desc'), img: '/screenshots/login homepage.png' },
  ];

  const screenshots = [
    { src: '/screenshots/login homepage.png', alt: 'Login' },
    { src: '/screenshots/register page.png', alt: 'Register' },
    { src: '/screenshots/student homepage.png', alt: 'Student Home' },
    { src: '/screenshots/Doctor homepage.png', alt: 'Doctor Home' },
    { src: '/screenshots/doctor qrcode view.png', alt: 'QR Code' },
    { src: '/screenshots/student face registration.png', alt: 'Face Registration' },
  ];

  return (
    <main>
      {/* ═══════════ HERO ═══════════ */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
          <div className="hero__grid-pattern" />
        </div>

        <div className="container hero__content">
          <motion.div className="hero__text" initial="hidden" animate="visible" variants={stagger}>
            <motion.p className="hero__badge" variants={fadeUp}>
              🎓 Graduation Project — Karabük University
            </motion.p>
            <motion.h1 className="hero__title" variants={fadeUp}>
              {t('heroTitle')}{' '}
              <span className="gradient-text">{t('heroTitleAccent')}</span>
            </motion.h1>
            <motion.p className="hero__subtitle" variants={fadeUp}>
              {t('heroSubtitle')}
            </motion.p>
            <motion.div className="hero__buttons" variants={fadeUp}>
              <Link to="/download" className="btn-primary">
                <Download size={18} /> {t('heroCta')}
              </Link>
              <Link to="/about" className="btn-secondary">
                {t('heroLearnMore')} <ChevronRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, y: 60, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__phone-group">
              <motion.div
                className="phone-mockup hero__phone hero__phone--main"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src="/screenshots/student homepage.png" alt="Student Home" />
              </motion.div>
              <motion.div
                className="phone-mockup hero__phone hero__phone--secondary"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <img src="/screenshots/Doctor homepage.png" alt="Doctor Home" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FEATURES ═══════════ */}
      <section className="section features">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="section-title">
              {t('featuresTitle')} <span className="gradient-text">{t('featuresTitleAccent')}</span>
            </h2>
            <p className="section-subtitle">{t('featuresSubtitle')}</p>
          </motion.div>

          <motion.div
            className="features__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {features.map((f, i) => (
              <motion.div key={i} className="glass-card feature-card" variants={fadeUp} custom={i}>
                <div className="feature-card__icon" style={{ background: `${f.color}15`, color: f.color }}>
                  {f.icon}
                </div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="section how-it-works">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="section-title">
              {t('howTitle')} <span className="gradient-text">{t('howTitleAccent')}</span>
            </h2>
            <p className="section-subtitle">{t('howSubtitle')}</p>
          </motion.div>

          <div className="steps">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className={`step ${i % 2 === 1 ? 'step--reverse' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i}
              >
                <div className="step__content">
                  <div className="step__number">{String(i + 1).padStart(2, '0')}</div>
                  <div className="step__icon">{step.icon}</div>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__desc">{step.desc}</p>
                </div>
                <div className="step__visual">
                  <motion.div
                    className="phone-mockup"
                    whileHover={{ scale: 1.03, rotateY: 5 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <img src={step.img} alt={step.title} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SCREENSHOTS ═══════════ */}
      <section className="section screenshots">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="section-title">
              {t('screenshotsTitle')} <span className="gradient-text">{t('screenshotsTitleAccent')}</span>
            </h2>
            <p className="section-subtitle">{t('screenshotsSubtitle')}</p>
          </motion.div>

          <motion.div
            className="screenshots__scroll"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {screenshots.map((s, i) => (
              <motion.div key={i} className="phone-mockup screenshots__phone" variants={fadeUp} custom={i}>
                <img src={s.src} alt={s.alt} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="cta-card__title">
              {t('downloadTitle')} <span className="gradient-text">{t('downloadTitleAccent')}</span>
            </h2>
            <p className="cta-card__desc">{t('downloadSubtitle')}</p>
            <Link to="/download" className="btn-primary cta-card__btn">
              <Download size={20} /> {t('heroCta')}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
