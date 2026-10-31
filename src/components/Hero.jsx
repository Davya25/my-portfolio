import { FiDownload, FiEye, FiMapPin, FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import '../styles/Hero.css';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background decorations */}
      <div className="hero-bg-blob blob-1" aria-hidden="true" />
      <div className="hero-bg-blob blob-2" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          {/* Left: Text */}
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-dot" /> Hello, I am
            </div>

            <h1 className="hero-name">
              {personalInfo.firstName}{' '}
              <span className="gradient-text">{personalInfo.lastName}</span>
            </h1>

            <h2 className="hero-title">{personalInfo.title}</h2>

            <p className="hero-tagline">{personalInfo.tagline}</p>

            <div className="hero-meta">
              <span className="hero-meta-item">
                <FiMapPin size={15} />
                {personalInfo.location}
              </span>
              <span className="hero-status">
                <span className="status-dot" />
                {personalInfo.availability}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a
                href={personalInfo.resumeView}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FiEye size={16} /> View Resume
              </a>
              <a
                href={personalInfo.resumeDownload}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FiDownload size={16} /> Download Resume
              </a>
              <button className="btn btn-ghost" onClick={scrollToProjects}>
                Explore Projects <FiArrowDown size={16} />
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="hero-avatar-wrapper animate-float">
            <div className="hero-avatar-ring" />
            <div className="hero-avatar">
              {personalInfo.profileImage ? (
                <img src={personalInfo.profileImage} alt={personalInfo.name} />
              ) : (
                <DeveloperAvatar />
              )}
            </div>
            {/* Floating badges */}
            <div className="float-badge badge-python">🐍 Python</div>
            <div className="float-badge badge-react">⚛️ React</div>
            <div className="float-badge badge-django">🟩 Django</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

function DeveloperAvatar() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="avatar-svg">
      {/* Background circle */}
      <circle cx="100" cy="100" r="100" fill="url(#avatarBg)" />

      {/* Body */}
      <ellipse cx="100" cy="165" rx="52" ry="35" fill="#5b21b6" />
      <rect x="70" y="130" width="60" height="50" rx="10" fill="#6d28d9" />

      {/* Neck */}
      <rect x="88" y="112" width="24" height="22" rx="5" fill="#fbbf24" />

      {/* Head */}
      <ellipse cx="100" cy="90" rx="38" ry="42" fill="#fbbf24" />

      {/* Hair */}
      <ellipse cx="100" cy="56" rx="38" ry="18" fill="#1c1c2e" />
      <rect x="62" y="56" width="76" height="22" rx="0" fill="#1c1c2e" />
      <ellipse cx="62" cy="76" rx="8" ry="18" fill="#1c1c2e" />
      <ellipse cx="138" cy="76" rx="8" ry="18" fill="#1c1c2e" />

      {/* Eyes */}
      <ellipse cx="87" cy="90" rx="6" ry="7" fill="#fff" />
      <ellipse cx="113" cy="90" rx="6" ry="7" fill="#fff" />
      <circle cx="89" cy="91" r="4" fill="#1c1c2e" />
      <circle cx="115" cy="91" r="4" fill="#1c1c2e" />
      <circle cx="90" cy="90" r="1.5" fill="#fff" />
      <circle cx="116" cy="90" r="1.5" fill="#fff" />

      {/* Smile */}
      <path d="M88 104 Q100 116 112 104" stroke="#1c1c2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Laptop */}
      <rect x="55" y="155" width="90" height="55" rx="6" fill="#1c1c2e" />
      <rect x="60" y="160" width="80" height="42" rx="4" fill="#0d1117" />
      {/* Code on screen */}
      <rect x="65" y="166" width="35" height="3" rx="1.5" fill="#7c3aed" />
      <rect x="65" y="173" width="25" height="3" rx="1.5" fill="#a855f7" />
      <rect x="70" y="180" width="30" height="3" rx="1.5" fill="#10b981" />
      <rect x="65" y="187" width="40" height="3" rx="1.5" fill="#7c3aed" />
      <rect x="70" y="194" width="20" height="3" rx="1.5" fill="#f59e0b" />

      {/* Laptop base */}
      <ellipse cx="100" cy="210" rx="48" ry="6" fill="#252535" />

      <defs>
        <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
      </defs>
    </svg>
  );
}
