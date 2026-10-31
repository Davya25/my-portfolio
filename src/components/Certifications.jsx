import { certifications } from '../data/portfolioData';
import '../styles/Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Certifications</span>
          <h2 className="section-title">Credentials & Training</h2>
          <p className="section-subtitle">
            Professional certifications and training programs that validate my technical expertise.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map(cert => (
            <div key={cert.id} className="cert-card card">
              <div className="cert-icon-wrap" style={{ background: `${cert.color}15`, color: cert.color }}>
                <span className="cert-icon">{cert.icon}</span>
              </div>
              <div className="cert-content">
                <div className="cert-header">
                  <span className="cert-status">{cert.status}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-org">{cert.organization}</p>
              </div>
              <div className="cert-ribbon" style={{ background: cert.color }} />
            </div>
          ))}
        </div>

        {/* Training Note */}
        <div className="training-note">
          <div className="training-note-icon">🎓</div>
          <div>
            <h4>Currently Enrolled</h4>
            <p>
              <strong>Python Full Stack Program</strong> at Nxtwave Intensive (Jan 2026 – Dec 2026).
              An intensive program covering Python, Django, REST APIs and React.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
