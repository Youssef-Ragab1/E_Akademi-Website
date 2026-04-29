import { motion } from 'framer-motion';
import { GraduationCap, Users, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const teamMembers = [
  { name: 'Youssef Ragab', id: '2010205552', color: '#FACC15' },
  { name: 'Ghufran Alkaddour', id: '2010205525', color: '#22C55E' },
  { name: 'Aicha Sabsabi', id: '2010205630', color: '#3B82F6' },
];

const techStack = [
  { name: 'Flutter', color: '#027DFD' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'ML Kit', color: '#4285F4' },
  { name: 'TFLite', color: '#FF6F00' },
  { name: 'ArcFace', color: '#E91E63' },
  { name: 'Provider', color: '#7C4DFF' },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="about-page">
      <div className="about-page__bg">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container">
        {/* Header */}
        <motion.div
          className="about__header"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div className="about__icon-wrap" variants={fadeUp}>
            <GraduationCap size={48} />
          </motion.div>
          <motion.h1 className="about__title" variants={fadeUp} custom={1}>
            {t('aboutTitle')} <span className="gradient-text">{t('aboutTitleAccent')}</span>
          </motion.h1>
          <motion.p className="about__subtitle" variants={fadeUp} custom={2}>
            {t('aboutSubtitle')}
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.div
          className="glass-card about__desc-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="about__desc">{t('aboutDesc')}</p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="about__tech"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 className="about__section-title" variants={fadeUp}>
            {t('techTitle')}
          </motion.h2>
          <motion.div className="about__tech-grid" variants={stagger}>
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className="about__tech-badge"
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.08, y: -4 }}
                style={{ borderColor: `${tech.color}30` }}
              >
                <span className="about__tech-dot" style={{ background: tech.color }} />
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team */}
        <motion.div
          className="about__team"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2 className="section-title" variants={fadeUp}>
            {t('teamTitle')} <span className="gradient-text">{t('teamTitleAccent')}</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            {t('teamSubtitle')}
          </motion.p>

          <motion.div className="about__team-grid" variants={stagger}>
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="glass-card about__team-card"
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8, borderColor: member.color }}
              >
                <div
                  className="about__team-avatar"
                  style={{ background: `${member.color}15`, color: member.color }}
                >
                  {member.name[0]}
                </div>
                <h3 className="about__team-name">{member.name}</h3>
                <p className="about__team-id">
                  {t('studentId')}: {member.id}
                </p>
                <div className="about__team-uni">
                  <GraduationCap size={14} />
                  <span>{t('university')}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Supervisor */}
        <motion.div
          className="about__supervisor"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2 className="section-title" variants={fadeUp}>
            {t('supervisorTitle')} <span className="gradient-text">{t('supervisorTitleAccent')}</span>
          </motion.h2>

          <motion.div
            className="glass-card about__supervisor-card"
            variants={fadeUp}
            custom={1}
            whileHover={{ y: -8, borderColor: '#F59E0B' }}
          >
            <div
              className="about__team-avatar"
              style={{ background: 'rgba(245, 158, 11, 0.12)', color: '#F59E0B' }}
            >
              A
            </div>
            <h3 className="about__team-name">Dr. Öğr. Üyesi Ammar Mohammed Ali AL-QADASİ</h3>
            <p className="about__supervisor-role">{t('supervisorRole')}</p>
            <a
              href="https://unis.karabuk.edu.tr/akademisyen-detay/ammarmohammed"
              target="_blank"
              rel="noopener noreferrer"
              className="about__supervisor-link"
            >
              <ExternalLink size={16} />
              {t('supervisorProfile')}
            </a>
          </motion.div>
        </motion.div>

        {/* University Info */}
        <motion.div
          className="about__uni-banner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <GraduationCap size={32} className="about__uni-icon" />
          <div>
            <h3 className="about__uni-name">{t('university')}</h3>
            <p className="about__uni-detail">{t('faculty')} — {t('department')}</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
