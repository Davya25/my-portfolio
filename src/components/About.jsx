import { FiCode, FiBook, FiTarget, FiCpu } from 'react-icons/fi';
import { personalInfo, achievements } from '../data/portfolioData';
import '../styles/About.css';

const highlights = [
  {
    icon: <FiCode size={22} />,
    title: 'Full Stack Dev',
    desc: 'Python · Django · React.js',
    color: '#7c3aed',
  },
  {
    icon: <FiBook size={22} />,
    title: 'B.Tech IT',
    desc: 'Andhra University · CGPA 8.02',
    color: '#a855f7',
  },
  {
    icon: <FiCpu size={22} />,
    title: 'DSA Enthusiast',
    desc: '150+ Problems Solved',
    color: '#6d28d9',
  },
  {
    icon: <FiTarget size={22} />,
    title: 'Open to Work',
    desc: 'Python Full Stack Roles',
    color: '#10b981',
  },
];

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Passionate Developer. Problem Solver.</h2>
          <p className="section-subtitle">
            Here's a little about who I am, what I do, and where I'm headed.
          </p>
        </div>

        <div className="about-content">
          {/* Left: Info Card */}
          <div className="about-left">
            <div className="about-card card">
              <div className="about-avatar-mini">
                <span className="avatar-initials">DP</span>
              </div>
              <h3 className="about-card-name">{personalInfo.name}</h3>
              <p className="about-card-title">{personalInfo.title}</p>
              <div className="about-card-divider" />

              <div className="about-info-list">
                <div className="about-info-item">
                  <span className="info-label">📍 Location</span>
                  <span className="info-value">{personalInfo.location}</span>
                </div>
                <div className="about-info-item">
                  <span className="info-label">📧 Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="info-value info-link">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="about-info-item">
                  <span className="info-label">📞 Phone</span>
                  <a href={`tel:${personalInfo.phone}`} className="info-value info-link">
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="about-info-item">
                  <span className="info-label">🎯 Status</span>
                  <span className="info-value info-status">Open to Work</span>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="highlights-grid">
              {highlights.map((h, i) => (
                <div className="highlight-card card" key={i}>
                  <div className="highlight-icon" style={{ color: h.color, background: `${h.color}18` }}>
                    {h.icon}
                  </div>
                  <div>
                    <p className="highlight-title">{h.title}</p>
                    <p className="highlight-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio */}
          <div className="about-right">
            <div className="about-bio">
              <h3 className="bio-heading">Hello there! 👋</h3>
              <p className="bio-text">
                I'm <strong>Davya Poojitha Vemulamada</strong>, a passionate <strong>Python Full Stack Developer</strong> based in Visakhapatnam, Andhra Pradesh. I specialize in building full-stack web applications using Python, Django, Django REST Framework and React.js.
              </p>
              <p className="bio-text">
                I hold a <strong>B.Tech in Information Technology</strong> from Andhra University (CGPA: 8.02/10) and am currently enrolled in the <strong>Nxtwave Intensive Python Full Stack Program</strong>, which has significantly deepened my skills in modern web development practices.
              </p>
              <p className="bio-text">
                My experience spans across building secure REST APIs with JWT authentication, designing relational database models with Django ORM, creating responsive frontend interfaces with React.js, and handling concurrent operations. I have solved <strong>150+ DSA problems</strong> using Python, which has strengthened my problem-solving capabilities.
              </p>
              <p className="bio-text">
                I'm deeply passionate about clean code, efficient systems and user-friendly interfaces. I'm currently seeking opportunities as a <strong>Python Full Stack Developer</strong> where I can contribute meaningfully and continue to grow.
              </p>

              {/* Achievements */}
              <div className="about-achievements">
                <h4 className="achievements-title">🏆 Key Achievements</h4>
                <ul className="achievements-list">
                  {achievements.map((a, i) => (
                    <li key={i} className="achievement-item">
                      <span className="achievement-dot" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="about-cta">
                <a
                  href={personalInfo.resumeView}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Resume
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
