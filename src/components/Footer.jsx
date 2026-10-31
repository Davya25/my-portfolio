import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import '../styles/Footer.css';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FiGithub size={18} />, href: personalInfo.github, label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: <FiMail size={18} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (href) => {
    const id = href.substring(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Back to Top */}
      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        <FiArrowUp size={20} />
      </button>

      <div className="footer-container">
        {/* Top Row */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-name">Davya</span>
              <span className="footer-logo-dot gradient-text">.dev</span>
            </div>
            <p className="footer-bio">
              Python Full Stack Developer passionate about building efficient, user-friendly web applications using Python, Django and React.js.
            </p>
            <div className="footer-socials">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav">
            <h4 className="footer-nav-title">Quick Links</h4>
            <ul className="footer-nav-list">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick */}
          <div className="footer-contact">
            <h4 className="footer-nav-title">Contact</h4>
            <div className="footer-contact-list">
              <a href={`mailto:${personalInfo.email}`} className="footer-contact-item">
                <FiMail size={14} />
                <span>{personalInfo.email}</span>
              </a>
              <div className="footer-contact-item">
                <span>📍</span>
                <span>{personalInfo.location}</span>
              </div>
              <a
                href={personalInfo.resumeView}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm footer-resume-btn"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Row */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <strong>{personalInfo.name}</strong>. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <FiHeart size={13} className="heart-icon" /> using React.js & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
